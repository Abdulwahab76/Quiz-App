


let questions = [
    {
        id: 1,
        question: "Which property is used to change the background color?",
        answer: "backgrond-color",
        options: [
            "color",
            "bgcolor",
            "backgrond-color",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Home Tool Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinks Text Markup Language",
            "None of these"
        ]
    }

];


let question_count = 0;
let points = 0;

window.onload = function () {
    show(question_count);

};

function next() {



    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`)
        clearInterval(mytime)
        location.href = "end.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").innerHTML;

    if (user_answer == questions[question_count].answer) {

        points += 10;
        sessionStorage.setItem("points", points);
    }

    console.log(points);

    question_count++;
    show(question_count);


}




function show(count) {
    let question = document.getElementById("questions");
    questions[count].options;

    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
  </ul> 
    `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}
