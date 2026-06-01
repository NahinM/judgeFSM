import { useStackStore } from "./state";
import { Trash2, ListPlus } from "lucide-react";

export default function Stack() {
    const { dfas, removeDfa } = useStackStore();

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold text-center border-t border-green-700 p-4">
                Stack
            </h1>
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
                            <div className="p-2 border border-green-800 rounded-md h-80">
                                {dfas.map((dfa, index) => (
                                    <div key={index} className="flex items-center mb-1 px-5 py-1 bg-teal-800/30 rounded-md hover:border-b-2 border-green-600 cursor-pointer">
                                        {dfa.name}
                                        <ListPlus className="ml-auto text-green-500" size={16} onClick={() => console.log("Add function to DFA:", dfa)} />
                                        <Trash2 className="ml-2 text-red-500" size={16} onClick={() => removeDfa(index)} />
                                    </div>
                                ))}
                            </div>
                        </td>
                        <td>
                            <div className="p-2 border border-green-800 rounded-md h-80">
                            </div>
                        </td>
                        <td>
                            <div className="p-2 border border-green-800 rounded-md h-80">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}