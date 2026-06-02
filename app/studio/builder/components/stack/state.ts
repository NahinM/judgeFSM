import { create } from "zustand";
import { DFAState } from "../dfa-builder/dfa-state";
import { addStackDfas, loadStackDfas } from "./localdb";

interface StackState {
    dfas: DFAState[];
    addDfa: (dfa: DFAState) => void;
    removeDfa: (index: number) => void;
    loadRecording: () => void;
}

export const useStackStore = create<StackState>((set) => ({
    dfas: [],
    addDfa: (dfa) => {
        set((state) => ({ dfas: [...state.dfas, dfa] }));
        addStackDfas(useStackStore.getState().dfas);
    },
    removeDfa: (index) => {
        set((state) => ({ dfas: state.dfas.filter((_, i) => i !== index) }));
        addStackDfas(useStackStore.getState().dfas);
    },
    loadRecording: () => {
        const dfas = loadStackDfas();
        set({ dfas });
        console.log("Loaded DFAs from localStorage:", dfas);
    }
}));