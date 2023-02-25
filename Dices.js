window.onload=function(){
    var number1=(Math.floor(Math.random() * 6 ) +1);
    console.log(number1)
    var number2=(Math.floor(Math.random() * 6 ) +1);
    console.log(number1)
    var d1_id="id"+number1
    var d2_id="id"+number2
    var rand1=document.getElementById("d1")
    rand1.id=d1_id
    console.log(rand1.id)
    var rand2=document.getElementById("d2")
    rand2.id=d2_id
    console.log(rand2.id)
    var status = document.getElementsByTagName("h1")[0]
    console.log(status)
    

}