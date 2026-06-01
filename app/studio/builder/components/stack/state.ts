import { create } from "zustand";
import { DFAState } from "../dfa-builder/dfa-state";

interface StackState {
    dfas: DFAState[];
    addDfa: (dfa: DFAState) => void;
    removeDfa: (index: number) => void;
}

export const useStackStore = create<StackState>((set) => ({
    dfas: [],
    addDfa: (dfa) => set((state) => ({ dfas: [...state.dfas, dfa] })),
    removeDfa: (index) => set((state) => ({ dfas: state.dfas.filter((_, i) => i !== index) })),
}));