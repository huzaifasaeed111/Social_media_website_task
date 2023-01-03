
var button = document.querySelector('.login-account');
var username=document.getElementById('userName');
var password=document.getElementById('password');
async function Login(e) {
  e.preventDefault();
  // fetch API of Login Here
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      username: `${username.value}`,
      password: `${password.value}`,
      // expiresInMins: 60, // optional
    }),
  });
    const objs = await response.json();
    console.log(username.value,password.value);
    if(response.ok){
      localStorage.setItem('token',objs.token);
      localStorage.setItem("username",objs.username);
      localStorage.setItem("password",objs.password);
      window.location.href="index.html";
    }
    else{
      alert("invalid Credentials");
    }
}

button.addEventListener('click',Login);

