import { create } from "zustand";
import { DFAState } from "../dfa-builder/dfa-state";
import { addStackDfas, addStackFunctions, loadStackDfas, loadStackFunctions } from "./localdb";

interface StackState {
    dfas: DFAState[];
    functions: { name: string; code: string }[];
    addDfa: (dfa: DFAState) => void;
    removeDfa: (index: number) => void;
    addFunction: (name: string, code: string) => void;
    removeFunction: (index: number) => void;
    loadRecording: () => void;
}

export const useStackStore = create<StackState>((set) => ({
    dfas: [],
    functions: [],
    addDfa: (dfa) => {
        set((state) => ({ dfas: [...state.dfas, dfa] }));
        addStackDfas(useStackStore.getState().dfas);
    },
    removeDfa: (index) => {
        set((state) => ({ dfas: state.dfas.filter((_, i) => i !== index) }));
        addStackDfas(useStackStore.getState().dfas);
    },
    addFunction: (name, code) => {
        set((state) => ({ functions: [...state.functions, { name, code }] }));
        addStackFunctions(useStackStore.getState().functions);
    },
    removeFunction: (index) => {
        set((state) => ({ functions: state.functions.filter((_, i) => i !== index) }));
        addStackFunctions(useStackStore.getState().functions);
    },
    loadRecording: () => {
        const dfas = loadStackDfas();
        set({ dfas });
        const functions = loadStackFunctions();
        set({ functions });
    }
}));