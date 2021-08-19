var startButton = document.querySelector('#start');
var timeLeft = document.querySelector('#timer')
var currentQuestion = document.querySelector('#question')

var answerA_El = document.querySelector('#A')
var answerB_El = document.querySelector('#B')
var answerC_El = document.querySelector('#C')
var answerD_El = document.querySelector('#D')
var questions = [Q1, Q2, Q3, Q4, Q5, Q6];
var currentQuestion = questions[questionNumber];
var questionNumber = 0;

var score = 0;

var userScore = document.querySelector('#score')
var userName = document.querySelector('#name')