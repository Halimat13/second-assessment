let user = ""
const input = document.querySelector(".search")
const title = document.querySelector("#title")
const fullName = document.querySelector("#fullname")
const phoneNumber = document.querySelector("#phoneNumber")
const email = document.querySelector("#email")
const address = document.querySelector("#address")


const form = document.querySelector('form')

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

input.addEventListener("change", (e) => {
    user = e.target.value
    let url ="https://randomuser.me/api/"
    const getProfileCard = () => {
        fetch(url).then (response => {
            return response.json()
        }).then (data => {
            title.textContent = data.name.title
            fullName.textContent = data.main.fullName
            phoneNumber.textContent = data.main.phoneNumber
            email.textContent = data.main.email
            address.textContent = data.main.address
        })
    } 
    getProfileCard()
}) 


 