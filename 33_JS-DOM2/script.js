function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value )
    const num2 = parseFloat(document.getElementById("num2").value) 
    const op = document.getElementById("op").value 
    let result;

    // method 1
    // switch (op) {
    //     case '+':
    //         result = num1 + num2
    //         break;
    //     case '-':
    //         result = num1 - num2
    //         break;
    //     case '*':
    //         result = num1 * num2
    //         break;
    //     case '/':
    //         result = num1 / num2
    //         break;
    
    //     default:
    //         result="Invalid"
    //         break;
    // }

    // method 2
    if(op == '+'){
        result = num1 + num2
    }else if(op == '-'){
        result = num1 - num2
    }else if(op == '*'){
        result = num1 * num2
    }else if(op == '/'){
        result = num1 / num2
    }else{
        result = "Invalid"
    }

    document.getElementById("result").innerText = result

    
}