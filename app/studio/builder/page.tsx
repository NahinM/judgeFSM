"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DFAbuilder from "./components/dfa-builder/dfa-builder";
import FunctionBuilder from "./components/function-builder/function-builder";

export default function BuilderPage() {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-10 p-10 border-2 border-green-500 rounded-md bg-green-500/10 space-x-2 mx-4">
                <span className="text-green-500">!Welcome To</span>
                <span >FSM Builder Studio</span>
            </h1>
            <Tabs defaultValue="dfa" className="mx-4">
                <TabsList>
                    <TabsTrigger value="dfa">DFA Builder</TabsTrigger>
                    <TabsTrigger value="function">Function Builder</TabsTrigger>
                </TabsList>
                <TabsContent value="dfa"><DFAbuilder /></TabsContent>
                <TabsContent value="function"><FunctionBuilder /></TabsContent>
            </Tabs>
        </>
    );
}