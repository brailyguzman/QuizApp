import { useState } from "react";
import QuizForm from "./QuizForm";

interface Question {
    question: string;
    choices: string[];
    correctAnswer: string;
}

interface QuizProps {
    currentQuestion: number;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
    question: Question;
    setQuestion: React.Dispatch<React.SetStateAction<never>>;
    total: number;
}

const Quiz = ({
    currentQuestion,
    setCurrentQuestion,
    question,
    total,
}: QuizProps) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);

    const onTryAgain = () => {
        setCurrentQuestion(0);
        setScore(0);
        setCompleted(false);
    };

    if (completed) {
        return (
            <div className="score-container">
                <p id="score">
                    Score:{" "}
                    <span
                        style={
                            score > 5
                                ? { color: "#00FF00" }
                                : { color: "#FF0000" }
                        }
                    >
                        {score}
                    </span>{" "}
                    out of <span style={{ color: "#00FF00" }}>{total}</span>
                </p>
                <button id="score-try-again" onClick={onTryAgain}>
                    Try Again?
                </button>
            </div>
        );
    }
    return (
        <div className="quiz">
            <div id="quiz-question">
                {currentQuestion + 1}) {question?.question}
            </div>

            <QuizForm
                setSelectedOption={setSelectedOption}
                selectedOption={selectedOption}
                currentQuestion={currentQuestion}
                setCompleted={setCompleted}
                setScore={setScore}
                setCurrentQuestion={setCurrentQuestion}
                total={total}
                question={question}
            />
        </div>
    );
};

export default Quiz;
