var score= 0;
var counter = 0;

function buildQuiz() {
    if (counter < Questions.length-5) {
        DisplayQs()
    } else {
        showresults()
    }
}


function DisplayQs(){ // this bit displays the questions and registers when an answer is clicked. You only get one shot, a back button or something might be useful
    document.querySelector(".question").innerHTML = Questions[counter];
    document.getElementById('a').innerHTML = Questions[counter+1];
    document.getElementById('b').innerHTML = Questions[counter+2];
    document.getElementById('c').innerHTML = Questions[counter+3];
    document.getElementById('d').innerHTML = Questions[counter+4];
    var correctvalue=Questions[counter+5];

    let buttons = document.getElementsByTagName("button");
        for ( let i = 0; i < buttons.length; i++){
            let button=buttons[i];

    if(button.innerHTML==correctvalue) //if the right answer is pressed then the score gets increased and the next question loaded
        button.addEventListener("click", function(){
        score += 1;
        counter += 6;
        buildQuiz();
        console.log( "score =" + score);
    });

    else { //if any other answer is pressed then the next question loaded
        button.addEventListener("click", function(){ 
        counter += 6;
        buildQuiz();
        console.log("score =" + score);
    });

    }
}
}

//this displays the score after the test - Could definitely be improved with a popup or something

function showresults(){
    document.querySelector(".question").innerHTML = "You Scored " + score + " Out Of "+ Questions.length/6+ "!"; 
    document.getElementById('a').innerHTML = "";
    document.getElementById('b').innerHTML = "";
    document.getElementById('c').innerHTML ="";
    document.getElementById('d').innerHTML = "";

}
