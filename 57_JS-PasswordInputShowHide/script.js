function toggleEye() {
    const inputType = document.getElementById("password").type
    // console.log(inputType)
    const ownType =  inputType === 'password' ? 'text' : 'password'
    document.getElementById("password").type = ownType
    // console.log(ownType)
    if (ownType === 'password') {
        document.getElementById("icon").classList.remove("fa-eye")
        document.getElementById("icon").classList.add("fa-eye-slash")        
    }else{
        document.getElementById("icon").classList.remove("fa-eye-slash")
        document.getElementById("icon").classList.add("fa-eye")  
    }
}