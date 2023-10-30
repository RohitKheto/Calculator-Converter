function toCelsius(value,format){
    if(format=="farenheit"){
        value=(value-32)*(5/9);
    }
    else if(format=="kelvin"){
        value=value-273.15;
    }
    else if(format=="reaumur"){
        value=value*1.25;
    }
    else if(format=="rankine"){
        value=(value-491.67)/1.8;
    }
    return value;
}
function fromCelsius(value,format){
    if(format=="farenheit"){
        value=parseFloat(value*(9/5))+32;
    }
    else if(format=="kelvin"){
        value=parseFloat(value)+273.15;
    }
    else if(format=="reaumur"){
        value=value*(4/5);
    }
    else if(format=="rankine"){
        value=parseFloat(value*1.8)+491.67;
    }
    return value;
}
function click(){
    let cel=toCelsius(document.getElementsByTagName("input")[0].value,document.getElementsByClassName("temperature")[0].value);
    let answer=fromCelsius(cel,document.getElementsByClassName("temperature")[1].value);
    document.getElementById("result").innerHTML=answer;
}
document.getElementsByTagName("button")[0].addEventListener("click",click);