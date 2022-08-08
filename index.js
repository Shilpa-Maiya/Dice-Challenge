var randomNumber1=Math.round(Math.random() *5 +1);
var randomimg ="dice" +randomNumber1 + ".png";
var randomsrc ="images\\" +randomimg;
var imagee=document.querySelectorAll("img");
imagee[0].setAttribute("src",randomsrc);
var randomNumber2=Math.round(Math.random() *5 +1);
var randomimg1 ="dice" +randomNumber2 + ".png";
var randomsrc1 ="images\\" +randomimg1;
imagee[1].setAttribute("src",randomsrc1);

if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
