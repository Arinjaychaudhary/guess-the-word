function name(){
player1name=localStorage.getItem("player1");
player2name=localStorage.getItem("player2");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1name;
document.getElementById("player2name").innerHTML=player2name;

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("question").innerHTML="Question turn -  "+player1name;
document.getElementById("answer").innerHTML="Answer turn -  "+player2name;
}

function send(){
getword=document.getElementById("word").value;
word=getword.toLowerCase();
console.log(word);

charAt1=word.charAt(1);
console.log(charAt1);

lengthdivide2=Math.floor(word.length/2);
charAt2=word.charAt(lengthdivide2);
console.log(charAt2);

lenghtminus1=word.length-1;
charAt3=word.charAt(lenghtminus1);
console.log(charAt3);

removecharAt1=word.replace(charAt1,"_");
removecharAt2=removecharAt1.replace(charAt2,"_");
removecharAt3=removecharAt2.replace(charAt3,"_");

questionword="<h4 id='word_display'> Q. "+removecharAt3+"</h4>";
input="<br> <input type='text' placeholder'' id='answerinput'>";
checkbtn="<br> <button onclick=check() class='btn-success'>Check</button> ";
row=questionword+ input+ checkbtn;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

var answerturn="player2";
var questionturn="player1";

function check(){
getWord=document.getElementById("answerinput").value;
answerWord=getWord.toLowerCase();
console.log("answer word = "+answerWord);
console.log(word);
if(answerWord == word){
    if(answerturn == "player1"){
        player1score=player1score+1;
        document.getElementById("player1score").innerHTML=player1score;
    }
    else{
        player2score=player2score+1;
        document.getElementById("player2score").innerHTML=player2score;
    }
}
if (answerturn == "player1"){
    answerturn="player2";
    document.getElementById("answer").innerHTML="Answer turn -"+ player2name;
}
else{
answerturn="player1";
document.getElementById("answer").innerHTML="Answer turn -"+ player1name;
}

if (questionturn == "player1"){
    questionturn="player2";
    document.getElementById("question").innerHTML="Question turn -"+ player2name;
}
else{
questionturn="player1";
document.getElementById("question").innerHTML="Question turn -"+ player1name;
}
document.getElementById("output").innerHTML="";
}