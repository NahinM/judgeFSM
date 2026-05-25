import TextEditor from "@/components/editor";
import { useTestCaseBuilderStore } from "./state";

export default function TestCaseBuilder() {
    const { text, setText } = useTestCaseBuilderStore();

    return (
        <div>
            <h1>Testcase Builder</h1>
            <p>{text}</p>
            {/* Add your testcase builder UI components here */}
            <TextEditor text={text} setText={setText} className="w-1/2" />
        </div>
    );
}