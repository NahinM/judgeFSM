import { DFAState } from "../dfa-builder/dfa-state";

export const addStackDfas = (dfas: DFAState[]) => {
    window.localStorage.setItem("stackDfas", JSON.stringify(dfas));
}

export const loadStackDfas = (): DFAState[] => {
    const dfasString = window.localStorage.getItem("stackDfas");
    if (dfasString) {
        const dfasObj = JSON.parse(dfasString);
        return dfasObj.map((dfa: any) => new DFAState(dfa.name, dfa.symbols, dfa.nodes, dfa.table));
    }
    return [];
}

export const addStackFunctions = (functions: { name: string; code: string }[]) => {
    window.localStorage.setItem("stackFunctions", JSON.stringify(functions));
}

export const loadStackFunctions = (): { name: string; code: string }[] => {
    const functionsString = window.localStorage.getItem("stackFunctions");
    if (functionsString) {
        return JSON.parse(functionsString);
    }
    return [];
}