"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DFAbuilder from "./components/dfa-builder/dfa-builder";
import FunctionBuilder from "./components/function-builder/function-builder";
import TestCaseBuilder from "./components/testcase-builder/testcase-builder";
import Testing from "./components/testing/testing";

export default function BuilderPage() {
    return (
        <>
            <h1 className="text-2xl font-bold text-center p-5 border-2 border-green-500 rounded-md bg-green-500/10 space-x-2 mx-4">
                <span className="text-green-500">!Welcome To</span>
                <span >FSM Builder Studio</span>
            </h1>
            <Tabs defaultValue="dfa" className="mx-4 mt-5">
                <TabsList>
                    <TabsTrigger value="dfa">DFA Builder</TabsTrigger>
                    <TabsTrigger value="function">Function Builder</TabsTrigger>
                    <TabsTrigger value="testcase">Testcase Builder</TabsTrigger>
                    <TabsTrigger value="testing">Testing</TabsTrigger>
                </TabsList>
                <div className="p-2">
                    <TabsContent value="dfa"><DFAbuilder /></TabsContent>
                    <TabsContent value="function"><FunctionBuilder /></TabsContent>
                    <TabsContent value="testing"><Testing /></TabsContent>
                    <TabsContent value="testcase"><TestCaseBuilder /></TabsContent>
                </div>
            </Tabs>
        </>
    );
}