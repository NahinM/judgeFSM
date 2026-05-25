"use client";
import { create } from "zustand";

interface TestCaseBuilderState {
    text: string;
    setText: (text: string) => void;
}

export const useTestCaseBuilderStore = create<TestCaseBuilderState>((set) => ({
    text: "",
    setText: (text: string) => set({ text }),
}));