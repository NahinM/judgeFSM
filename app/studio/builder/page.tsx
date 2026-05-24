"use client";
import FunctionBuilder from "./components/function-builder/function-builder";

export default function BuilderPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-10 p-10 border-2 border-green-500 rounded-md bg-green-500/10 space-x-2 mx-4">
                <span className="text-green-500">!Welcome To</span>
                <span >FSM Builder Studio</span>
            </h1>
            <FunctionBuilder />
        </>
    );
}