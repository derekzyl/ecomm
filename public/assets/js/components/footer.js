const footer = () => {
  const foot = document.querySelector("footer");
  foot.innerHTML = `		
  <div class="container">
  <div class="hm-footer-copyright text-center">
      <div class="footer-social">
          <a href="#"><i class="fa fa-facebook"></i></a>	
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-pinterest"></i></a>
          <a href="#"><i class="fa fa-behance"></i></a>	
      </div>
      <p>
          &copy;copyright. designed and developed by <a href="#">me</a>
      </p><!--/p-->
  </div><!--/.text-center-->
</div><!--/.container-->

<div id="scroll-Top">
  <div class="return-to-top">
      <i class="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
  </div>
  
</div>
    
`;
};
footer();
