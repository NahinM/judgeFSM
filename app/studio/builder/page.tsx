"use client";
import DFAbuilder from "./components/dfa-builder/dfa-builder";
import FunctionBuilder from "./components/function-builder/function-builder";
import { useState } from "react";
export default function BuilderPage() {
    const [tab, setTab] = useState("dfa");
    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-10 p-10 border-2 border-green-500 rounded-md bg-green-500/10 space-x-2 mx-4">
                <span className="text-green-500">!Welcome To</span>
                <span >FSM Builder Studio</span>
            </h1>
            <div className="flex space-x-4 justify-center mt-6">
                <button
                    className={`px-4 py-1 rounded-md ${tab === "dfa" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
                    onClick={() => setTab("dfa")}
                >
                    DFA Builder
                </button>
                <button
                    className={`px-4 py-1 rounded-md ${tab === "function" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
                    onClick={() => setTab("function")}
                >
                    Function Builder
                </button>
            </div>
            {tab === "dfa" && <DFAbuilder />}
            {tab === "function" && <FunctionBuilder />}
        </>
    );
}