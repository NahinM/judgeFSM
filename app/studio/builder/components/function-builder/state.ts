"use client";
import { create } from 'zustand';

interface FunctionBuilderState {
    name: string;
    code: string;
    input: string;
    output: string;
    inputTab: boolean;
    setCode: (code: string) => void;
    setInput: (input: string) => void;
    setOutput: (output: string) => void;
    setInputTab: (inputTab: boolean) => void;
    setName: (name: string) => void;
}

export const useFunctionBuilderStore = create<FunctionBuilderState>((set) => ({
    name: "",
    code: "",
    input: "",
    output: "",
    inputTab: true,
    setCode: (code) => set({ code }),
    setInput: (input) => set({ input }),
    setOutput: (output) => set({ output }),
    setInputTab: (inputTab) => set({ inputTab }),
    setName: (name) => set({ name }),
}));