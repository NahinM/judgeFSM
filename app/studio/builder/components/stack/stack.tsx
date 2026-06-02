import { useStackStore } from "./state";
import { Button } from "@/components/ui/button";
import { Trash2, ListPlus, RefreshCcw } from "lucide-react";
import { useEffect } from "react";

export default function Stack() {
    const { dfas, removeDfa, functions, removeFunction, loadRecording } = useStackStore();
    useEffect(() => {
        loadRecording();
        console.log("DFA in stack");
    }, [])
    return (
        <div className="p-4">
            <div className="flex justify-center border-t border-black dark:border-white p-2">
                <Button className="bg-green-900 hover:bg-green-800 text-white" onClick={loadRecording}>
                    Refresh Stack <RefreshCcw size={16} />
                </Button>
            </div>
            <table className="table-fixed w-full mt-4 text-center">
                <thead>
                    <tr>
                        <td>DFAs</td>
                        <td>Functions</td>
                        <td>Test Cases</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="p-2 border border-black dark:border-white rounded-md h-80 overflow-y-auto">
                                {dfas.map((dfa, index) => (
                                    <div key={index} className="flex items-center mb-1 px-5 py-1 bg-teal-800/30 rounded-md hover:border-b-2 border-black dark:border-white cursor-pointer">
                                        {dfa.name}
                                        <ListPlus className="ml-auto text-green-500" size={16} onClick={() => console.log("Add dfa to stack:", dfa)} />
                                        <Trash2 className="ml-2 text-red-500" size={16} onClick={() => removeDfa(index)} />
                                    </div>
                                ))}
                            </div>
                        </td>
                        <td>
                            <div className="p-2 border border-black dark:border-white rounded-md h-80">
                                {functions.map((fn, index) => (
                                    <div key={index} className="flex items-center mb-1 px-5 py-1 bg-blue-800/30 rounded-md hover:border-b-2 border-black dark:border-white cursor-pointer">
                                        {fn.name}
                                        <ListPlus className="ml-auto text-green-500" size={16} onClick={() => console.log("Add function to stack:", fn)} />
                                        <Trash2 className="ml-2 text-red-500" size={16} onClick={() => removeFunction(index)} />
                                    </div>
                                ))}
                            </div>
                        </td>
                        <td>
                            <div className="p-2 border border-black dark:border-white rounded-md h-80">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}