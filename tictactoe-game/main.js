// alert("test");
let character = "O";

  
//resets buttons
function resetToDefault() {
    let b1 = document.getElementById("1");
    let b2 = document.getElementById("2");
    let b3 = document.getElementById("3");
    let b4 = document.getElementById("4");
    let b5 = document.getElementById("5");
    let b6 = document.getElementById("6");
    let b7 = document.getElementById("7");
    let b8 = document.getElementById("8");
    let b9 = document.getElementById("9");
    
    b1.value="";
    b2.value="";
    b3.value="";
    b4.value="";
    b5.value="";
    b6.value="";
    b7.value="";
    b8.value="";
    b9.value="";
    b1.disabled=false;
    b2.disabled=false;
    b3.disabled=false;
    b4.disabled=false;
    b5.disabled=false;
    b6.disabled=false;
    b7.disabled=false;
    b8.disabled=false;
    b9.disabled=false;
    
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("overlay").style.visibility = "hidden";
}

function disableButtons() {
    let b1 = document.getElementById("1");
    let b2 = document.getElementById("2");
    let b3 = document.getElementById("3");
    let b4 = document.getElementById("4");
    let b5 = document.getElementById("5");
    let b6 = document.getElementById("6");
    let b7 = document.getElementById("7");
    let b8 = document.getElementById("8");
    let b9 = document.getElementById("9");
    
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
}

function showPopUp(winner) {
      //disable all buttons
      disableButtons();
    
      //replace text
      let popuptext = document.getElementById("text");
      popuptext.innerHTML = winner + " wins.";
    
      //makes popup visible
      let pop = document.getElementById("popup");
      let overlay = document.getElementById("overlay");
      pop.style.visibility = "visible";
      overlay.style.visibility ="visible"
}

//check if the game is over
function finalcheck() {
    //The status of the buttons is read out
    let b1 = document.getElementById("1").value;
    let b2 = document.getElementById("2").value;
    let b3 = document.getElementById("3").value;
    let b4 = document.getElementById("4").value;
    let b5 = document.getElementById("5").value;
    let b6 = document.getElementById("6").value;
    let b7 = document.getElementById("7").value;
    let b8 = document.getElementById("8").value;
    let b9 = document.getElementById("9").value;
    
    
    if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
        showPopUp(b1);
    }
    
    else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        showPopUp(b1);
    }
    
    else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
        showPopUp(b9);
    }
    
    else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
      showPopUp(b9);
    }
    
    else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
      showPopUp(b4);
    }
    
    else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
      showPopUp(b2);
    }
    
    else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
      showPopUp(b1);
    }
    
    else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
      showPopUp(b7);
    }
    }

  
  
  
//input X or Y
function put(x, character) {
     if (x==1) {
     let button = document.getElementById("1");
     button.value = character;
     button.disabled=true;
     }
     else if (x==2) {
     let button = document.getElementById("2");
     button.value = character;
     button.disabled=true;
     }
     else if (x==3) {
     let button = document.getElementById("3");
     button.value = character;
     button.disabled=true;
     }
     else if (x==4) {
     let button = document.getElementById("4");
     button.value = character;
     button.disabled=true;
     }
     else if (x==5) {
     let button = document.getElementById("5");
     button.value = character;
     button.disabled=true;
     }
     else if (x==6) {
     let button = document.getElementById("6");
     button.value = character;
     button.disabled=true;
     }
     else if (x==7) {
     let button = document.getElementById("7");
     button.value = character;
     button.disabled=true;
     }
     else if (x==8) {
     let button = document.getElementById("8");
     button.value = character;
     button.disabled=true;
     }
     else if (x==9) {
     let button = document.getElementById("9");
     button.value = character;
     button.disabled=true;
     }
     finalcheck();
     }
  
//welches character?
function xo(button) {
    if (character=="X") {
    character="O";
    put(button, character);
    }
    else if (character=="O") {
    character="X";
    put(button, character);
    }
    }