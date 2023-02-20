const form = document.querySelector('#register-form');
form.addEventListener('submit', registerUser);
function registerUser(event) {
  event.preventDefault(); 

  const form = event.target; 
  const formData = new FormData(form); 

  fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    window.location.href = "login";
  })
  .catch(error => {
    console.error('There was a problem registering the user:', error);
  });
}

const login_form = document.querySelector("#login-form")
login_form.addEventListener("submit", form_submit)
function form_submit(event) {
  event.preventDefault()
  const form = event.target;
  const formData = new FormData(form)

  fetch("http://localhost:3000/users/login", {
    method: 'POST',
    body: formData
  })
    .then(response =>
    {
      if (!response.ok)
      {
        console.log("Network response is not ok")
      }
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.log("an error has occurred during loging the use", err)
    })
}