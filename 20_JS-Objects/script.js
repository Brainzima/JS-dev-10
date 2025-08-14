// let carName = "Tata Punch"
// let carModel = "EV25"
// let carBrand = "Tata"
// let carColor = "blue"

const car = {
    name:"Tata Punch",
    model:"EV25",
    brand:"Tata",
    color:"Blue"
}

// document.writeln(car)
// console.log(car)

//accessing the properties of object
// way 1 
document.writeln(car["name"])
// way 2
document.writeln(car.name)
document.writeln(car.model)


//*************************** */
// const myFunc = function(){

// }
// function myFunc(){

// }

const bike = {
    name:"Royal Enfield",
    model:"Hunter 360",
    start:function(){
        document.writeln("<br>Bike is now started...")
    },
    drive:function(){
        document.writeln("<br>Bike is beig drive...")
    },
    brake:function(){
        document.writeln("<br>Brake lag chuka h...")
    },
    stop:function(){
        document.writeln("<br>Bike has been stopped...")
    },
    fuel:function(){
        document.writeln("<br>Petrol dal rhe h...")
    }
}

console.log(bike)
bike.start()
bike.brake()
bike.fuel() 
bike.stop()
