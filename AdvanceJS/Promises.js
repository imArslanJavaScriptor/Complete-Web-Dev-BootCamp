function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true
      if (success) {
        resolve("Data Fetched Successfully");
      } else {
        reject("Error Fetching Data");
      }
    }, 2000);
  });
}

// This is How we consume the promise
let response = fetchData()
// console.log(response)


response
.then((res) => {
    console.log(res)
    return 10
})
.then((data) => data + 10)
.then((data) => console.log(data))
.catch((reject) => {
    console.log(reject)
})
.finally(() => {
    console.log(`finally Primise is Completed`)
})