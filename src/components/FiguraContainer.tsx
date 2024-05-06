import { useEffect, useState } from 'react';
import { figuras } from '../utils/figuras';
import Header from './Header';
import { generateQuestion, type Question } from '../utils/helper';
import Option from './Option';

const FiguraContainer = () => {
  const [question, setQuestion] = useState<Question>({
    name: '',
    possibleAnswers: [],
    correctAnswer: 0,
  });

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setQuestion(generateQuestion(figuras));
  }, []);

  return (
    <main className='text-center'>
      <Header title={question.name} />
      <div>
        {question.possibleAnswers.map((definition, index) => (
          <Option
            key={index}
            canClick={!completed}
            definition={definition}
            correct={index === question.correctAnswer}
            onOptionClick={() => {
              setCompleted(true);
            }}
          />
        ))}
      </div>
      {completed && (
        <button
          className='bg-blue-500 text-white p-4 m-4 rounded-xl'
          onClick={() => {
            setCompleted(false);
            setQuestion(generateQuestion(figuras));
          }}
        >
          Siguiente
        </button>
      )}
    </main>
  );
};

export default FiguraContainer;
