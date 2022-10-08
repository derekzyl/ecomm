async function header() {
  let nameData = "";
  const isLoggedIn = localStorage.getItem("token");
  const header = document.querySelector(".header");
  if (isLoggedIn) {
    const head = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${isLoggedIn}`,
    };

    fetch("http://localhost:3000/api/v1/user/get-me", {
      method: "GET",
      headers: head,
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        this.nameData = data.data.name.split(" ")[0];
        return this.nameData;

        // const name = document.createElement("span");
        // name.innerHTML = `${nameData}`;
        // header.appendChild(name);
      })
      .catch((err) => console.log(err));

    //     const data = await gete.json();
    //     nameData = data.data.name.split(" ")[0];
    //     console.log(data, "gete data");
  }

  const logout = document.querySelector(".logout");
  console.log(
    logout,
    "we have reached the logout of inner html",
    this.nameData,
    "name data"
  );

  header.innerHTML = `
    <!--welcome-hero start -->
    <header id="header" class="header">

        <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
            <!--/.carousel-indicator -->
             <ol class="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" class="active"><span class="small-circle"></span></li>
                <li data-target="#header-carousel" data-slide-to="1"><span class="small-circle"></span></li>
                <li data-target="#header-carousel" data-slide-to="2"><span class="small-circle"></span></li>
            </ol><!-- /ol-->
        
            <div class="carousel-inner" role="listbox">
                <!-- .item -->
                <div class="item active">
                    <div class="single-slide-item slide1">
                        <div class="container">
                            <div class="welcome-hero-content">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div class="single-welcome-hero">
                                            <div class="welcome-hero-txt">
                                                <h4>great design collection</h4>
                                                <h2>iphone</h2>
                                                <p>
                                                6.1-inch Super Retina XDR display
                                                Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
                                                Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
                                                12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
                                                A15 Bionic chip for lightning-fast performance
                                                Main Camare - (12MP + 12MP ) 
                                                Selfie Camera - 12MP
                                                4GB RAM + 128GB ROM                                             
                                                </p>
                                                <div class="packages-price">
                                                    <p>
                                                        $ 399.00
                                                        <del>$ 499.00</del>
                                                    </p>
                                                </div>
                                                <button class="btn-cart welcome-add-cart" onclick="window.location.href='#'">
                                                    <span class="lnr lnr-plus-circle"></span>
                                                    add <span>to</span> cart
                                                </button>
                                                <button class="btn-cart welcome-add-cart welcome-more-info" onclick="window.location.href='#'">
                                                    more info
                                                </button>
                                            </div><!--/.welcome-hero-txt-->
                                        </div><!--/.single-welcome-hero-->
                                    </div><!--/.col-->
                                    <div class="col-sm-5">
                                        <div class="single-welcome-hero">
                                            <div class="welcome-hero-img">
                                                <img https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="slider image">
                                            </div><!--/.welcome-hero-txt-->
                                        </div><!--/.single-welcome-hero-->
                                    </div><!--/.col-->
                                </div><!--/.row-->
                            </div><!--/.welcome-hero-content-->
                        </div><!-- /.container-->
                    </div><!-- /.single-slide-item-->

                </div><!-- /.item .active-->

                <div class="item">
                    <div class="single-slide-item slide2">
                        <div class="container">
                            <div class="welcome-hero-content">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div class="single-welcome-hero">
                                            <div class="welcome-hero-txt">
                                                <h4>great design collection</h4>
                                                <h2>laptop</h2>
                                                <p>
                                                he iMac's processing power has been upgraded with an 8th Gen 3.0 GHz Intel Core i5 6-Core processor as well as 8GB of DDR4 RAM. Graphics are powered by a dedicated AMD Radeon Pro 560X graphics card, and for storage, there it's equipped with a 256GB SSD.

                                                
                                                </p>
                                                <div class="packages-price">
                                                    <p>
                                                        $ 199.00
                                                        <del>$ 299.00</del>
                                                    </p>
                                                </div>
                                                <button class="btn-cart welcome-add-cart" onclick="window.location.href='#'">
                                                    <span class="lnr lnr-plus-circle"></span>
                                                    add <span>to</span> cart
                                                </button>
                                                <button class="btn-cart welcome-add-cart welcome-more-info" onclick="window.location.href='#'">
                                                    more info
                                                </button>
                                            </div><!--/.welcome-hero-txt-->
                                        </div><!--/.single-welcome-hero-->
                                    </div><!--/.col-->
                                    <div class="col-sm-5">
                                        <div class="single-welcome-hero">
                                            <div class="welcome-hero-img">
                                                <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600" alt="slider image">
                                            </div><!--/.welcome-hero-txt-->
                                        </div><!--/.single-welcome-hero-->
                                    </div><!--/.col-->
                                </div><!--/.row-->
                            </div><!--/.welcome-hero-content-->
                        </div><!-- /.container-->
                    </div><!-- /.single-slide-item-->

                </div><!-- /.item .active-->

                <div class="item">
                    <div class="single-slide-item slide3">
                        <div class="container">
                            <div class="welcome-hero-content">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div class="single-welcome-hero">
                                            <div class="welcome-hero-txt">
                                                <h4>great design collection</h4>
                                                <h2>camera</h2>
                                                <p>
                                                The 1100D is aimed primarily at first-time DSLR buyers on a budget, and at compact users looking to upgrade to a DSLR they can expand their knowledge of photography with. As such, you’d expect ease-of-use to figure quite highly, along with the ability to deliver the same high image quality that’s come to be associated with Canon DSLRs. However, given the price, it’s also reasonable to expect the omission of some of the more advanced features found on more expensive DSLRs.

                                                Indeed, with the 1100D this is pretty much what you get. As a direct replacement for the 1000D that was launched back in 2008, the 1100D enjoys several notable upgrades over its predecessor, while some of the features found on recent Canon models located higher up the range are unsurprisingly absent too.
                                                </p>
                                                <div class="packages-price">
                                                    <p>
                                                        $ 299.00
                                                        <del>$ 399.00</del>
                                                    </p>
                                                </div>
                                                <button class="btn-cart welcome-add-cart" onclick="window.location.href='#'">
                                                    <span class="lnr lnr-plus-circle"></span>
                                                    add <span>to</span> cart
                                                </button>
                                                <button class="btn-cart welcome-add-cart welcome-more-info" onclick="window.location.href='#'">
                                                    more info
                                                </button>
                                            </div><!--/.welcome-hero-txt-->
                                        </div><!--/.single-welcome-hero-->
                                    </div><!--/.col-->
                                    <div class="col-sm-5">
                                        <div class="single-welcome-hero">
                                            <div class="welcome-hero-img">
                                                <img src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="slider image">
                                            </div><!--/.welcome-hero-txt-->
                                        </div><!--/.single-welcome-hero-->
                                    </div><!--/.col-->
                                </div><!--/.row-->
                            </div><!--/.welcome-hero-content-->
                        </div><!-- /.container-->
                    </div><!-- /.single-slide-item-->
                    
                </div><!-- /.item .active-->
            </div><!-- /.carousel-inner-->

        </div><!--/#header-carousel-->

        <!-- top-area Start -->
        <div class="top-area">
            <div class="header-area">
            <div id="alertBox"></div>
                <!-- Start Navigation -->
                <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">


                    <div class="container">            
                        <!-- Start Atribute Navigation -->
                        <div class="attr-nav">
                            <ul>
                            


                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
                            ${
                              this.nameData
                                ? `hello ${this.nameData}`
                                : `<span class="lnr lnr-user"></span>`
                            }
                                    
                                    </a>
                                    <ul class="dropdown-menu user-list s-cate">
                                      ${
                                        !isLoggedIn
                                          ? `<li class="single-cart-list">
                                      <a href="#"><span class="lnr lnr-user" ></span></a>
                                      <div class="cart-list-txt">
                                          <h6><a href="login.html">login</a></h6>
                                          
                                      </div><!--/.cart-list-txt-->
                                  
                                  </li>
                                  <li class="single-cart-list">
                                      <a href="#"><span class="lnr lnr-user" ></span></a>
                                      <div class="cart-list-txt">
                                          <h6><a href="signup.html">signup</a></h6>
                                          
                                      </div>
                                  
                                  </li>`
                                          : `
      <li class="single-cart-list">

      <div class="cart-list-txt">
          <h6>hi user</h6>
          
      </div>
  
  </li>                      
      
      <li class="single-cart-list">
                                  <a href="#"><span class="lnr lnr-user" ></span></a>
                                  <div class="cart-list-txt">
                                      <h6 class ="logout"><a href="logout.html" >log out</a></h6>
                                      
                                  </div>
                              
                              </li>
                              
                              `
                                      }   
                                    </ul>
                                </li>







                                <li class="nav-setting ">
                            
                                    <a href="favourite.html"><span class="lnr lnr-heart" data-hover="favourite"></span>hi</a>
                                </li>

                                <li class="nav-setting">
                                <a href="addProduct.html"><span class="lnr lnr-book"  data-hover="add products"></span></a>
                            </li>

                            </ul>
                        </div><!--/.attr-nav-->
                        <!-- End Atribute Navigation -->

                        <!-- Start Header Navigation -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i class="fa fa-bars"></i>
                            </button>
                            <a class="navbar-brand" href="index.html">electro<span>nics</span>.</a>

                        </div><!--/.navbar-header-->
                        <!-- End Header Navigation -->

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul class="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                <li class=" scroll active"><a href="index.html">home</a></li>
                                <li class="scroll"><a href="#new-arrivals">products</a></li>
                               
                            </ul><!--/.nav -->
                        </div><!-- /.navbar-collapse -->
                    </div><!--/.container-->
                </nav><!--/nav-->
                <!-- End Navigation -->
            </div><!--/.header-area-->
            <div class="clearfix"></div>

        </div><!-- /.top-area-->
        <!-- top-area End -->

    `;
}

const getUser = () => {
  const isLoggedIn = localStorage.getItem("token");
  const head = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${isLoggedIn}`,
  };

  fetch("http://localhost:3000/api/v1/user/get-me", {
    method: "GET",
    headers: head,
  })
    .then((res) => res.json())
    .then((data) => {
      const nameData = data.data.name.split(" ")[0];
    })
    .catch((err) => console.log(err));
};
getUser();
header();
