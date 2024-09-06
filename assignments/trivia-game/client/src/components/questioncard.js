//a question that contains true/false selectio and the quiz question
const QuestionCard = (props) => {
    
    return (
      <div className={"question-section"}>
        <div className="question-count"> Question {props.questionNum}</div>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
          <div className='question-text'>{props.answer}</div>
          <button>True</button>
          <button>False</button>
        </div>
      </div>
    );
  };

export default QuestionCard;