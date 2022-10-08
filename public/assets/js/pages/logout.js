
/**
 * ALERT BOX
 * ****************************
 * @param {string || response query} msg 
 * @param {string} type
 * @return {innerHTML} 
 */
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
  const submitBtn = document.querySelector(".logout-btn");
  
  
  submitBtn.addEventListener("click", () => {
    alert("successfully signed out, come back again to shop with us 😎")
      alertBox("successfully signed out, come back again to shop with us 😎", "success");
    localStorage.clear() 
     window.location.href="index.html"
  });
  
  