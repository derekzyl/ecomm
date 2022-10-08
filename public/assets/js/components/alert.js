const alertBox = (message, type = "info") => {
  const body = document.querySelector("body");

  const alert = document.createElement("div");
  alert.classList.add("alert", "alert-dismissible", "alert-custom");

  alert.className = `alert alert-${type}`;
  alert.appendChild(document.createTextNode(message));
  body.appendChild(alert);
};




<div class="alert alert-primary" role="alert" >
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>