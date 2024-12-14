console.log("everthing is ready.")
import { getAllPost } from "./api.js"

window.addEventListener("DOMContentLoaded", async () => {
    const Posts = await getAllPost()
    console.log(Posts)
})

// const status = document.querySelector("#status")
// const body = document.querySelector("body")
// try {
//     // Simulate console test
//     console.log("Console is working fine.");
    
//     // Change background to green and display status
//     body.style.backgroundColor = "green"
//     status.textContent = "Console is working fine!"
//   } catch (error) {
//     // Change background to red if there's an error
//     body.style.backgroundColor = "red"
//     status.textContent = "Console encountered an error!"
//     console.error("Error detected in the console:", error) }