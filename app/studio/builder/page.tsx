"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DFAbuilder from "./components/dfa-builder/dfa-builder";
import FunctionBuilder from "./components/function-builder/function-builder";
import TestCaseBuilder from "./components/testcase-builder/testcase-builder";
import Testing from "./components/testing/testing";
import Stack from "./components/stack/stack";

export default function BuilderPage() {
    return (
        <>
            <h1 className="text-2xl font-bold text-center p-5 border border-green-500 rounded-md bg-green-500/5 space-x-2 m-4">
                <span className="text-green-500">!Welcome To</span>
                <span >FSM Builder Studio</span>
            </h1>
            <Stack />
            <Tabs defaultValue="dfa" className="mx-4 mt-5">
                <TabsList>
                    <TabsTrigger value="dfa">DFA Builder</TabsTrigger>
                    <TabsTrigger value="function">Function Builder</TabsTrigger>
                    <TabsTrigger value="testcase">Testcase Builder</TabsTrigger>
                    <TabsTrigger value="testing">Testing</TabsTrigger>
                </TabsList>
                <div className="p-2 min-h-100">
                    <TabsContent value="dfa"><DFAbuilder /></TabsContent>
                    <TabsContent value="function"><FunctionBuilder /></TabsContent>
                    <TabsContent value="testing"><Testing /></TabsContent>
                    <TabsContent value="testcase"><TestCaseBuilder /></TabsContent>
                </div>
            </Tabs>
        </>
    );
}