interface Question {
    question: string;
    choices: string[];
    correctAnswer: string;
}

interface QuizFormProps {
    setSelectedOption: (str: string) => void;
    selectedOption: string;
    setCompleted: (bool: boolean) => void;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    currentQuestion: number;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
    total: number;
    question: Question;
}

const QuizForm = (props: QuizFormProps) => {
    const {
        setSelectedOption,
        selectedOption,
        currentQuestion,
        setCompleted,
        setScore,
        setCurrentQuestion,
        total,
        question,
    } = props;
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (currentQuestion + 1 === total) {
            setCompleted(true);
        }

        if (selectedOption === question.correctAnswer) {
            setScore((prev: number) => prev + 1);
        }
        setCurrentQuestion((prev: number) => prev + 1);
        setSelectedOption("");
    };

    return (
        <form className="quiz-form" onSubmit={handleOnSubmit}>
            {question?.choices.map((choice, index) => (
                <label key={index} className="quiz-choice">
                    <input
                        type="radio"
                        name={`choice${currentQuestion}`}
                        value={choice[0]}
                        checked={selectedOption === choice[0]}
                        onChange={(e) => onValueChange(e)}
                        className="quiz-choice-input"
                        required={true}
                    />
                    {choice}
                </label>
            ))}

            <input
                id="quiz-form-submit"
                type="submit"
                value={`${total === currentQuestion + 1 ? "Submit" : "Done"}`}
            />
        </form>
    );
};

export default QuizForm;
