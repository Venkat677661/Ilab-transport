 

function header() {
    
    var headerImage = document.getElementById("header-image");
    headerImage.addEventListener("click", function() {
    
    });
  }
  
  /* Navigation bar */
  
  function navbar(navbar) {
    var navbarItems = document.querySelectorAll(".navbar li");
    for (var i = 0; i < navbarItems.length; i++) {
      navbarItems[i].addEventListener("click", function() {
        var sectionId = this.dataset.sectionId;
        var section = document.getElementById(sectionId);
        section.scrollIntoView();
      });
    }
  }
  
  /* Main content area */
  
  function mainContentArea() {
     
    var contactUsButton = document.getElementById("contact-us-button");
    contactUsButton.addEventListener("click", function() {
     
    });
  }
  
  /* Footer */
  
  function footer() {
    
    var copyrightText = document.getElementById("copyright");
    copyrightText.addEventListener("click", function() {
      window.open("");
    });
  }
  
  /* Flash ad */
  
  function flashAd() {
    // This function creates a new flash ad and adds it to the page.
  
    var flashAd = document.createElement("div");
    flashAd.className = "flash-ad";
    var flashAdImg = document.createElement("img");
    flashAdImg.src = "";
    flashAd.appendChild(flashAdImg);
    document.getElementById("flash-ad-container").appendChild(flashAd);
  }
  
  // This function calls all of the other functions.
  
  window.onload = function() {
    header();
    navbar();
    mainContentArea();
    footer();
    flashAd();
  };