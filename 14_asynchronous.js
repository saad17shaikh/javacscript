// setTimeout

// setTimeout(() => {
//     console.log("After 3 seconds I am executing")
// }, 3000);

// SetInterval

// setInterval(()=>{
//     console.log("Every one second it is executing")
// },1000)

// Promises

// const PromisOne = new Promise(function(resolve,reject) {
//         setTimeout(()=>{
//             console.log('after 1 second')
//             resolve();
//         },3000)
// })

// PromisOne.then(function(){
//     console.log("Upper function has been completed")
// })

// const PromiseTwo = new Promise((resolve,reject) =>{
//     let error = true
//     if(!error){
//         resolve({username: 'Saad',age:22})
//     }else(
//         reject('There is an error')
//     )
// })
// PromiseTwo.then((user)=>{
//     console.log(user)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("done :)")
// })

// new Promise((resolve,reject)=>{
//     let error = false;
//     if(!error){
//         resolve({username : "Abcdde",age: 45})
//     }
//     else(
//         reject('error')
//     )
// }).then((user)=>{
//     // console.log(typeof user)
//     return user.username
// }).then((username)=>{
//     console.log( username)
//     // console.log(typeof username)
// }).catch((err)=>{
//     console.log(err)
// })

// Async Await

// async function githubApi() {
//   try {
//     const url = "https://api.github.com/users/saad17shaikh";
//     const response = await fetch(url);

//     const data = await response.json();
//     // console.log(typeof data)
//     let time_creation = data.created_at.slice(0, 10);
//     let date_created = new Date(time_creation);
//     console.log(date_created.toLocaleDateString());
//   } catch (error) {
//     console.log(error);
//   }
// }
// githubApi()

// Using fetch by Promises

// fetch("https://api.github.com/users/saad17shaikh")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data.login)
// }).catch(()=>{
//     console.log("there is an error")
// })
const username = document.querySelector('.github-name')
const image = document.querySelector('#avatar')

fetch("https://api.github.com/users/saad17shaikh")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    // console.log(data)
    username.innerHTML = data.login
    image.setAttribute('src',`${data.avatar_url}`)
})