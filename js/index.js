let signupLink = document.querySelector("#signup")
let signinLink = document.querySelector("#signin")

let body = document.querySelector("body");

signupLink.onclick = () => {
    body.classList.add('signup')
}

signinLink.onclick = () => {
    body.classList.remove('signup')
}