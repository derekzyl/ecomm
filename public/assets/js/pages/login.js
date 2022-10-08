// select inputs

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

const loginButton = document.querySelector(".submit-btn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

console.log(email.value, password.value);

loginButton.addEventListener("click", () => {
  if (!email.value.length || !email.value.includes("@", ".")) {
    showAlert("enter your valid email");
  } else if (password.value.length < 6) {
    showAlert("password should be 6 letters long");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    submit("http://localhost:3000/api/v1/user/login", data);
      alert('logged in successfull')
      setTimeout(()=>{
        window.location.href="index.html"

      }, 2000)

    // showAlert("you have successfully signed up");
    // setTimeout(() => {
    //   window.location.href = "login.html";
    // }, 3000);
  }
});

const showAlert = (msg) => {
  let alertBox = document.querySelector(".alert-box");
  let alertMsg = document.querySelector(".alert-msg");
  alertMsg.innerHTML = msg;
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
};

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
    const { token } = response;
    localStorage.setItem("token", token);
    console.log(response);
    console.log(response.message, "<-------------------- this is response dot message")
    let a;
    if(response.message){

     a = response.message.split(" ")[0].toLowerCase();
    }
    console.log(a, "------------------> we de value scope");

    if (a === "incorrect") {
      console.log("start <<<---------------");
      alertBox("email or password is incorrect", "danger");
    } else {
      alertBox(response.status, "success");
     window.location.href="index.html"

    }
  } catch (err) {
    alertBox(err.message, "error");
    console.log(err);
  }
};
