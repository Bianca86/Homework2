const er = document.querySelector("#error");
const logIn = document.querySelector("#logIn");
const userData = {
    email: "emailAddress@domain.com",
    pass: "uniquePassword"
    }

logIn.addEventListener("click", (e) => {
    const email = document.querySelector("#userEmail").value;
    const pass = document.querySelector("#userPass").value;
      e.preventDefault();

     console.log(email, pass);

     if(email !== ""){
      if(pass !== ""){
          const regEx = /\w{2,}\@\w{2,}.\D{2,}/g;
            if(email.match(regEx)) {
           if(email === userData.email && pass === userData.pass){
            er.style.display = "none";
            er.innerText = "";
             alert("Logged in successful");
           } else{
            er.style.display = "block";
            er.innerText = "Invalid email or password";
           }

            } else{
              er.style.display = "block";
            er.innerText = "Invalid email address";
            }

          } else{
            er.style.display = "block";
            er.innerText = "Please insert password";
          }
        } else{
            er.style.display = "block";
            er.innerText = "Please insert email";
          }
        
      });
