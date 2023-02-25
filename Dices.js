window.onload=function(){
    var number1="d"+(Math.floor(Math.random() * 6 ) +1);
    console.log(number1)
    var number2="d"+(Math.floor(Math.random() * 6 ) +1);
    console.log(number2)
    var rand1=document.getElementById("d1")
    rand1.id=number1
    console.log(rand1.id)
    var rand2=document.getElementById("d2")
    rand2.id=number2
    console.log(rand2.id)
    

}