import Vote from "../components/Vote";
import { Question } from "../classes/Question";

type QuestionPanelProps = {
    question: Question;
    onVoteClick: () => void
}

export default function QuestionPanel({ question, onVoteClick }: QuestionPanelProps) {
    return (
        <div className="question-panel-wrapper">
            <h3>{question.text}</h3>
            <Vote question={question} onVoteCall={onVoteClick} />
        </div>
    );
}
