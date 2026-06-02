"use client";
import {
    ButtonGroup
} from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useFunctionBuilderStore } from "./state";
import { Play, FilePlusCorner, Pencil } from "lucide-react";
import { useState } from "react";
import { useStackStore } from "../stack/state";
import "./style.css";

export default function FunctionBuilder() {
    const { code, setCode, input, setInput, output, setOutput, inputTab, setInputTab, name, setName } = useFunctionBuilderStore();
    const [errMessage, setErrMessage] = useState("");
    const { addFunction } = useStackStore();

    const runFunction = () => {
        try {
            const func = new Function("s", code);
            const result = func(input);
            setOutput(result.toString());
            setErrMessage("");
        } catch (error) {
            setErrMessage(error instanceof Error ? error.message : "An unknown error occurred.");
            setOutput("");
        }
    };

    const addToStack = () => {
        if (!name || !code) {
            setErrMessage("Please provide both a name and code for the function before adding to the stack.");
            return;
        }
        setErrMessage("");
        addFunction(name, code);
    }
    return (
        <>
            <h1 className="text-xl font-bold text-center">Function Builder</h1>
            <div className="rounded-sm shadow-md shadow-black/20 dark:shadow-white/20">
                <ButtonGroup>
                    {
                        [
                            { name: "Input", action: () => setInputTab(true), icon: Pencil },
                            { name: "Run", action: () => { setInputTab(false); runFunction(); }, icon: Play },
                            { name: "Add to Stack", action: addToStack, icon: FilePlusCorner }
                        ].map((tab, i) => (
                            <Button
                                key={tab.name}
                                className={`bg-green-900 hover:bg-green-800 ${(inputTab && i === 0) || (!inputTab && i === 1) ? "text-sky-500" : "text-white"} py-1 px-3 rounded-sm`}
                                onClick={tab.action}
                            >
                                {tab.name} {tab.icon && <tab.icon size={16} />}
                            </Button>
                        ))
                    }
                </ButtonGroup>
                <div className="w-full p-4 text-green-400">
                    {errMessage && <p className="text-red-500">{errMessage}</p>}
                    <p className="text-lg">Test your function with different input values.</p>
                </div>
                {inputTab ? (
                    <input
                        type="text"
                        className="w-full p-4 focus:outline-none text-yellow-600"
                        placeholder="Enter A Test String..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                ) : (
                    <div className="w-full p-4 text-green-400">
                        <p className="text-lg">{output}</p>
                    </div>
                )}
                <h1 className="text-xl pt-4 px-4 space-x-1 border-t-1 border-green-300 dark:border-green-700">
                    <span className="text-purple-500">function</span>
                    <input
                        type="text"
                        className={`w-32 py-1 px-3 focus:outline-none dark:text-white text-sm bg-transparent rounded-full border-2 ${!name ? "" : "border-green-800 dark:border-green-500"}`}
                        style={{ animation: !name ? "highlight 2s infinite" : "none" }}
                        placeholder="Enter Name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="text-purple-500">(</span>
                    <span className="text-teal-400">s</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-yellow-600">string</span>
                    <span className="text-purple-500">)</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-blue-400">boolean</span>
                </h1>
                <CodeEditor
                    value={code}
                    language="js"
                    placeholder="Please enter your function code here. Example: return s[s.length-1] ==='0';"
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 16,
                        backgroundColor: "transparent",
                        fontFamily: 'ui-monospace, SF Mono, SF Mono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
                    }}
                />
            </div>
        </>
    );
}