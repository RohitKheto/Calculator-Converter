function tometer(value,format){
    if(format=="kilometer"){
        value=value*1000;
    }
    else if(format=="decimeter"){
        value=value*0.1;
    }
    else if(format=="centimeter"){
        value=value*0.01;
    }
    else if(format=="millimeter"){
        value=value*0.001;
    }
    else if(format=="micrometer"){
        value=value*0.000001;
    }
    else if(format=="nanometer"){
        value=value*0.000000001;
    }
    else if(format=="picometer"){
        value=value*0.000000000001;
    }
    else if(format=="lightyear"){
        value=value/(1.057*Math.pow(10,-16));
    }
    else if(format=="inch"){
        value=value*0.0254;
    }
    else if(format=="mile"){
        value=value*1609.34;
    }
    else if(format=="foot"){
        value=value*0.3048;
    }
    else if(format=="yard"){
        value=value*0.9144;
    }
    else if(format=="nmi"){
        value=value/0.00054;
    }
    return value;
}
function frommeter(value,format){
    if(format=="kilometer"){
        value=value/1000;
    }
    else if(format=="decimeter"){
        value=value/0.1;
    }
    else if(format=="centimeter"){
        value=value/0.01;
    }
    else if(format=="millimeter"){
        value=value/0.001;
    }
    else if(format=="micrometer"){
        value=value/0.000001;
    }
    else if(format=="nanometer"){
        value=value*1000000000;
    }
    else if(format=="picometer"){
        value=value/0.000000000001;
    }
    else if(format=="lightyear"){
        value=value*1.057*Math.pow(10,-16);
    }
    else if(format=="inch"){
        value=value/0.0254;
    }
    else if(format=="mile"){
        value=value/1609.34;
    }
    else if(format=="foot"){
        value=value/0.3048;
    }
    else if(format=="yard"){
        value=value/0.9144;
    }
    else if(format=="nmi"){
        value=value/0.00054;
    }
    return value;
}
function click(){
    let cel=tometer(document.getElementsByTagName("input")[0].value,document.getElementsByClassName("length")[0].value);
    let answer=frommeter(cel,document.getElementsByClassName("length")[1].value);
    document.getElementById("result").innerHTML=answer;
}
document.getElementsByTagName("button")[0].addEventListener("click",click);