// QuizScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const VideoScreen = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (option) => {
    const isCorrect = option === questions[currentQuestionIndex].correctAnswer;
    setUserAnswers([...userAnswers, isCorrect]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const totalQuestions = questions.length;

  if (currentQuestionIndex < totalQuestions) {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <View>
        <Text>{currentQuestion.question}</Text>
        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            title={option}
            onPress={() => handleAnswer(option)}
          />
        ))}
      </View>
    );
  } else {
    const score = userAnswers.filter((answer) => answer === true).length;
    return (
      <View>
        <Text>Quiz Complete!</Text>
        <Text>Your Score: {score} / {totalQuestions}</Text>
      </View>
    );
  }
};

export default VideoScreen;
