"use client";
import TextEditor from "@/components/editor";
import { useTestCaseBuilderStore } from "./state";

export default function TestCaseBuilder() {
    const { text, setText } = useTestCaseBuilderStore();
    const addToStack = () => {
        console.log("Adding to stack:", text);
    }
    return (
        <div>
            <h1 className="text-xl font-bold text-center">Testcase Builder</h1>
            <button className="text-white py-1 px-3 rounded-md bg-green-900 hover:bg-green-800" onClick={addToStack}>
                Add To Stack [+]
            </button>
            {/* Add your testcase builder UI components here */}
            <TextEditor text={text} setText={setText} className="w-1/2" />
        </div>
    );
}