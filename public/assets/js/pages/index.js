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

const product = (/*imageUrl, details, price, id*/ data) => {
  let productContainer;
  const product = document.querySelector("#product");
  data.forEach((data) => {
    productContainer += `
    
        <div class="col-md-3 col-sm-4">
        <div class="single-new-arrival">
          <div class="single-new-arrival-bg">
            <img
              src= "${data.image}"
              alt="${data.details}"
            />
            <div class="single-new-arrival-bg-overlay"></div>
            <div class="sale bg-1">
              <p>sale</p>
            </div>
            <div class="new-arrival-cart">
              <p>
                <span class="lnr lnr-cart"></span>
                <a href="#">add <span>to </span> cart</a>
              </p>
              <p class="arrival-review pull-right">
                <span class="lnr lnr-heart addToFavourite" id="addToFavourite" data-key="${data.id}" ></span>
                <span class="lnr lnr-frame-expand"></span>
              </p>
            </div>
          </div>
          <h4><a href="#">${data.name}</a></h4>
          <p class="arrival-product-price">${data.price}</p>
        </div>
      </div>
        `;
  });

  product.innerHTML += productContainer;
};

const featured = (data) => {
  let featuredContainer;
  const feat = document.querySelector("#featured");
  data.slice(0, 4).forEach((data) => {
    // console.log(data);
    const h = data.image.split("=");

    const b = `${h[0]}=${h[1]}=${h[2]}=1600`;
    console.log(b);
    const rand = Math.round(Math.random() * 100);
    featuredContainer += `
        <div class="col-sm-3">
        <div class="single-feature">
          <img src="${b}" alt="${data.details}" />
          <div class="single-feature-txt text-center">
            <p>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <span class="spacial-feature-icon">
                <i class="fa fa-star"></i>
              </span>
              <span class="feature-review">(${rand} review)</span>
            </p>
            <h3>
              <a href="#">${data.name}</a>
            </h3>
            <h5>$${data.price}</h5>
          </div>
        </div>
      </div>
        `;
  });
  feat.innerHTML += featuredContainer;
};

const getProduct = () => {
  fetch("http://localhost:3000/api/v1/product")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      product(data.data);
      featured(data.data);
      favourite();
    })
    .catch((err) => console.log(err));
};

const favourite = () => {
  const fav = document.querySelectorAll("#addToFavourite");
  console.log(fav);
  fav.forEach((fav) => {
    fav.addEventListener("click", () => {
      // console.log(fav.dataset.key, "fav", fav[0], fav.id, fav.classList);
      const productId = fav.dataset.key;
      const userId = localStorage.getItem("token");
      const header = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userId}`,
      };
      const data = {
        productId,
        userId,
      };

      fetch("http://localhost:3000/api/v1/favourite", {
        method: "POST",
        headers: header,
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "that is coming from adding favorites");

          if (data.status === "fail") {
            alertBox("product already added to favourite", "warning");
          }
          if (data.status === "success") {
            alertBox("product added to favourite", "success");
          }
        })
        .catch((err) => console.log(err, "error message block for favourite"));
      alertBox("error", "danger");

      console.log(data);
    });
  });
};

getProduct();

// const alertBox = (message, type = "info") => {
//   const alert = document.querySelector(".alert-box");
//   alert.classList.add("alert", "alert-dismissible", "alert-custom");

//   alert.className = `alert alert-${type}`;
//   alert.appendChild(document.createTextNode(message));
// };

// const showAlert = (msg) => {
//   let alertBox = document.querySelector(".alert-box");
//   let alertMsg = document.querySelector(".alert-msg");
//   alertMsg.innerHTML = msg;
//   alertBox.classList.add("show");
//   setTimeout(() => {
//     alertBox.classList.remove("show");
//   }, 3000);
// };
