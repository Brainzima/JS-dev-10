function wish() {
    let names=["Ajit","Amana","Naman","Sapan","Lokesh","Mukesh"]
    let ri = Math.floor(Math.random() * names.length)
    document.getElementById("name").innerText=names[ri]
}
setInterval(() => {
    wish()
}, 1000);