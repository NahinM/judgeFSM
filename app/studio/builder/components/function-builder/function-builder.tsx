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

    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-10">Function Builder</h1>
            <div className="mt-10 border-2 border-gray-300 rounded-lg">
                <div className="flex justify-start">
                    <button className="px-3 text-lg py-1 bg-green-800 text-white rounded-l-md hover:bg-green-600 border-r-2 border-gray-900" onClick={() => setInputTab(true)}>
                        Input
                    </button>
                    <button
                        className="px-3 text-lg py-1 bg-green-800 text-white rounded-r-md hover:bg-green-600"
                        onClick={() => { setInputTab(false); runFunction(); }}>
                        Run
                    </button>
                </div>
                {inputTab ? (
                    <input
                        type="text"
                        className="w-full p-4 mb-4 border-t-2 border-gray-300 focus:outline-none text-yellow-600"
                        placeholder="Enter A Test String..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                ) : (
                    <div className="w-full p-4 mb-4 border-t-2 border-gray-300 text-green-400">
                        <p className="text-lg">{output}</p>
                    </div>
                )}
                <h1 className="text-xl pt-4 px-4 space-x-1 border-t-2 border-gray-300">
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