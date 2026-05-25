import { create } from 'zustand'

interface DfaBuilderState {
    dfaInput: string
    setDfaInput: (input: string) => void
}

export const useDfaBuilderStore = create<DfaBuilderState>((set) => ({
    dfaInput: "",
    setDfaInput: (input) => set({ dfaInput: input })
}))