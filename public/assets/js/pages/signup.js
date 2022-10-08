const alertBox = (msg, type) => {
  console.log(msg, type, "<<<<<<<<<<----------------------");
  const alert = document.querySelector("#alertBox");
  console.log(alertBox);
  alert.innerHTML = `		
  
  <div class="alert alert-${type} fade in">
      <button type="button class="close close-alert" 
          data-dismiss="alert" aria-hidden="true">
          ×
      </button>${msg}
  </div>
    
`;
};

// select inputs
const submitBtn = document.querySelector(".submit-btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const number = document.querySelector("#number");
console.log(
  name.value,
  email.value,
  password.value,
  number.value,
  confirmPassword.value
);

submitBtn.addEventListener("click", () => {
  if (name.value.length < 3) {
    alertBox("name should be at least 3 letters long", "danger");
  } else if (!email.value.length || !email.value.includes("@", ".")) {
    alertBox("enter your valid email", "danger");
  } else if (password.value.length < 6) {
    alertBox("password should be 6 letters long", "danger");
  } else if (!number.value.length) {
    alertBox("enter your number", "danger");
  } else if (!Number(number.value) || number.value.length < 10) {
    alertBox("enter your valid phone number");
  } else if (password.value !== confirmPassword.value) {
    alertBox("password does not match", "danger");
  } else {
    console.log(
      name.value,
      email.value,
      password.value,
      number.value,
      confirmPassword.value
    );
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      phone: number.value,
    };
    submit("http://localhost:3000/api/v1/user/signup", data);

    // showAlert("you have successfully signed up");
    // setTimeout(() => {
    //   window.location.href = "login.html";
    // }, 3000);
  }
});

const submit = async (url, data) => {
  try {
    const getResponse = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await (await getResponse).json();

    if (response.status === "success" || response.status === "Success") {
      alertBox("account successfully created", "success");
     window.location.href="index.html"

    }

    const { token } = response;
    console.log(
      token,
      "---------------------> i have the token",
      response,
      "<<--------------",
      response.status
    );
    localStorage.setItem("token", token);
  } catch (err) {
    alertBox(err.message, "danger");
    console.log(err);
  }
};
