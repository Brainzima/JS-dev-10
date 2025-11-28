// var loadStatus=false;
async function fetchUsers(id) {
    document.getElementById("loading").textContent = 'Loading Profile Detail...'
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        document.getElementById("name").textContent= data.name
        document.getElementById("username").textContent= data.username
        document.getElementById("email").textContent= data.email
        document.getElementById("address").textContent= data.address.street+", "+data.address.city+ ", "+data.address.zipcode
        document.getElementById("phone").textContent= data.phone
        document.getElementById("loading").textContent = ''
    } catch (error) {
        alert(error)
    }
}

// if(loadStatus){
//     document.getElementById("loading").textContent = 'Loading Profile Detail...'
// }

// fetchUsers(1)


// function showUsers(name, username, email, address, phone){
//     const 
// }