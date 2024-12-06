const emailField = document.querySelector(".email");
const passwordField = document.querySelector(".password");
const loginButton = document.querySelector(".loginbutton");
const logindetail = document.querySelector(".logindetail");
const imgDiv = document.querySelector(".img");
const mainDiv = document.querySelector(".main");
const img2sub = document.querySelector(".img2sub");
const img2 = document.querySelector(".img2");
const login = document.querySelector(".login");

loginButton.addEventListener("click", function(event) {
    event.preventDefault(); 

   
    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    if (email !== "" && password !== "") {
        img2.style.display = "block";
        imgDiv.style.display ="none";
        logindetail.style.display="none";
        login.style.display="none";
        img2.classList.add("animate__animated", "animate__zoomIn");
        setTimeout(() => {
            img2.classList.remove("animate__zoomIn"); 
            img2.classList.add("animate__zoomOut", "animate__zoomOutCustom");
            location.reload(); 
            setTimeout(() => {
                img2.style.display = "none"; 
                logindetail.style.display = "block"; 
                emailField.value = ""; 
                passwordField.value = ""; 
            }, 5000); 
        }, 2000);
        image.style.display = 'block';
        setTimeout(() => {
            image.style.top = '0';
            image.style.left = '0';
            image.style.transform = 'none'; 
            setTimeout(() => {
                image.style.display = 'none'; 
            }, 2000); 
        }, 2000);
    } 
    else {
        alert("Please enter both email and password.");
    }
});
window.onload = function() {
    const image = document.getElementById('myImage');
    image.style.display = 'block';
    setTimeout(() => {
        image.style.top = '0';
        image.style.left = '0';
        image.style.transform = 'none'; 
        setTimeout(() => {
            image.style.display = 'none'; 
        }, 2000); 
    }, 2000);

    
}



