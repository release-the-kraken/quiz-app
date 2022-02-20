window.onload = function(){
/*----------------Questions---------------------*/
                    
var allQuestions = [

{question: "Po ile kilogram obywatela z wyższym wykształceniem?", choices: ["A.Po 200", "B. Piątaka", "C. 75"], correctAnswer:2},
{question: "Ile stoi osób?", choices: ["A. 4", "B. 121", "C. 127"], correctAnswer:1},
{question: "Kto dzwonił do Prezesa Ochódzkiego z Londynu?", choices: ["A. Królowa", "B. Polański", "C. Wajda"], correctAnswer:1},
{question: "Jak nazywał się chłopiec, który mówił brzydkie wyrazy?", choices: ["A. Tomek Mazur", "B. Jarek Azot","C. Lech Ryś"], correctAnswer:0},
{question: "A mąż Zofii?", choices: ["A. Jan Kowalski", "B. Zdzisław Dyrman", "C. Stanisław Paluch"], correctAnswer:1},
{question: "W jakich filmach widziała Pana Reżysera mama Robusia?", choices: ["A. Przygodowych, sensacyjnych, komediach", "B. Dokumentalnych", "C. Polskich, zagranicznych i amerykańskich"], correctAnswer:2},
{question: "Za kogo chciał być chłopiec ze wsi?", choices: ["A. Za Heroda", "B. Za Mikołaja", "C. Za trzech króli"], correctAnswer:0},
{question: "Co też jest obowiązkowe?", choices: ["A. Higiena", "B. Szatnia", "C. Jak się wchodzi to się puka"], correctAnswer:1},
{question: "O czym nie wspomniał przedstawiciel brygady młodziezowej?", choices: ["A. Musztarda", "B. Keczup", "C. Sos czosnkowy"], correctAnswer:0},
{question: "Które miejsce zajął wnuk Ministra?", choices: ["A. 3", "B. 2", "C. 1"], correctAnswer:2}
];

/* declaring variables - html app elements and functional variables*/

var x = 0; //variable for iterating through the questions
var container = document.getElementById("container");
var head = document.getElementById("text");
var nButton = document.getElementById("nextButton");
var sButton = document.getElementById("startButton");
var qLength = allQuestions.length;
var points = 0; //counting points
nButton.style.display = "none";

function fadeIn(el){ //creates the fade in animation
  let vis = 0;
  var interval = setInterval(changeVis, 25);
  function changeVis() {
    if (vis >= 1) {
      clearInterval(interval);
    } else {
      vis += 0.1; 
      el.style.opacity = vis; 
    }
  } 
}
fadeIn(container);

function initiate(){ //function for the startButton, displays 1st question and 1st set of answers, hides sButton, shows nButton
  addElements(0);
  nButton.style.display = "";
  sButton.style.display = "none";
 
}

function enable(){ //enables the next button, attached to the click event of the radio buttons
  nButton.removeAttribute("disabled");
  nButton.removeAttribute("id", "nextButton");
}

function addElements(x){
  container.style.opacity = 0;   
  for(var i = 0; i <allQuestions[x].choices.length; i++){
    var listItem = document.createElement("li");
    var choices = document.createElement("input");
      choices.setAttribute("type", "radio");
      choices.setAttribute("name", "ansChoice");
      var labels = document.createTextNode(allQuestions[x].choices[i]);
    questions.appendChild(listItem);
    listItem.appendChild(choices);
    listItem.appendChild(labels);
    choices.addEventListener("click", enable);
    head.innerHTML = (x+1) + "/" + qLength + ". " + allQuestions[x].question;
  }  
  fadeIn(container);
}
function quizEnd(){ // - closes the quiz, gives the user their points and grade
  container.style.opacity = 0;
  var p = document.createElement("p");
  container.appendChild(p);
  container.appendChild(p);
  var pContent;
  switch(points){
    case 0: 
    case 1:
      head.innerHTML = "Już policzyłem. Otrzymujesz " + points + "/" + qLength + " punktów. Czuwaj."; 
      pContent = document.createTextNode("Słabiutko. Wiesz mniej niż szatniarz z kawiarni. Ten jeden punkt to chyba przez przypadek."); 
      container.removeChild(questions);  
      container.removeChild(nButton);
      p.appendChild(pContent);
      break;
    case 2:
    case 3:
      head.innerHTML = "Już policzyłem. Otrzymujesz " + points + "/" + qLength + " punktów. Czuwaj."; 
      pContent = document.createTextNode("Wesoły Romek. Wodę, światło, gaz i tak Ci wyłączą."); 
      container.removeChild(questions);  
      container.removeChild(nButton);
      p.appendChild(pContent);
      break;
    case 4:
    case 5:
      head.innerHTML = "Już policzyłem. Otrzymujesz " + points + "/" + qLength + " punktów. Czuwaj."; 
      pContent = document.createTextNode("Stanisław Paluch. Niby uczestniczysz w wydarzeniach, ale ni w ząb się w nich nie orientujesz."); 
      container.removeChild(questions);  
      container.removeChild(nButton);
      p.appendChild(pContent);
      break;
    case 6:
    case 7:
      head.innerHTML = "Już policzyłem. Otrzymujesz " + points + "/" + qLength + " punktów. Czuwaj."; 
      pContent = document.createTextNode("Kierownik Produkcji Hochwander. Widać, że z kobitą."); 
      container.removeChild(questions);  
      container.removeChild(nButton);
      p.appendChild(pContent);
      break;
    case 8:
    case 9:
      head.innerHTML = "Już policzyłem. Otrzymujesz " + points + "/" + qLength + " punktów. Czuwaj."; 
      pContent = document.createTextNode("Motyla noga. Lech Ryś, nasz ulubiony wujek."); 
      container.removeChild(questions);  
      container.removeChild(nButton);
      p.appendChild(pContent);
      break;
    case 10:
      head.innerHTML = "Już policzyłem. Otrzymujesz " + points + "/" + qLength + " punktów. Czuwaj."; 
      pContent = document.createTextNode("Niech nam żyje Prezes naszego klubu."); 
      container.removeChild(questions);  
      container.removeChild(nButton);
      p.appendChild(pContent);
      break;
  }
  fadeIn(container);
}
function nextQuestion(){//function for the nButton which:
  
  nButton.setAttribute("disabled", true);
  nButton.setAttribute("id", "nextButton");
  var answers = document.getElementsByTagName("input");
  for(var i = 0; i <allQuestions[x].choices.length; i++){ // - checks if you got the answer right and adds points
    if(answers[i].checked && i == allQuestions[x].correctAnswer){
      points++;   
    }
  }
  
  x++; // - increments the iterator
  
  while(questions.firstChild){ // - removes the answer choices for the previous question (iterates through all the inputs)
    questions.removeChild(questions.firstChild);
  }
  
  if (x < qLength){   // - adds consecutive questions 
    
    addElements(x);
  } else{
    quizEnd();    
  } 
  

}
nButton.addEventListener("click", nextQuestion); 
sButton.addEventListener("click", initiate);
}