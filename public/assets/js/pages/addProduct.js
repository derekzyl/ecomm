const alertBox = (msg, type) => {
  console.log(msg, "<<<<<<<<<<----------------------");
  const alert = document.querySelector("#alertBox");

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
const details = document.querySelector("#details");
const price = document.querySelector("#price");
const image = document.querySelector("#image");
const quantity = document.querySelector("#quantity");
const adminPass = document.querySelector("#adminPass");

submitBtn.addEventListener("click", () => {
  console.log("hello tokenizer ", localStorage.getItem("token"));

  if (
    !adminPass.value ||
    !name.value ||
    !details.value ||
    !price.value ||
    !image.value ||
    !quantity.value
  ) {
    alertBox("all fields are required", "danger");
  } else if (
    localStorage.getItem("token") &&
    (localStorage.getItem("token") === "undefined" ||
      localStorage.getItem("token") === null)
  ) {
    alertBox("please login to add product", "danger");
  } else {
    console.log(
      name.value,
      details.value,
      price.value,
      image.value,
      quantity.value,
      adminPass.value
    );
    {
    }
    const data = {
      name: name.value,
      details: details.value,
      price: price.value,
      image: image.value,
      quantity: quantity.value,
      adminPass: adminPass.value,
    };
    submit("http://localhost:3000/api/v1/product", data);

    // showAlert("you have successfully signed up");
    // setTimeout(() => {
    //   window.location.href = "login.html";
    // }, 3000);
  }
});

const submit = async (url, data) => {
  try {
    const userId = localStorage.getItem("token");
    console.log(userId, "this is the user token");
    const getResponse = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userId}`,
      },
      body: JSON.stringify(data),
    });
    const response = await (await getResponse).json();

    if (response.status === "success" || response.status === "Success") {
      alertBox("product successfully created", "success");
      window.location.reload();
    } else if (response.message === "jwt malformed") {
      alertBox(" oops you are not logged in 🤭🤭🤭", "danger");
      window.location.href = "login.html";
    } else {
      alertBox(response.message, "danger");
    }

    console.log(response);
  } catch (err) {
    alertBox(err.message, "danger");
    alert(err.message);
    console.log(err, "-------------------------------> error message");
  }
};
