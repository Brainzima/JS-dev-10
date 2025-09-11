function makeTable(){
    const number = parseInt(document.getElementById("num").value)
    const result = document.getElementById("result")

    for (let i = 1; i <= 10; i++) {
        result.append(`${number*i}`)  
    }   

}