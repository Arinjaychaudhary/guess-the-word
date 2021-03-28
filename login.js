function add(){
player1=document.getElementById("login1").value;
player2=document.getElementById("login2").value;

localStorage.setItem("player1",player1);
localStorage.setItem("player2",player2);

window.location="gamepage.html";
}