import { Answer } from "../entities/answer.js";

interface AnswerQuestionInput {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  execute({ instructorId, questionId, content }: AnswerQuestionInput) {
    const answer = new Answer(content)

    return answer
  }
}