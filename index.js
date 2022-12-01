let USERS_DB = []

const signUp = () =>{
    let firstName= document.getElementById("first-name").value
    let lastName= document.getElementById("last-name").value
    let email = document.getElementById("signup-email").value
    let phoneNumber = document.getElementById("phone-number").value
    let password = document.getElementById("signup-password").value
    // console.log(firstName, lastName, email, phoneNumber, password)

    document.getElementById("sign-up-form").reset()

    let userDetails = {
        firstName:firstName,
        lastName:lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    }
    
    alert("signup successful")
    USERS_DB.push(userDetails)
    console.log(USERS_DB)
}

const signIn = () =>{
    let signInEmail = document.getElementById("email-signin").value
    let signInPassword = document.getElementById("signin-password").value

    let requiredUser = USERS_DB.find(user=> user.email === signInEmail && user.password === signInPassword)

    
        if(requiredUser){
            alert("Access granted")
            goToHome()
        } else{
            alert("Access denied")
        }
    

}


const goToHome=()=>{
    document.getElementById('home').style.display='block';
    document.getElementById('sign-up').style.display='none'; 
    document.getElementById('sign-in').style.display='none';
   
}
const goToSignUp=()=>{
    document.getElementById('sign-up').style.display='block';
    document.getElementById('home').style.display='none';
    document.getElementById('sign-in').style.display='none';
}

const goToSignIn=()=>{
    document.getElementById('sign-in').style.display='block';
    document.getElementById('home').style.display='none';
    document.getElementById('sign-up').style.display='none';
}





