"use client";
import { useDfaBuilderStore } from "./state";
import TextEditor from "@/components/editor";
export default function DFAbuilder() {
    const { dfaInput, setDfaInput } = useDfaBuilderStore();
    const addToStack = () => {
        console.log("Adding to stack:", dfaInput);
    }
    return (
        <div>
            <h1 className="text-xl font-bold text-center">
                DFA Builder
            </h1>
            <button className="bg-green-900 hover:bg-green-800 text-white text-sm py-1 px-3 rounded-sm" onClick={addToStack}>
                Add To Stack [+]
            </button>
            <TextEditor text={dfaInput} setText={setDfaInput} className="w-1/2" />
        </div>
    )
}