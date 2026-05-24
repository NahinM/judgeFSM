import { create } from 'zustand';

interface FunctionBuilderState {
    code: string;
    input: string;
    output: string;
    inputTab: boolean;
    setCode: (code: string) => void;
    setInput: (input: string) => void;
    setOutput: (output: string) => void;
    setInputTab: (inputTab: boolean) => void;
}

export const useFunctionBuilderStore = create<FunctionBuilderState>((set) => ({
    code: "",
    input: "",
    output: "",
    inputTab: true,
    setCode: (code) => set({ code }),
    setInput: (input) => set({ input }),
    setOutput: (output) => set({ output }),
    setInputTab: (inputTab) => set({ inputTab }),
}));