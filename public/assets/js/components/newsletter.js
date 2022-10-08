const newsletter = () => {
  const news = document.querySelector(".newsletter");
  news.innerHTML = `
    <div class="container">
    <div class="hm-footer-details">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="hm-footer-widget">
            <div class="hm-foot-title">
              <h4>information</h4>
            </div>
            <!--/.hm-foot-title-->
            <div class="hm-foot-menu">
              <ul>
                <li><a href="#">about us</a></li>
                <!--/li-->
                <li><a href="#">contact us</a></li>
                <!--/li-->
                <li><a href="#">news</a></li>
                <!--/li-->
                <li><a href="#">store</a></li>
                <!--/li-->
              </ul>
              <!--/ul-->
            </div>
            <!--/.hm-foot-menu-->
          </div>
          <!--/.hm-footer-widget-->
        </div>
        <!--/.col-->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="hm-footer-widget">
            <div class="hm-foot-title">
              <h4>collections</h4>
            </div>
            <!--/.hm-foot-title-->
            <div class="hm-foot-menu">
              <ul>
                <li><a href="#">phones</a></li>
                <!--/li-->
                <li><a href="#">monitors</a></li>
                <!--/li-->
                <li><a href="#">camera</a></li>
                <!--/li-->
                <li><a href="#">ovens</a></li>
                <!--/li-->
                <li><a href="#">air conditioners</a></li>
                <!--/li-->
              </ul>
              <!--/ul-->
            </div>
            <!--/.hm-foot-menu-->
          </div>
          <!--/.hm-footer-widget-->
        </div>
        <!--/.col-->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="hm-footer-widget">
            <div class="hm-foot-title">
              <h4>my accounts</h4>
            </div>
            <!--/.hm-foot-title-->
            <div class="hm-foot-menu">
              <ul>
                <li><a href="#">my account</a></li>
                <!--/li-->
                <li><a href="#">wishlist</a></li>
                <!--/li-->
                <li><a href="#">Community</a></li>
                <!--/li-->
                <li><a href="#">order history</a></li>
                <!--/li-->
                <li><a href="#">my cart</a></li>
                <!--/li-->
              </ul>
              <!--/ul-->
            </div>
            <!--/.hm-foot-menu-->
          </div>
          <!--/.hm-footer-widget-->
        </div>
      </div>
      <!--/.row-->
    </div>
    <!--/.hm-footer-details-->
  </div>`;
};
newsletter();
