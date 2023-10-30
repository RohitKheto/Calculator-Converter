function calculate(){
    if(document.getElementById("height").value!="" && document.getElementById("weight").value!="" && document.getElementById("age").value!=""){
        let he=parseInt(document.getElementById("height").value);
        let we=parseInt(document.getElementById("weight").value);
        he=he/100;
        let res = we/(he*he);
        res=parseInt(res.toFixed(2));
        var situation=""
        var mul=0;
        var add=0;
        var sub=0;
        if(res<18.5){
            mul=2;
            add=270;
            sub=0;
            if(res<16)
                situation="Severe Thinness";
            else if(res>=16 & res<17)
                situation="Moderate Thinness";
            else
                situation="Mild Thinness";
        }
        else if(res<25){
            sub=18.5;
            mul=5.23;
            add=307;
            situation="Normal";
        }
        else{
            sub=25;
            mul=6.8;
            add=341;
            if(res<30){
                situation="Overweight";
            }
            else if(res<35){
                situation="Obese";
            }
            else{
                situation="Extremely Obese";
            }
        }
        document.getElementById("result").innerHTML=`BMI = ${res} kg/m&#178 (${situation})`;
        var degree=parseInt((res-sub)*mul)+add;
        if(degree<270)
            degree=270;
        else if(degree>450)
            degree=450;

        document.getElementById("hand").style.transform=`rotate(${degree}deg)`;
    }
}
document.getElementsByTagName("button")[1].addEventListener("click",clear);
function clear(){
    document.getElementById("height").value="";
    document.getElementById("weight").value="";
    document.getElementById("age").value="";
    document.getElementById("result").innerHTML="BMI = 0 kg/m^2";
}