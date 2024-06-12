// -------------------------------  get base domain ----------------------------------
function getBaseDomain() {
  // Get the current URL
  var url = window.location.href;
  url = url.replace(/^(https?:\/\/)?(www\.)?/, "");
  return url.split("/")[0];
}

var BASE_DOMAIN = getBaseDomain();
var PROTOCOL = "http://";

BASE_DOMAIN = PROTOCOL + BASE_DOMAIN;

var BASE_API_URL = "http://183.82.144.188";

// ------------------------------

// _____________________________ Set Rem Size for resizing __________________________________
var screenWidth = screen.availWidth - (window.outerWidth - window.innerWidth);
var screenHeight =
  screen.availHeight - (window.outerHeight - window.innerHeight);
const handleResize = () => {
  // Set the min-width and min-height of the body element to the screen width and heigh
  document.body.style.width = screenWidth + "px";
  document.body.style.height = screenHeight + "px";
  document.documentElement.style.fontSize = String(screenWidth / 23) + "%";
};

handleResize();

window.addEventListener("resize", () => {
  handleResize();
  handleDetectScreen();
});

// --------------------------------- Adding recomended JS files -------------------------------------------------------------

var script = document.createElement("script");
script.src = `${BASE_DOMAIN}/static/webapp/w/js/cdn/lottie.js`;
document.body.appendChild(script);

var script = document.createElement("script");
script.src = `${BASE_DOMAIN}/static/webapp/js/platform.js`;
document.body.appendChild(script);

// -------------------------------- Setting up navigation based on user login status --------------------------------------

// Check if localStorage contains access token

const navContainer = document.getElementById("navigations");

if (navContainer) {
  const currentUrl = window.location.pathname;
  if (
    !currentUrl.includes("/register") &&
    !currentUrl.includes("/blog") &&
    !currentUrl.includes("/termsandconditions")
  ) {
    if (localStorage.getItem("access")) {
      navContainer.innerHTML += `<a class="profile" href="./dashboard"
      >My Account&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-user"></i
    ></a>`;
    } else {
      navContainer.innerHTML += `<a href="./register" class="button"
                                >Get Started&nbsp;&nbsp;&nbsp;&nbsp;<i
                                  class="fa-solid fa-chevron-right"
                                ></i
                              ></a>`;
    }
  }
}

//  --------------- LOADING -----------------------

var mainWindow = document.getElementsByClassName("window")[0];

let LOADING = {
  _state: true,
  set state(value) {
    var loadingContainer = document.getElementById("loadingContainer");
    this._state = value;
    //   ON CHANGE STATE CALL
    if (value == true) {
      loadingContainer.querySelector(
        "#loadBox"
      ).innerHTML = `<svg width="1548" height="100%" viewBox="0 0 1548 1548" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="190.667" width="1370" height="1370" rx="347" transform="rotate(8 190.667 0)" fill="black" fill-opacity="0.3" class="svg-elem-1"></rect>
      <rect x="144.998" y="136" width="1258" height="1258" rx="350" fill="black" class="svg-elem-2"></rect>
      </svg>
      <lottie-player src="${BASE_DOMAIN}/static/webapp/assets/lottie/lottie-balls_loading_animation.json" background="transparent" speed="1" direction="1" mode="normal" loop autoplay></lottie-player>
        `;
      loadingContainer.style.display = "flex";
    } else if (value == false) {
      loadingContainer.querySelector(
        "#loadBox"
      ).innerHTML = `<svg width="1548" height="100%" viewBox="0 0 1548 1548" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="190.667" width="1370" height="1370" rx="347" transform="rotate(8 190.667 0)" fill="black" fill-opacity="0.3" class="svg-elem-1"></rect>
            <rect x="144.998" y="136" width="1258" height="1258" rx="350" fill="black" class="svg-elem-2"></rect><circle cx="773.5" cy="773.5" r="369.5" stroke="white" stroke-width="18" class="svg-elem-3"></circle>
            <circle cx="910.5" cy="606.5" r="66.5" stroke="white" stroke-width="12" class="svg-elem-4"></circle>
            <path d="M616.809 1041.12L767.616 766.176L945.088 1035.39C828.786 1151.54 674.292 1103.09 616.809 1041.12Z" stroke="white" stroke-width="12" class="svg-elem-5"></path>
            </svg>`;
      setTimeout(() => {
        loadingContainer.style.display = "none";
      }, 1300);
    }
  },
  get state() {
    return this._state;
  },
};

window.addEventListener("DOMContentLoaded", () => {
  mainWindow.insertAdjacentHTML(
    "afterbegin",
    `<div id="loadingContainer">
  <div id="loadBox">
  <svg width="1548" height="100%" viewBox="0 0 1548 1548" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="190.667" width="1370" height="1370" rx="347" transform="rotate(8 190.667 0)" fill="black" fill-opacity="0.3" class="svg-elem-1"></rect>
  <rect x="144.998" y="136" width="1258" height="1258" rx="350" fill="black" class="svg-elem-2"></rect>
  </svg>
  <lottie-player src="${BASE_DOMAIN}/static/webapp/assets/lottie/lottie-balls_loading_animation.json" background="transparent" speed="1" direction="1" mode="normal" loop autoplay></lottie-player>
    </div>
    </div>`
  );
});

window.addEventListener("load", () => {
  LOADING.state = false;
});

// ---------------------------------- check if the device is present or not in query parm or else reload ---------------

// Function to get query parameter by name from URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to reload the page with updated query parameter
function reloadPageWithQueryParam(name, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(name, value);
  window.location.href = url.toString();
}

var device = null;

// Check if the device type is present in local storage or cache
const cachedDevice =
  localStorage.getItem("d_frame") || sessionStorage.getItem("d_frame");

