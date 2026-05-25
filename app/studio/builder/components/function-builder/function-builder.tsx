"use client";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useFunctionBuilderStore } from "./state";

export default function FunctionBuilder() {
    const { code, setCode, input, setInput, output, setOutput, inputTab, setInputTab } = useFunctionBuilderStore();

    const runFunction = () => {
        try {
            const func = new Function("s", code);
            const result = func(input);
            setOutput(result.toString());
        } catch (error) {
            setOutput(error instanceof Error ? error.message : "An unknown error occurred.");
        }
    };

    const addToStack = () => {
        console.log("Adding to stack:", code);
    }
    return (
        <>
            <h1 className="text-xl font-bold text-center">Function Builder</h1>
            <div className="rounded-sm shadow-md shadow-black/20 dark:shadow-white/20">
                <div className="flex justify-start space-x-0.5 mx-0.5">
                    {
                        [
                            { name: "Input", action: () => setInputTab(true) },
                            { name: "Run", action: () => { setInputTab(false); runFunction(); } },
                            { name: "Add to Stack [+]", action: addToStack }
                        ].map((tab, i) => (
                            <button
                                key={tab.name}
                                className={`px-3 text-md font-bold py-1 bg-green-800 text-white ${(i === 0 || i === 2) ? (`rounded-${{ 0: "l", 2: "r" }[i]}-md`) : ""} hover:bg-green-600`}
                                onClick={tab.action}
                            >
                                {tab.name}
                            </button>
                        ))
                    }
                </div>
                {inputTab ? (
                    <input
                        type="text"
                        className="w-full p-4 mt-4 focus:outline-none text-yellow-600"
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
                    <span className="text-purple-800">function</span>
                    <span className="text-purple-800">(</span>
                    <span className="text-teal-400">s</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-yellow-600">string</span>
                    <span className="text-purple-800">)</span>
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