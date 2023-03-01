const colors = ["#db5f12", "#0ba6ff", "#898989", "#24a0ed", "#ff00ff", "#fd0e35", "#1d344a", "#08cad1", "#9d94ff", "#c780e8"];

let operand1;
let operand2;
let questions = [];

function generateOperands() {
  operand1 = Math.floor(Math.random() * 91) + 1;
  operand2 = Math.floor(Math.random() * (100 - operand1)) + 1;
  100 - operand1;
}
//not to repeat the answer
function checkOperandsEqualsWithAnswer() {
  const isrepeatedAnswers = questions.some((question) => {
    return parseInt(question.answer) === operand1 + operand2;
  });
  if (isrepeatedAnswers) {
    generateOperands();
    checkOperandsEqualsWithAnswer();
  } else {
    return;
  }
}
export function generateQuestions() {
  for (let i = 1; i <= 10; i++) {
    generateOperands();
    checkOperandsEqualsWithAnswer(questions);
    questions.push({
      id: i,
      question: `${operand1} + ${operand2}`,
      answer: `${operand1 + operand2}`,
      color: `${colors[i - 1]}`,
    });
  }
  return questions;
}
