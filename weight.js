function toGram(value,format){
    if(format=="kilogram"){
        value=value*1000;
    }
    else if(format=="milligram"){
        value=value*0.001;
    }
    else if(format=="microgram"){
        value=value*0.000001;
    }
    else if(format=="ton"){
        value=value*1000000;
    }
    else if(format=="quintal"){
        value=value*100000;
    }
    else if(format=="carat"){
        value=value*0.2;
    }
    else if(format=="pound"){
        value=value*453.592374495299;
    }
    else if(format=="ounce"){
        value=value*28.349523164848;
    }
    else if(format=="grain"){
        value=value*0.06479891;
    }
    else if(format=="longton"){
        value=value*1016053.647632595001;
    }
    else if(format=="shortton"){
        value=value*907194.048807039826;
    }
    else if(format=="stone"){
        value=value*6350.294971201412;
    }
    else if(format=="dram"){
        value=value*1.771845195291;
    }
    return value;
}
function fromGram(value,format){
    if(format=="kilogram"){
        value=value/1000;
    }
    else if(format=="milligram"){
        value=value/0.001;
    }
    else if(format=="microgram"){
        value=value/0.000001;
    }
    else if(format=="ton"){
        value=value/1000000;
    }
    else if(format=="quintal"){
        value=value/100000;
    }
    else if(format=="carat"){
        value=value/0.2;
    }
    else if(format=="pound"){
        value=value/453.592374495299;
    }
    else if(format=="ounce"){
        value=value/28.349523164848;
    }
    else if(format=="grain"){
        value=value/0.06479891;
    }
    else if(format=="longton"){
        value=value/1016053.647632595001;
    }
    else if(format=="shortton"){
        value=value/907194.048807039826;
    }
    else if(format=="stone"){
        value=value/6350.294971201412;
    }
    else if(format=="dram"){
        value=value/1.771845195291;
    }
    return value;

}
function click(){
    let cel=toGram(document.getElementsByTagName("input")[0].value,document.getElementsByClassName("weight")[0].value);
    let answer=fromGram(cel,document.getElementsByClassName("weight")[1].value);
    document.getElementById("result").innerHTML=answer;
}
document.getElementsByTagName("button")[0].addEventListener("click",click);