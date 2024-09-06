import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = () => {
    //loads questions to a state
    const [questions, setQuestions] = useState([]);

    const loadData = () => {
        fetch('http://localhost:5001/quiz/fake')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='correct-answer-count'>
                <span>Correct Answers </span>/{questions.length}
            </div>
            {/* iterates through each index of questions state */}
            {questions.map((question, index) => {
                {/** assigns prop called key and question to component question card */}
                return <QuestionCard key={index} question={question} questionNum={index + 1} answer={question.correct_answer} />
            })}
        </div>
    )

}

export default Game;
