const alertBox = (msg, type) => {
  console.log(msg, type, "<<<<<<<< inside favourite<<----------------------");
  const alert = document.querySelector("#alertBox");
  console.log(alertBox);
  alert.innerHTML = `		
    
    <div class="alert alert-${type} fade in  fixed-top">
        <button type="button class="close close-alert " 
            data-dismiss="alert" aria-hidden="true">
            ×
        </button>${msg}
    </div>
      
  `;
};

const favour = (/*imageUrl, details, price, id*/ data) => {
  let favouriteContainer;
  const favourite = document.querySelector("#product");
  data.forEach((come) => {
    const data = come.product;
    console.log(come.id);
    console.log(data);
    favouriteContainer += `
      
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
                  <span class="lnr lnr-trash addToFavourite" id="removeFromFavourite" data-key="${come.id}" ></span>
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

  data.length
    ? (favourite.innerHTML += favouriteContainer)
    : (favourite.innerHTML += `<h3 class="text-center">No Favourite Product</h3>`);
};

const removeFavourite = () => {
  console.log("remove");
  const remover = document.querySelectorAll("#removeFromFavourite");
  console.log(remover);
  remover.forEach((remover) => {
    remover.addEventListener("click", () => {
      // console.log(fav.dataset.key, "fav", fav[0], fav.id, fav.classList);
      const productId = remover.dataset.key;
      const userId = localStorage.getItem("token");
      console.log(
        productId,
        "<<<<----------------------------------------------->>>>>>>>> ",
        userId
      );

      const header = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userId}`,
      };
      fetch(`http://localhost:3000/api/v1/favourite/${productId}`, {
        method: "DELETE",
        headers: header,
      });
      alertBox("Product Removed From Favourite", "success");
      setTimeout(() => {
        window.location.reload(true);
      }, 500);
    });
  });
};

const getFavorite = () => {
  const userId = localStorage.getItem("token");
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userId}`,
  };

  fetch("http://localhost:3000/api/v1/favourite/favorite", {
    method: "GET",
    headers: header,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      favour(data.data);
      removeFavourite();
    })
    .catch((err) => console.log(err));
};

getFavorite();
