import { test, expect } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question.js";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    instructorId: "1",
    questionId: "1",
    content: "Answer content"
  })

  expect(answer.content).toEqual(
    "Answer content"
  )
})