window.onload=function(){
    var number1=(Math.floor(Math.random() * 6 ) +1);
    console.log(number1)
    var number2=(Math.floor(Math.random() * 6 ) +1);
    console.log(number2)
    var d1_id="d"+number1
    var d2_id="d"+number2
    var rand1=document.getElementById("d0")
    rand1.id=d1_id
    console.log(rand1.id)
    var rand2=document.getElementById("d0")
    rand2.id=d2_id
    console.log(rand2.id)
    var status = document.getElementsByTagName("h1")[0]
    console.log(status)
    if (number1>number2)
        status.innerHTML="Player 1 Wins"
    if (number2>number1)
         status.innerHTML="Player 2 Wins"
    if(number1==number2) status.innerHTML="It's a draw!"

    }
    