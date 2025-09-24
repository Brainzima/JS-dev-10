function one(){
    alert("Don't Click on me ever.")
}
function two(){
    document.getElementById("box").style.backgroundColor="blue"
}

function three(){
    const userInput = document.getElementById("userInput").value 
    document.getElementById("data").innerText=userInput
}