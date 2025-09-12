function convert() {
    // get the values in variable
    const values = document.getElementById("values").value
    const fromUnit = document.getElementById("fromUnit").value
    const toUnit = document.getElementById("toUnit").value

    // test console 
    console.log(values)
    console.log(fromUnit)
    console.log(toUnit)

    //experiments for single conversion
    // gram = 1
    // killogram = 1000
    // result = values * gram / killogram
    // console.log(result)

    // experiments for multiple units
    factors = {
        Gram: 1,
        Killogram: 1000,
        Centimeter: 0.01,
        Meter: 1,
        Killometer: 1000,
        Mililitre: 1,
        Litre: 1000
    }

    if ((["Gram", "Killogram"].includes(fromUnit) && ["Gram", "Killogram"].includes(toUnit)) || (["Centimeter", "Meter", "Killometer"].includes(fromUnit) && ["Centimeter", "Meter", "Killometer"].includes(toUnit)) || (["Litre", "Mililitre"].includes(fromUnit) && ["Litre", "Mililitre"].includes(toUnit))) {
        result = values * factors[fromUnit] / factors[toUnit]
    } else {
        result = "Invalid Unit"
    }

    console.log(result)

    document.getElementById("result").innerHTML = result +" "+ toUnit
}