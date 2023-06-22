

document.querySelector("#btn1").addEventListener("click", function(e)
{
    document.getElementById("btn1").style.background = "#FFF2E2"; 
    document.getElementById("btn2").style.background = "inherit";
    document.getElementById("cards2022").style.display = "none";
    document.getElementById("cards2023").style.display = "inherit";
    
})


document.querySelector("#btn2").addEventListener("click", function(e)
{
    document.getElementById("btn2").style.background = "#FFF2E2";
    document.getElementById("btn1").style.background = "inherit";
    document.getElementById("cards2022").style.display = "inherit"; 
    document.getElementById("cards2023").style.display = "none"; 
})


document.querySelector("#btn3").addEventListener("click", function(e)
{
    document.getElementById("btn3").style.background = "#FFF2E2";
    document.getElementById("btn4").style.background = "inherit";
    document.getElementById("b_cards2022").style.display = "none";
    document.getElementById("b_cards2023").style.display = "inherit";
    
})


document.querySelector("#btn4").addEventListener("click", function(e)
{
    document.getElementById("btn4").style.background = "#FFF2E2";
    document.getElementById("btn3").style.background = "inherit";
    document.getElementById("b_cards2022").style.display = "inherit"; 
    document.getElementById("b_cards2023").style.display = "none"; 
})

