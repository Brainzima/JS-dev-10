setInterval(() => {
    document.getElementById("box").style.display="none"
}, 500);

setInterval(() => {
    document.getElementById("box").style.display="block"
}, 1000);

// 1 way 
// function bulbOn(){
//     document.getElementById("image").src="bulb-on.png"
// }
// function bulbOff(){
//     document.getElementById("image").src="bulb-off.png"
// }
// function bulbDim(){
//     document.getElementById("image").src="bulb-night.png"
// }

// 2 way 
// function bulb(mode){
//     switch (mode) {
//         case "on":
//             source = "bulb-on.png"
//             break;
//         case "off":
//             source = "bulb-off.png"
//             break;
//         case "dim":
//             source = "bulb-night.png"
//             break;
    
//         default:
//             break;
//     }
//     document.getElementById("image").src=source
// }


// 3 way with adv feature 
function bulb(mode){
    switch (mode) {
        case "on":
            source = "bulb-on.png"
            bgc = "#fcf6b1"
            break;
        case "off":
            source = "bulb-off.png"
            bgc = "#363534"
            break;
        case "dim":
            source = "bulb-night.png"
            bgc = "#b7c6eb"
            break;
    
        default:
            break;
    }
    document.getElementById("image").src=source
    document.getElementById("body").style.backgroundColor=bgc
}