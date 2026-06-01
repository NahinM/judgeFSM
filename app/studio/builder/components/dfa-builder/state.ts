"use client";
import { create } from 'zustand'

interface DfaBuilderState {
    dfaName: string
    dfaInput: string
    dfaSymbols: string
    dfaNodes: string
    setDfaInput: (input: string) => void
    setDfaSymbols: (symbols: string) => void
    setDfaNodes: (nodes: string) => void
}

export const useDfaBuilderStore = create<DfaBuilderState>((set) => ({
    dfaName: "DFA1",
    dfaInput: "",
    dfaSymbols: "",
    dfaNodes: "",
    setDfaInput: (input) => set({ dfaInput: input }),
    setDfaSymbols: (symbols) => set({ dfaSymbols: symbols }),
    setDfaNodes: (nodes) => set({ dfaNodes: nodes }),
}))