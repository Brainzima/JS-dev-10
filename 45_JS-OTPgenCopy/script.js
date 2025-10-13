function genOtp() {
    let otp = ""
    for (let i = 1; i <= 6; i++) {
        let genDigit = Math.floor(Math.random(0,9)*10)
        otp = otp + genDigit   
    }
    document.getElementById("otp").innerText=otp
}

function copyOtp(){
    const otp = document.getElementById("otp").innerText
    // console.log(otp)

    // navigator.clipboard.writeText("Maine Copy Kiya")
    navigator.clipboard.writeText(otp)
    .then(
        alert("Successfully Copied!")
    )
}

setInterval(() => {
    genOtp();
}, 5000);