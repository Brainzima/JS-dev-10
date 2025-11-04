function getInfo(){
    // console.log("button clicked")
    navigator.geolocation.getCurrentPosition(success,error)
}

function success(cp){
        lat = cp.coords.latitude
        lon = cp.coords.longitude
        
        console.log(lat)
        console.log(lon)
        // document.getElementById("gtmap").href=`https://www.google.com/maps/@${lat},${lon}`
        document.getElementById("gtInfo").href=`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
}

function error(){
    console.log("Getting Error!")
}