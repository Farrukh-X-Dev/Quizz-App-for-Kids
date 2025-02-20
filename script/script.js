const quizzarr1 = [
  {
    question: "What color is the sky?",
    answers: ["Blue", "Green", "Red", "Yellow"],
    correctAnswer: "Blue",
  },
  {
    question: "How many legs does a dog have?",
    answers: ["Two", "Three", "Four", "Five"],
    correctAnswer: "Four",
  },
  {
    question: "What sound does a cat make?",
    answers: ["Woof", "Meow", "Quack", "Moo"],
    correctAnswer: "Meow",
  },
  {
    question: "Which of these is a fruit?",
    answers: ["Carrot", "Apple", "Broccoli", "Lettuce"],
    correctAnswer: "Apple",
  },
  {
    question: "What is the opposite of 'big'?",
    answers: ["Small", "Tall", "Heavy", "Wide"],
    correctAnswer: "Small",
  },
  {
    question: "What shape is a ball?",
    answers: ["Square", "Triangle", "Circle", "Rectangle"],
    correctAnswer: "Circle",
  },
  {
    question: "What color are bananas?",
    answers: ["Red", "Blue", "Yellow", "Purple"],
    correctAnswer: "Yellow",
  },
  {
    question: "Which animal is known for building dams?",
    answers: ["Beaver", "Elephant", "Lion", "Horse"],
    correctAnswer: "Beaver",
  },
  {
    question: "What do cows give us?",
    answers: ["Milk", "Eggs", "Wool", "Bread"],
    correctAnswer: "Milk",
  },
  {
    question: "What do you do when you're tired?",
    answers: ["Jump", "Sleep", "Dance", "Sing"],
    correctAnswer: "Sleep",
  },
];

const quizzarr2 = [
  {
    question: "How many days are there in a week?",
    answers: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: "Seven",
  },
  {
    question: "Which planet do we live on?",
    answers: ["Mars", "Earth", "Jupiter", "Venus"],
    correctAnswer: "Earth",
  },
  {
    question: "What is 2 + 3?",
    answers: ["3", "4", "5", "6"],
    correctAnswer: "5",
  },
  {
    question: "Which season comes after winter?",
    answers: ["Summer", "Autumn", "Spring", "Fall"],
    correctAnswer: "Spring",
  },
  {
    question: "How many legs does a spider have?",
    answers: ["Six", "Eight", "Ten", "Twelve"],
    correctAnswer: "Eight",
  },
  {
    question: "What is the largest land animal?",
    answers: ["Lion", "Elephant", "Giraffe", "Horse"],
    correctAnswer: "Elephant",
  },
  {
    question: "What do bees make?",
    answers: ["Honey", "Milk", "Bread", "Cheese"],
    correctAnswer: "Honey",
  },
  {
    question: "How many wheels does a bicycle have?",
    answers: ["One", "Two", "Three", "Four"],
    correctAnswer: "Two",
  },
  {
    question: "Which of these is a type of tree?",
    answers: ["Rose", "Sunflower", "Oak", "Tulip"],
    correctAnswer: "Oak",
  },
  {
    question: "Which month comes after March?",
    answers: ["May", "January", "February", "April"],
    correctAnswer: "April",
  },
];

const quizzarr3 = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Rome", "Berlin", "Paris"],
    correctAnswer: "Paris",
  },
  {
    question: "What is 5 x 3?",
    answers: ["8", "10", "15", "20"],
    correctAnswer: "15",
  },
  {
    question: "Which of these is a gas giant planet?",
    answers: ["Mercury", "Earth", "Jupiter", "Mars"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the boiling point of water?",
    answers: ["50°C", "100°C", "150°C", "200°C"],
    correctAnswer: "100°C",
  },
  {
    question: "Who wrote 'Harry Potter'?",
    answers: ["J.K. Rowling", "Roald Dahl", "C.S. Lewis", "Mark Twain"],
    correctAnswer: "J.K. Rowling",
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    question: "Which of these is a prime number?",
    answers: ["4", "6", "9", "11"],
    correctAnswer: "11",
  },
  {
    question: "Which part of a plant conducts photosynthesis?",
    answers: ["Roots", "Stem", "Leaves", "Flowers"],
    correctAnswer: "Leaves",
  },
  {
    question: "How many continents are there on Earth?",
    answers: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: "Seven",
  },
  {
    question: "Which organ pumps blood through the body?",
    answers: ["Brain", "Lungs", "Heart", "Liver"],
    correctAnswer: "Heart",
  },
];

const startQuiz = (age) => {
  let page1 = document.getElementById("page1");
  let page2 = document.getElementById("page2");
  let page5 = document.getElementById("page5");

  page2.style.display = "none";
  page5.style.display = "none";
  page1.style.display = "none";
  if (age === "2-4") {
    page2.style.display = "block";
    func1();
  } else if (age === "4-7") {
    page2.style.display = "block";
    func2();
  } else if (age === "7-10") {
    page2.style.display = "block";
    func3();
  }
};

let span1 = document.getElementById("span1");
let score1 = 0;
let score2 = 0;
let score3 = 0;
let index1 = 0;
let index2 = 0;
let index3 = 0;

