"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function TextEditor({ text, setText, className }: { text?: string; setText?: (text: string) => void; className?: string }) {
    const [internalText, setInternalText] = useState(text || "");
    const inputarea = useRef<HTMLDivElement>(null);
    const getLines = () => {
        let lines = [1];
        for (let i = 0; i < internalText.length; i++) {
            if (internalText[i] === "\n") {
                lines.push(lines.length + 1);
            }
        }
        return lines;
    }
    const handleTextChange = () => {
        const newText = inputarea.current?.innerText || "";
        setInternalText(newText);
        if (setText) {
            setText(newText);
        }
    };

    useEffect(() => {
        if (text !== undefined) {
            setInternalText(text || "");
            if (inputarea.current) {
                inputarea.current.innerText = text;
            }
        }
    }, []);
    return (
        <>
            <div className={cn("border flex flex-row gap-2 border-gray-300 rounded", className)}>
                <div className="border min-w-10 p-1 text-right bg-teal-400 dark:bg-teal-800">
                    {
                        getLines().map((lineNumber) => (
                            <div key={lineNumber}>{lineNumber}</div>
                        ))
                    }
                </div>
                <div
                    ref={inputarea}
                    contentEditable={"plaintext-only"}
                    suppressContentEditableWarning={true}
                    onInput={handleTextChange}
                    className="p-1 w-full focus:outline-none">
                </div>
            </div>
        </>
    );
}