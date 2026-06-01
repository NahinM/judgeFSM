"use client"
import {
    ButtonGroup
} from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { Play, CirclePause, RotateCcw, StepForward } from "lucide-react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRef, useState } from "react";
import { RandomStringGenerator } from "@/app/engine/random-string";

function setElementValue(ref: React.RefObject<HTMLDivElement | null>, value: any) {
    if (ref.current) {
        ref.current.innerText = value.toString();
    }
}

export default function Testing() {
    const stringLength = useRef<HTMLInputElement | null>(null);
    const stringNumber = useRef<HTMLInputElement | null>(null);
    const symbolsInput = useRef<HTMLInputElement | null>(null);
    const stringGenerator = useRef<RandomStringGenerator | null>(null);

    const stringSL = useRef<HTMLDivElement | null>(null);
    const testString = useRef<HTMLDivElement | null>(null);
    const testResult = useRef<HTMLDivElement | null>(null);
    const [stop, setStop] = useState<boolean>(true);
    const running = useRef<boolean>(false);

    const [generatorMode, setGeneratorMode] = useState<string>("permutation");

    const run = async () => {
        if (!stringGenerator.current) {
            stringGenerator.current = getEngine();
        }
        if (stringGenerator.current) {
            while (!stringGenerator.current.isDone() && running.current) {
                const nextString = stringGenerator.current.getString();
                setElementValue(stringSL, stringSL.current?.innerText ? parseInt(stringSL.current.innerText) + 1 : 1);
                setElementValue(testString, nextString);
                await new Promise((resolve) => setTimeout(resolve, 0));
            }
        }
    };

    const singleStep = () => {
        if (!stringGenerator.current) {
            stringGenerator.current = getEngine();
        }
        if (stringGenerator.current) {
            if (stringGenerator.current.isDone()) {
                window.alert("No more strings to generate");
                return;
            }
            const nextString = stringGenerator.current.getString();
            setElementValue(stringSL, stringSL.current?.innerText ? parseInt(stringSL.current.innerText) + 1 : 1);
            setElementValue(testString, nextString);
            setElementValue(testResult, "");
        }
    };

    const reset = () => {
        stringGenerator.current = null;
        setElementValue(stringSL, "0");
        setElementValue(testString, "");
        setElementValue(testResult, "");
        setStop(true);
        running.current = false;
    }

    const getEngine = () => {
        if (generatorMode === "random" && stringLength.current && stringNumber.current && symbolsInput.current) {
            const length = parseInt(stringLength.current?.value);
            const number = parseInt(stringNumber.current?.value);
            const symbols = symbolsInput.current.value;
            setElementValue(stringSL, "0");
            return new RandomStringGenerator(symbols, number, length);
        }
        return null;
    };

    return (
        <div>
            <h1 className="text-xl font-bold text-center">Testing</h1>
            {/* Add your testing UI components here */}
            <div className="mt-4 border border-gray-300 rounded-md p-4">

                <div className="flex items-center gap-4">
                    <Select onValueChange={(value) => setGeneratorMode(value)} defaultValue="permutation">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select String Generator" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="permutation">
                                    Permutation
                                </SelectItem>
                                <SelectItem value="random">
                                    Random
                                </SelectItem>
                                <SelectItem value="testcase">
                                    Test Case
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {generatorMode !== "testcase" && <input ref={stringLength} type="text" placeholder="Enter Max String Length" className="border border-gray-300 rounded-md p-2" />}
                    {generatorMode === "random" && <input ref={stringNumber} type="text" placeholder="Enter Max Number of Strings" className="border border-gray-300 rounded-md p-2" />}
                </div>

                <div className="border-t border-gray-300 mt-4 py-4">
                    <div className="flex items-center gap-4 mb-4 border-b border-gray-300 pb-4 text-xl">
                        <span>Symbols:</span>
                        <input ref={symbolsInput} type="text" placeholder="Enter Symbols" className="border-b border-orange-500 focus:outline-none" />
                    </div>
                    <ButtonGroup>
                        <Button className={`bg-${stop ? 'green' : 'red'}-900 hover:bg-${stop ? 'green' : 'red'}-700 text-white`} onClick={
                            () => {
                                if (running.current) {
                                    setStop(true);
                                    running.current = false;
                                } else {
                                    setStop(false);
                                    running.current = true;
                                    run();
                                }
                            }}>
                            {stop ? "Run" : "Stop"} {stop ? <Play className="ml-1" size={16} /> : <CirclePause className="ml-1" size={16} />}
                        </Button>
                        <Button className="bg-green-900 hover:bg-green-700 text-white" onClick={singleStep}>
                            Step <StepForward className="ml-1" size={16} />
                        </Button>
                        <Button className="bg-yellow-900 hover:bg-yellow-700 text-white" onClick={reset}>
                            Reset <RotateCcw className="ml-1" size={16} />
                        </Button>
                    </ButtonGroup>
                    <div className="flex items-center gap-4 mt-4 border-t border-b border-gray-300 p-1 mx-4">
                        <div
                            ref={stringSL}
                            className="px-2 border rounded-md border-gray-300 text-xl">
                        </div>
                        <div className="p-2 text-xl">
                            Test String : <span ref={testString} className="text-orange-500 font-medium">{""}</span>
                        </div>
                        <div className="p-2 text-xl">
                            Test Result : <span ref={testResult} className="text-green-500 font-medium">{""}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}