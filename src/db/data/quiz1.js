const quiz1 = {
    quizName: "Finance Testing",
    difficulty: "Beginner",
    questions: [
      {
        question:
          "If you want to buy a specifuc stock at your preferred price, Which order would you place?",
        points: 3,
        options: [
          {
            text: "Stoploss",
            isRight: false,
            isUserSelected: false,
          },
          {
            text: "Market",
            isRight: false,
            isUserSelected: false,
          },
          {
            text: "Limit",
            isRight: true,
            isUserSelected: false
          },
        ],
      },
      {
        question: "Which order would you place for long term holding ?",
        points: 3,
        options: [
          {
            text: "Bracket order",
            isRight: false,
            isUserSelected: false,
          },
          {
            text: "CNC",
            isRight: true,
            isUserSelected: false
          },
          {
            text: "MIS",
            isRight: false,
            isUserSelected: false,
          },
        ],
      },
      {
        question: "What does BO oder type means ?",
        points: 3,
        options: [
          {
            text: "Big Order",
            isRight: false,
            isUserSelected: false,
          },
          {
            text: "Bracket Order",
            isRight: true,
            isUserSelected: false
          },
          {
            text: "Banned Order",
            isRight: false,
            isUserSelected: false,
          },
        ],
      },
      {
        question: "Which Janpanese pattern is widely used in traking charts ?",
        points: 3,
        options: [
          {
            text: "MACD",
            isRight: false,
            isUserSelected: false,
          },
          {
            text: "Candlesticks",
            isRight: true,
            isUserSelected: false
          },
          {
            text: "TrendLines",
            isRight: false,
            isUserSelected: false,
          },
        ],
      },
      {
        question: "OI in the option chain data represents ?",
        points: 3,
        options: [
          {
            text: "Open Intrest",
            isRight: true,
            isUserSelected: false
          },
          {
            text: "Optional Intrest",
            isRight: false,
            isUserSelected: false,
          },
          {
            text: "Option Intrest",
            isRight: false,
            isUserSelected: false,
          },
        ],
      },
    ],
  };
  
  module.exports = {quiz1}
  