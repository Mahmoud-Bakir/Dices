window.onload=function(){
    var number="id"+(Math.floor(Math.random() * 6 ) +1);
    console.log(number)
    var rand1=document.getElementById("d1")
    console.log(rand1.id)
    rand1.id="d2"
    console.log(rand1.id)

}