
const name = document.getElementById("username") 
const email = document.getElementById("email")
const password = document.getElementById("password")


const signUpBtn = document.getElementById("signUp")

signUpBtn.addEventListener("click", async () => 
{
    const response = await fetch("http://localhost:5001/users/registher" , 
    {
        method:"POST",
        body: JSON.stringify({
            username:name,
            email:email,
            password:password
        }),
        headers: {"Content-Type": "application/json"},
    });
})