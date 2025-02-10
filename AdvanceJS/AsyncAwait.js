function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Network Error")
        }, 3000);
    })
}
console.log(fetchUserData())

async function getUserData() {
    try {
        console.log("Fetching User Data...")
        const data = await fetchUserData()
        console.log("User Data: ", data)
    } catch (error) {
        console.log("Error Fething Data", error)       
    }
}


getUserData()