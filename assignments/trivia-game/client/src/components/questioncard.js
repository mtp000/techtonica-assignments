//a question that contains true/false selectio and the quiz question
import { useRef } from "react";

const QuestionCard = (props) => {
    const trueButtonRef = useRef(null);
    const falseButtonRef = useRef(null);

    const handleAnswerClick= (index, userAnswer) => {
    //handle index for the question
    if (userAnswer === questions[index].correct_answer) {
        trueButtonRef.current.style.backgroundColor = 'green';
        falseButtonRef.current.style.backgroundColor = 'green';
    } else {
        trueButtonRef.current.style.backgroundColor = 'red';
        falseButtonRef.current.style.backgroundColor = 'red';
    }
  };
    
    return (
      <div className={"question-section"}>
        <div className="question-count"> Question {props.questionNum}</div>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
          <div className='question-text'>{props.answer}</div>
          <button ref={trueButtonRef} onClick={() => props.onAnswerClick(true)}>True</button>
          <button ref={falseButtonRef} onClick={() => props.onAnswerClick(false)}>False</button>
        </div>
      </div>
    );
  };

export default QuestionCard;