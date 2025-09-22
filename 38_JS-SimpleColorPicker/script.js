function getColor(){
    const hexColor = document.getElementById("hexColor").value 
    // console.log(hexColor)
    document.getElementById("box").style.backgroundColor=hexColor
    document.getElementById("hex").innerText=hexColor
}