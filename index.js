function addnumber(value){
    document.getElementById("screen").innerHTML=document.getElementById("screen").innerHTML+value;
}
function addopen(){
    document.getElementById("screen").innerHTML=document.getElementById("screen").innerHTML+"(";
}
function addclose(){
    document.getElementById("screen").innerHTML=document.getElementById("screen").innerHTML+")";
}
function backspace(){
    let equation=document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML=equation.slice(0,-1);
}
function allclear(){
    document.getElementById("screen").innerHTML="";
}
function answer(){
    let equation=document.getElementById("screen").innerHTML;
    let lastchar=equation.charAt(equation.length - 1);
    if(equation==""){
        alert("Enter valid equation");
    }
    else if(lastchar!='%' && lastchar!='/' && lastchar!='+' && lastchar!='*' && lastchar!='-')
    {
        document.getElementById("screen").innerHTML=eval(equation);
    }
    else{
        alert("Enter valid equation");
    }
}
