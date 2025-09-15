function red() {
    document.getElementById("box").style.backgroundColor="red"
}
function green() {
    document.getElementById("box").style.backgroundColor="green"
}
function blue() {
    document.getElementById("box").style.backgroundColor="blue"
}
function orange() {
    document.getElementById("box").style.backgroundColor="orange"
}

function changeBg(color) {
    document.getElementById("box").style.backgroundColor=color
    
}



function doMagic(){
    document.getElementById("title").classList.add("title")
}
function undoMagic(){
    document.getElementById("title").classList.remove("title")
}