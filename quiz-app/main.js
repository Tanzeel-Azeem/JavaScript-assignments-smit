const questions = [
    {
        id : 0,
        question : "What is the capital of France?",
        options : ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer : "Paris"
    },
    {
        id : 1,
        question : "What is the largest planet in our solar system?",
        options : ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer : "Jupiter"
    },
    {
        id : 2,
        question : "Who wrote 'To Kill a Mockingbird'?",
        options : ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
        correctAnswer : "Harper Lee"
    },
    {
        id : 3,
        question : "What is the chemical symbol for water?",
        options : ['H2O', 'CO2', 'O2', 'NaCl'],
        correctAnswer : "H2O"
    },
    {
        id : 4,
        question : "What is the capital of Japan?",
        options : ['Tokyo', 'Seoul', 'Beijing', 'Bangkok'],
        correctAnswer : "Tokyo"
    },
    {
        id : 5,
        question : "Who painted the Mona Lisa?",
        options : ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
        correctAnswer : "Leonardo da Vinci"
    },
    {
        id : 6,
        question : "What is the largest mammal?",
        options : ['Elephant', 'Blue Whale', 'Giraffe', 'Great White Shark'],
        correctAnswer : "Blue Whale"
    },
    {
        id : 7,
        question : "What is the main ingredient in guacamole?",
        options : ['Tomato', 'Avocado', 'Pepper', 'Onion'],
        correctAnswer : "Avocado"
    },
    {
        id : 8,
        question : "What is the hardest natural substance on Earth?",
        options : ['Gold', 'Diamond', 'Iron', 'Quartz'],
        correctAnswer : "Diamond"
    },
    {
        id : 9,
        question : "What is the smallest country in the world?",
        options : ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
        correctAnswer : "Vatican City"
    }
]
let currentQuestionIndex = 0
let score = 0

function showQuestion(){
    var questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[currentQuestionIndex].question;

    var optionElement = document.getElementById("options")
    optionElement.innerHTML = "";
    

    for (let i = 0; i < questions[currentQuestionIndex].options.length; i++){
        optionElement.innerHTML += `
        <div id = "option" class = "option">
            <input type="radio" id = "${questions[currentQuestionIndex].options[i]}" name = "option" value = "${questions[currentQuestionIndex].options[i]}">
            <label for = "${questions[currentQuestionIndex].options[i]}">${questions[currentQuestionIndex].options[i]} </label>
        </div>`
    }    
}
showQuestion()


function nextQuestion(){

    const userSelection = document.querySelector('input[name="option"]:checked');
    
    if(!userSelection){
        alert("Please select an option before proceeding.");
        return;
    }
    
    var selectedAnswer = userSelection.value
    if (selectedAnswer == questions[currentQuestionIndex].correctAnswer){
        score += 1
    }
    
    currentQuestionIndex++
    
    if (currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        finishQuiz()
    }
 
}        


function finishQuiz(){
    document.getElementById("question").innerHTML = "Quiz Completed! ✨🎉";
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextButton").remove();
   
    var result = document.getElementById("result")
    result.innerHTML = `🎉 Your final score is ${score} out of ${questions.length}.`;
    result.style.backgroundColor = "green";
    if (score >= 7){
        result.style.backgroundColor = "#4CAF50";
    }else if (score >= 4){
        result.style.backgroundColor = "yellow";
    }else{
        result.style.backgroundColor = "red"
    }
}

