player1_name= localStorage.getItem("player1nameinput");
player2_name= localStorage.getItem("player2nameinput");
pl1score=0;
pl2score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1score").innerHTML=pl1score;
document.getElementById("player2score").innerHTML=pl2score;
document.getElementById("playerquestion").innerHTML="Question turn"+player1_name;
document.getElementById("playeranswer").innerHTML="Answer turn"+player2_name;
function send(){
var number1=document.getElementById("num").value;
var number2=document.getElementById("num2").value;
 
 act_ans=parseInt(number1)*parseInt(number2)



question_word = "<h4>"+number1+"X"+number2+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button ;
}
function check(){
Qturn="pl1";
aturn="pl2";
  getanswer= document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();

    if(answer==act_ans){
if(aturn=="pl1")
{

    pl1score=pl1score+1;
    document.getElementById("player1score").innerHTML=pl1score;
}
else
    {
        pl2score=pl2score+1;
    document.getElementById("player2score").innerHTML=pl2score;
    }

}
if(aturn=="pl1")
{

   aturn="pl2";
    document.getElementById("playeranswer").innerHTML="answerturn"+player2_name;
}
else
{

    aturn="pl1";
     document.getElementById("playeranswer").innerHTML="answerturn"+player1_name;
 }
 if(Qturn=="pl1")
{

   Qturn="pl2";
    document.getElementById("playerquestion").innerHTML="questionturn"+player2_name;
}
else
{

    Qturn="pl1";
     document.getElementById("playerquestion").innerHTML="questionturn"+player1_name;
    }
 document.getElementById("output").innerHTML="";
}
