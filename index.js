
const email = document.getElementById("email")
const password = document.getElementById("password")


const sigInBtn = document.getElementById("signIN")

signIn.addEventListener("click", async () => 
{
    const response = await fetch("http://localhost:5001/users/login" , 
    {
        method:"POST",
        body: JSON.stringify({
            email:email,
            password:password
        }),
        headers: {"Content-Type": "application/json"},
    });
    
    if(response.ok){
        const data = await response.json();
        const accessToken = data.token;
        document.cookie = `access_token=${accessToken};`;
    }
    else { alert("Not Found User"); throw response.status }
})