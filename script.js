const logindetail = document.querySelector(".logindetail");
const Signdetail = document.querySelector(".Signdetail");
const signup = document.querySelector(".Signup");
const signin = document.querySelector(".Signin");
const loginButton = document.querySelector(".loginbutton");
const signupButton = document.querySelector(".signupbutton");

signup.addEventListener('click', function(event) {
    event.preventDefault();
    logindetail.style.display = 'none';
    Signdetail.style.display = 'block';
});

signin.addEventListener('click', function(event) {
    event.preventDefault();
    Signdetail.style.display = 'none';
    logindetail.style.display = 'block';
});

signupButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('.namesub').value;
    const email = document.querySelector('.emailsub').value;
    const password = document.querySelector('.passwordsub').value;

    if (!name || !email || !password) {
        alert("Please fill all fields.");
        return;
    }

    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Account created successfully!');

    Signdetail.style.display = 'none';
    logindetail.style.display = 'block';
});

loginButton.addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert(`Welcome ${storedUser.name}! Redirecting to Admin Page...`);
        window.location.href = "admin.html"; 
    } else {
        alert("Invalid email or password.");
        document.querySelector('.password').value = ''; 
    }
});
