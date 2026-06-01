"use client";
import { useDfaBuilderStore } from "./state";
import TextEditor from "@/components/editor";
import { DFAState } from "./dfa-state";
import { FilePlusCorner } from "lucide-react";

export default function DFAbuilder() {
    const { dfaInput, dfaSymbols, dfaNodes, setDfaSymbols, setDfaInput, setDfaNodes } = useDfaBuilderStore();
    const addToStack = () => {
        const dfaState = new DFAState("DFA1", dfaSymbols, parseInt(dfaNodes));
        dfaState.fromString(dfaInput);
        console.log("DFA State Created:", dfaState);
    }
    return (
        <div>
            <h1 className="text-xl font-bold text-center">
                DFA Builder
            </h1>
            <button className="flex items-center bg-green-900 hover:bg-green-800 text-white py-1 px-3 rounded-sm" onClick={addToStack}>
                <FilePlusCorner className="mr-1" size={16} /> Add To Stack
            </button>
            <table className="m-4">
                <tr>
                    <td className="px-4 py-2">Symbols:</td>
                    <td>
                        <input
                            type="text"
                            placeholder="Enter symbols (comma separated)"
                            value={dfaSymbols}
                            onChange={(e) => setDfaSymbols(e.target.value)}
                            className="border border-yellow-600 rounded-md py-1 px-3 focus:outline-none text-yellow-600 bg-transparent col-span-2"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-2">Number Of Nodes:</td>
                    <td>
                        <input
                            type="text"
                            placeholder="Enter number of nodes"
                            value={dfaNodes}
                            onChange={(e) => setDfaNodes(e.target.value)}
                            className="border border-green-600 rounded-md py-1 px-3 focus:outline-none text-green-600 bg-transparent col-span-2"
                        />
                    </td>
                </tr>
            </table>
            <div className="grid grid-cols-3 gap-4 w-100">
                <span></span>

                <span></span>

            </div>
            <TextEditor text={dfaInput} setText={setDfaInput} className="w-1/2" />
        </div>
    )
}