const func1 = () => {
  const updateQuestion = (index) => {
    document.getElementById("question_text").textContent =
      quizzarr1[index].question;
    document.getElementById("text_a").textContent = quizzarr1[index].answers[0];
    document.getElementById("text_b").textContent = quizzarr1[index].answers[1];
    document.getElementById("text_c").textContent = quizzarr1[index].answers[2];
    document.getElementById("text_d").textContent = quizzarr1[index].answers[3];
  };

  updateQuestion(index1);
  const submit1 = document.getElementById("submit1");
  const newSubmit1 = submit1.cloneNode(true);
  submit1.replaceWith(newSubmit1);

  newSubmit1.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedRadio = document.querySelector(
      'input[name="options"]:checked'
    );
    const label = document.querySelector(`label[for="${selectedRadio.id}"]`);
    const selectedValue = label.textContent.trim();

    if (selectedValue === quizzarr1[index1].correctAnswer) {
      score1++;
      document.body.classList.add("correct-answer");
      document.body.classList.remove("incorrect-answer");
      document.body.classList.remove("bg-gradient");
    } else {
      document.body.classList.add("incorrect-answer");
      document.body.classList.remove("correct-answer");
      document.body.classList.remove("bg-gradient");
    }

    index1++;
    if (index1 < quizzarr1.length) {
      updateQuestion(index1);
    } else if (index1 >= quizzarr1.length) {
      page2.style.display = "none";
      page5.style.display = "block";

      span1.innerHTML = `${score1} `;
      document.getElementById("submit1").disabled = true;
    } else {
      alert("Please select an option");
    }
  });
};

const func2 = () => {
  const updateQuestion = (index) => {
    document.getElementById("question_text").textContent =
      quizzarr2[index].question;
    document.getElementById("text_a").textContent = quizzarr2[index].answers[0];
    document.getElementById("text_b").textContent = quizzarr2[index].answers[1];
    document.getElementById("text_c").textContent = quizzarr2[index].answers[2];
    document.getElementById("text_d").textContent = quizzarr2[index].answers[3];
  };

  updateQuestion(index2);
  const submit2 = document.getElementById("submit1");
  const newSubmit2 = submit2.cloneNode(true);
  submit2.replaceWith(newSubmit2);

  newSubmit2.addEventListener("click", (event) => {
    event.preventDefault();

    const selectedRadio = document.querySelector(
      'input[name="options"]:checked'
    );
    const label = document.querySelector(`label[for="${selectedRadio.id}"]`);
    const selectedValue = label.textContent;

    if (selectedValue == quizzarr2[index2].correctAnswer) {
      score2++;
      document.body.classList.add("correct-answer");
      document.body.classList.remove("incorrect-answer");
      document.body.classList.remove("bg-gradient");
    } else {
      document.body.classList.add("incorrect-answer");
      document.body.classList.remove("correct-answer");
      document.body.classList.remove("bg-gradient");
    }
    index2++;
    if (index2 < quizzarr2.length) {
      updateQuestion(index2);
    } else if (index2 >= quizzarr2.length) {
      document.getElementById("submit1").disabled = true;
      page2.style.display = "none";
      page5.style.display = "block";

      span1.innerHTML = `${score2} `;
    }
  });
};

const func3 = () => {
  const updateQuestion = (index) => {
    document.getElementById("question_text").textContent =
      quizzarr3[index].question;
    document.getElementById("text_a").textContent = quizzarr3[index].answers[0];
    document.getElementById("text_b").textContent = quizzarr3[index].answers[1];
    document.getElementById("text_c").textContent = quizzarr3[index].answers[2];
    document.getElementById("text_d").textContent = quizzarr3[index].answers[3];
  };

  updateQuestion(index3);
  const submit3 = document.getElementById("submit1");
  const newSubmit3 = submit3.cloneNode(true);
  submit3.replaceWith(newSubmit3);

  newSubmit3.addEventListener("click", (event) => {
    event.preventDefault();

    const selectedRadio = document.querySelector(
      'input[name="options"]:checked'
    );

    const label = document.querySelector(`label[for="${selectedRadio.id}"]`);
    const selectedValue = label.textContent;

    if (selectedValue == quizzarr3[index3].correctAnswer) {
      score3++;

      document.body.classList.add("correct-answer");
      document.body.classList.remove("incorrect-answer");
      document.body.classList.remove("bg-gradient");
    } else if (selectedValue != quizzarr3[index3].correctAnswer) {
      document.body.classList.add("incorrect-answer");
      document.body.classList.remove("correct-answer");
      document.body.classList.remove("bg-gradient");
    }
    index3++;
    if (index3 < quizzarr3.length) {
      updateQuestion(index3);
    } else if (index3 >= quizzarr3.length) {
      document.getElementById("submit1").disabled = true;
      page2.style.display = "none";
      page5.style.display = "block";
      span1.innerHTML = `${score3}`;
    }
  });
};
function restartQuiz() {
  page1.style.display = "block";
  page5.style.display = "none";
  document.body.classList.add("bg-gradient");
  score1 = 0;
  score2 = 0;
  score3 = 0;
  index1 = 0;
  index2 = 0;
  index3 = 0;

  document.getElementById("submit1").disabled = false;

  document.querySelectorAll('input[name="options"]').forEach((radio) => {
    radio.checked = false;
  });
}
