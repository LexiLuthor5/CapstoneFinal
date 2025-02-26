export default function handler(req, res) {
  const triviaQuestions = [
    {
      question: "Which Disney park opened first?",
      options: ["Disneyland Paris", "Walt Disney World", "Tokyo Disneyland", "Disneyland"],
      answer: "Disneyland"
    },
    {
      question: "What year did Walt Disney World open?",
      options: ["1955", "1985", "1971", "1995"],
      answer: "1971"
    }
  ];
  res.status(200).json(triviaQuestions);
}
