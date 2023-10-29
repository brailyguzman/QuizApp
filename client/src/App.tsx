import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [question, setQuestion] = useState(
        () => questions?.[currentQuestion]
    );
    const total = questions.length;

    useEffect(() => {
        fetch("http://localhost:3000/quiz")
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        setQuestion(questions?.[currentQuestion]);
    }, [currentQuestion, questions]);

    return (
        <div className="app">
            <Header />
            <Quiz
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                question={question}
                setQuestion={setQuestion}
                total={total}
            />
            <Footer />
        </div>
    );
};

export default App;
