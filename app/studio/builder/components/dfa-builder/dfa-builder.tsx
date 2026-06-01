"use client";
import { useDfaBuilderStore } from "./state";
import TextEditor from "@/components/editor";
import { DFAState } from "./dfa-state";
import { FilePlusCorner } from "lucide-react";
import { useStackStore } from "../stack/state";

export default function DFAbuilder() {
    const { dfaInput, dfaSymbols, dfaNodes, setDfaSymbols, setDfaInput, setDfaNodes } = useDfaBuilderStore();
    const { addDfa } = useStackStore();
    const addToStack = () => {
        const dfaState = new DFAState("DFA1", dfaSymbols, parseInt(dfaNodes));
        dfaState.fromString(dfaInput);
        addDfa(dfaState);
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
            <table className="table-auto border-l-5 border-green-600 border-separate border-spacing-2 ml-1 px-4">
                <tbody>
                    <tr>
                        <td>Symbols:</td>
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
                        <td>Number Of Nodes:</td>
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
                </tbody>
            </table>
            <div className="grid grid-cols-3 gap-4 w-100">
                <span></span>

                <span></span>

            </div>
            <TextEditor text={dfaInput} setText={setDfaInput} className="w-1/2" />
        </div>
    )
}