function derekszoguharomszog()
var a= document.getElementById(aOldal).value;
var b= document.getElementById(aOldal).value;
var c= document.getElementById(aOldal).value;
if (a*a+b*b == c*c){
    document.getElementById("valasz").innerHTML="a háromszög derékszögű";  
}
else {
    document.getElementById("valasz").innerHTML="a háromszög nem derékszögű";  
}

return false;

}
