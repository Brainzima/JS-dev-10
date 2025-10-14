function genPassword() {
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&()"
    // console.log(randomChars)
    let len = randomChars.length
    // console.log(len)

    // ek = randomChars[0]
    // console.log(ek)

    // let ri = Math.floor(Math.random()*len)
    // console.log(ri)

    let generatedPass = ''
    for (let i = 0; i < 8; i++) {
        let ri = Math.floor(Math.random()*len)
        generatedPass += randomChars[ri]
    }
    console.log(generatedPass)
    document.getElementById("display").innerText=generatedPass
}