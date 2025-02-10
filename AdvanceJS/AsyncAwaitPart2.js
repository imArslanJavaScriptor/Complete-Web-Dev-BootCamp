function fetchingPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched Successfully")
        }, 2000);
    })
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data Fetched Successfully")
        }, 3000);
    })
}

async function  getBlogData() {
    try {
        console.log("Fetching Blog Data")
        // const postData = await fetchingPostData()
        // const commentData = await fetchCommentData()
        const [postData, commentData] = await Promise.all([fetchingPostData(), fetchCommentData()])
        console.log(postData)
        console.log(commentData)
        console.log("Fethcing Complete")
    } catch (error) {
        console.log("Error Fetching Blog Data", error)
    }
}

getBlogData()