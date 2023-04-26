function click(){
    var player1name=document.getElementById("player1_name input").value;
    var player2name=document.getElementById("player2_name input").value;
   
    localStorage.setItem("player2_name input",layer2name);
    localStorage.setItem("player1_name input",player1name);
    window.location="game.html";
   }