const error = document.querySelector("#error");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const logIn = document.querySelector("#logIn");
const testID = {
    email: "adresaEmail@domeniu.ro",
    pass: "parola"
}

logIn.addEventListener("click", (e) => {
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;
    e.preventDefault();

    console.log(email, pass);

    if(email !== ""){
        if(pass !== ""){
            const regEx = /\w{2,}\@\w{2,}.\D{2,}/g;
            if(email.match(regEx)){
                if(email === testID.email && pass === testID.pass){
                    error.style.display= "none";
                    error.innerText = "";
                    alert("Logged")
                } else{
                    error.style.display= "block";
                    error.innerText = "Invalid email or pass";
                } 
            } else{
                error.style.display= "block";
                error.innerText = "Invalid password";
            } 
            } else{
                    error.style.display= "block";
                    error.innerText = "Please insert password";
                } 
            } else {
                    error.style.display= "block";
                    error.innerText = "Please insert email address";
                }
            
});