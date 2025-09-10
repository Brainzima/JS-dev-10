function check() {
    const num = document.getElementById("num").value 
    if( num%2 == 0 ){
        result = "Even"
    }else{
        result = "Odd"
    }
    document.getElementById("result").innerText=result
}