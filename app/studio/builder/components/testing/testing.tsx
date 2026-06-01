"use client"
import {
    ButtonGroup
} from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRef, useState } from "react";

export default function Testing() {
    const [generatorMode, setGeneratorMode] = useState<string>("permutation");
    const stringLength = useRef(null);
    const stringNumber = useRef(null);
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
                    {generatorMode === "random" && <input ref={stringNumber} type="text" placeholder="Enter Max String Length" className="border border-gray-300 rounded-md p-2" />}
                </div>

                <div className="border-t border-gray-300 mt-4 py-4">
                    <ButtonGroup>
                        <Button className="bg-green-900 hover:bg-green-700 text-white">Run</Button>
                        <Button className="bg-green-900 hover:bg-green-700 text-white">Step</Button>
                        <Button className="bg-yellow-900 hover:bg-yellow-700 text-white">Reset</Button>
                    </ButtonGroup>
                    <div className="flex items-center gap-4 mt-4 border-t border-b border-gray-300 p-1 mx-4">
                        <div className="px-2 border rounded-md border-gray-300 text-xl">
                            1
                        </div>
                        <div className="p-2 text-xl">
                            Test String : <span className="text-orange-500 font-medium">"{"0110101"}"</span>
                        </div>
                        <div className="p-2 text-xl">
                            Test Result : <span className="text-green-500 font-medium">{"true"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}