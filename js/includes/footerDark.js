const footer = `<div class="footerUpperContainer">
<p class="heading">Hey Dude!! Lets Scan and Download.</p>
<p class="description">
Framespik's QR face scan is top-notch, leaving comedians envious! Smile for your images, delivered with QR flair and a touch of comedy
</p>
<img src="${BASE_DOMAIN}/static/webapp/w/assets/screens/qrCode.png" alt="" />
</div>
<div class="footerBottomContainer">
<a href="${BASE_DOMAIN}/">
<div class="footerLogo">
  <img src="${BASE_DOMAIN}/static/webapp/assets/branding/logo_light.svg" alt="" />
</div>
</a>

<div class="footerBox">
  <div class="footerTextBox">
    <p class="footerHeading">About Framespik</p>
    <a href="${BASE_DOMAIN}/">Home</a>
    <a href="${BASE_DOMAIN}/about">About</a>
    <a href="${BASE_DOMAIN}/software">Software</a>
    <a href="${BASE_DOMAIN}/faq?target=learningschool">Learning School</a>
    <a href="${BASE_DOMAIN}/investor-relation">Investor Relation</a>
    <a href="${BASE_DOMAIN}/download">Download</a>
    </div>
    
    <div class="footerTextBox">
    <p class="footerHeading">Info</p>
    <a href="${BASE_DOMAIN}/faq">FAQ</a>
    <a href="${BASE_DOMAIN}/blog">Blogs</a>
    <a href="${BASE_DOMAIN}/contact">Contact</a>
    <a href="${BASE_DOMAIN}/features">Features</a>
    
   
  </div>

  <div class="footerTextBox">
    <p class="footerHeading">Product</p>
    <a href="${BASE_DOMAIN}/termsandconditions">Terms & conditions</a>
    <a href="${BASE_DOMAIN}/termsandconditions">Privacy</a>

  </div>
  <div class="footerTextBox">
    <p class="footerHeading">We Are For</p>
    <a href="${BASE_DOMAIN}/features?target=photographers">Photographers</a>
    <a href="${BASE_DOMAIN}/features?target=eventorganizers">Event Organisers</a>
  </div>
</div>
<div class="socialMediaBox">
  <div class="socialMediaIcons">
    <a href="https://in.pinterest.com/framespik/"><i class="fa-brands fa-pinterest"></i></a>
    <a href="https://twitter.com/framespik"><i class="fa-brands fa-x-twitter"></i></a>
    <a href="https://www.youtube.com/channel/UCmJthyiq12MrNJM9_MChI-g"><i class="fa-brands fa-youtube"></i></a>
    <a href="https://in.linkedin.com/company/framespik"><i class="fa-brands fa-linkedin"></i></a>
    <a href="https://www.instagram.com/framespik/"><i class="fa-brands fa-instagram"></i></a>
  </div>
  <div class="loactionBox">
 
  <a style="color:#fff; font-size:1.5rem; margin-right:8%" href="mailto:team@framespik.com">team@framespik.com</a
  >
    
    <a href="https://maps.app.goo.gl/UCBWRGTLPvzKAF256"><i class="fa-solid fa-location-dot"></i></a
    >&nbsp;
    <p class="locationText">Hydrabad</p>
    

  </div>
</div>
<div class="footerDownloadBox">
  <img src="${BASE_DOMAIN}/static/webapp/assets/common/playpStoreBadge.svg" alt="" />
  <img src="${BASE_DOMAIN}/static/webapp/assets/common/appStoreBadge.svg" alt="" />
</div>

<div class="footerConditionBox">
  <div class="copyRight">
    <p>&copy; 2024 Lakve Technologies Pvt Ltd.</p>
  </div>
  <div class="termsAndConditions">
    <a href="${BASE_DOMAIN}/termsandconditions">Privacy</a>
    <a href="${BASE_DOMAIN}/software">Software</a>

  </div>
</div>
</div>`;

window.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footerContainer");
  footerContainer.innerHTML = footer;
});
