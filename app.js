import axios from "axios"

const getData = async(userID) => {
    const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${userID}`)
    const {data:posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)

    console.log("User", user)
    console.log("User's Posts", posts)
    
}

export default getData