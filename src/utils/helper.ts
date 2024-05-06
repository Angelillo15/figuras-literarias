import type { Figura } from './figuras';

export interface Question {
  name: string;
  possibleAnswers: string[];
  correctAnswer: number;
}

export const randomNumber = (max: number) => Math.floor(Math.random() * max);

export const generateQuestion = (figuras: Figura[]): Question => {
  const possibleAnswers: Figura[] = []

  for (let i = 0; i < 4; i++) {
    let figura = figuras[randomNumber(figuras.length)];

    if (figura !== undefined) {
      possibleAnswers.push(figura);
    }
  }

  const randomIndex = randomNumber(3);
  let figura = possibleAnswers[randomIndex];

  const definitionAnswers = possibleAnswers.map((figura) => figura.definition);

  console.log(figuras);

  if (figura === undefined) {
    throw new Error('Figura is undefined');
  }

  return {
    name: figura.name,
    possibleAnswers: definitionAnswers,
    correctAnswer: randomIndex,
  };
};