if (cachedDevice) {
  device = cachedDevice;
}

// Check if the 'd' query parameter exists
const dQueryParam = getQueryParam("d");

const handleDetectScreen = () => {
  // using platform OS cdn

  // let os = platform.os.family;
  // os = os.toLowerCase();
  // if (os.indexOf("android") !== -1) {
  //   device = "m";
  // } else if (os.indexOf("ios") !== -1) {
  //   device = "m";
  // } else {
  //   device = "w";
  // }

  // using width
  const width = screen.availWidth;
  if (width <= 768) {
    device = "m";
  } else {
    device = "w";
  }

  if (!(dQueryParam == device)) {
    reloadPageWithQueryParam("d", device);
  } else {
    var links = document.querySelectorAll("a");
    links.forEach((anchor) => {
      if (anchor.href.toString().indexOf(BASE_DOMAIN) != -1) {
        var link = anchor.href.toString();
        if (link.indexOf("?") == -1) {
          link += "?d=" + device;
        } else {
          if (link.indexOf("d=") == -1) {
            link += "&d=" + device;
          }
        }
        anchor.href = link;
      }
    });

    setTimeout(() => {
      handleResize();
    }, 500);
  }
};

// If 'd' query parameter doesn't exist, set it to 1 and reload the page
window.addEventListener("load", () => {
  handleDetectScreen();
});

// ------------------- dropdown ---------------------

// ------------------- dropdown ---------------------

var filterBars = document.querySelectorAll(".filterBar");
var searchBars = document.querySelectorAll(".searchBar");

window.addEventListener("DOMContentLoaded", () => {
  filterBars.forEach((filterBar) => {
    filterBar.addEventListener("click", (event) => {
      event.stopPropagation();
      filterBar.classList.toggle("filterBarActive");
      const searchBar = filterBar.getElementsByTagName("input")[0];
      if (searchBar) {
        searchBar.focus();
      }
    });

    filterBar.querySelectorAll(".listItem").forEach((item) => {
      item.addEventListener("click", (event) => {
        inputHeading = item.parentElement.parentElement.querySelector("#input");
        inputHeading.innerText = item.innerText;
        // Set the value attribute of the inputHeading to the value attribute of the selected listItem
        inputHeading.setAttribute("value", item.getAttribute("value"));
      });
    });
  });

  searchBars.forEach((searchBar) => {
    searchBar.addEventListener("input", () => {
      filterDropdown(searchBar);
    });
  });

  searchBars.forEach((searchBar) => {
    searchBar.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
});

function filterDropdown(searchBar) {
  var input, filter, dropdown, items, item, i, txtValue;
  dropdown = searchBar.parentElement;
  items = dropdown.getElementsByClassName("listItem");
  if (searchBar.value) {
    filter = searchBar.value.toUpperCase();
    for (i = 0; i < items.length; i++) {
      item = items[i];
      txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  } else {
    for (i = 0; i < items.length; i++) {
      item = items[i];
      item.style.display = "";
    }
  }
}

// --------------- closing all dropdowns on clicking --------------------------------

document.addEventListener("click", () => {
  const OpenDropDowns = document.querySelectorAll(".filterBarActive");
  OpenDropDowns.forEach((dropDown) => {
    dropDown.classList.remove("filterBarActive");
  });
});

// ---------------- popping notification -----------------

function popNotification(
  heading,
  description,
  waitingTimeInSeconds,
  status = null,
  buttonText = null,
  link = null
) {
  var statusClass = "";

  if (status == "FAIL") {
    statusClass = "notificationDanger";
  } else if (status == "SUCCESS") {
    statusClass = "notificationSuccess";
  } else if (status == "BRANDING") {
    statusClass = "notificationBranding";
  }

  var notificationId = "notification_" + Date.now();

  var htmlContent = `<div id=${notificationId} class="popupNotificationContainer ${statusClass}">
  <p class="heading">${heading}</p>
  <p class="discription">
    ${description}
  </p>
  <div onclick="this.parentElement.outerHTML = ''" class="closeNotification">
    <i class="fa-solid fa-xmark"></i>
  </div>

  ${link ? `<a href="${link}">${buttonText}</a>` : ""}

</div>`;

  document
    .querySelector(".window")
    .insertAdjacentHTML("beforeend", htmlContent);

  setTimeout(function () {
    var elementToRemove = document.getElementById(notificationId);
    if (elementToRemove) {
      elementToRemove.outerHTML = "";
    }
  }, waitingTimeInSeconds * 1000);
}

// ------------------ set button loading -----------------

function handleButtonLoading(
  element,
  state,
  buttonMode = "DARK",
  content = ""
) {
  if (state) {
    element.style.pointerEvents = "none";
    if (buttonMode == "DARK") {
      element.innerHTML = `
      <img
      style="height: 80%"
      src="${BASE_DOMAIN}/static/webapp/assets/common/loading_dark.gif"
      />
      `;
    } else {
      element.innerHTML = `
      <img
      style="height: 80%"
      src="${BASE_DOMAIN}/static/webapp/assets/common/loading_light.gif"
      />
      `;
    }
  } else {
    element.innerHTML = content;
    element.style.pointerEvents = "auto";
  }
}

// --------------------------- collapsable ------------------------------

window.addEventListener("DOMContentLoaded", () => {
  var colls = document.querySelectorAll(".collapsible");

  colls.forEach((coll) => {
    coll.addEventListener("click", function () {
      // close all opened
      colls.forEach((element) => {
        if (element != coll) {
          element.classList.remove("active");
          element.nextElementSibling.style.maxHeight = null;
        }
      });

      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
