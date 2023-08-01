alert("Test");
var changeColor=document.getElementById("color");
var changeText=document.getElementById("text")
changeColor.addEventListener('click',function(){
    const colour="#"+Math.floor(Math.random()*16777215).toString(16);
    changeText.style.color=colour;
});