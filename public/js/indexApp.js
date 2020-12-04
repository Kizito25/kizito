// Console.log() shorthand
const cl = (value) => console.log(value);

// Lazy Loading Images

// Loading all Images on the webpage

const images = document.getElementsByTagName(["img"]);

// Convert to array

const imageArray = Array.prototype.slice.call(images);

imageArray.slice(1).map((image) => {
  // Adding Progressivley Class Attributes

  image.classList.add("lozad");

  // Adding progressively Image Data Source

  image.setAttribute("data-src", "img/profile-img.png");

  // lazy loads elements with default selector as ".lozad"

  // Initialize library
  lozad(image, {
    load: (el) => {
      el.src = el.dataset.src;
      el.onload = function () {
        el.classList.add("fade");
      };
    },
  }).observe();
});
// Main Message Panel

const mainContactButton = document.querySelector("#main_profile_contact_btn");
const mainContactButtonClass = document.querySelector(".open-message-panel");
const mainContactButtonClassText = document.querySelector(
  ".open-message-panel-text"
);

const mainMessagePanel = document.querySelector("#main__profile_contact_panel");
let isMobile = window.matchMedia("(max-width: 500px)");
const mainCloseButton = document.querySelector("#close");
const panelClose = (mainCloseButton.onclick = (e) => {
  mainMessagePanel.style.display = "none";
  mainContactButtonClass.style.display = "block";
  !isMobile.matches
    ? (mainContactButtonClassText.style.display = "block")
    : (mainContactButtonClassText.style.display = "none");
});
const panelOpen = (mainContactButton.onclick = (e) => {
  mainMessagePanel.style.display = "block";
  mainContactButtonClass.style.display = "none";
  mainContactButtonClassText.style.display = "none";

  //   Process Form Submission using Ajax JQuery
  $(document).ready(() => {
    $("#messenger").on("submit", (e) => {
      e.preventDefault();
      const data = () => {
        return (formData = {
          name: $("input[name=name]").val(),
          email: $("input[name=email]").val(),
          message: $("textarea[name=message]").val(),
        });
      };

      // Send AJAX post request using JQuery
      $.ajax({
        type: "POST",
        headers: {
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        url: "/messenger",
        dataType: "json",
        data: data(),
        encode: true,
      });
      setTimeout(() => {
        $("#message-icon").removeClass("fa-paper-plane");
        $("#send-message").html("Sent");
        $("#send-message").addClass("message-sent");
        $("#send-message").append(
          "<i id='message-icon' class='fas fa-check'></i>"
        );
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
        setTimeout(() => {
          $("#send-message").removeClass("message-sent");
          $("#send-message").html("Send");
          $("#send-message").append(
            "<i id='message-icon' class='fa fa-paper-plane'></i>"
          );
        }, 3000);
      }, 1200);
    });
  });
});

// Mobile Menu

// Mobile Menu Open
const mobileHeader = document.querySelector(".mobile_header_nav");
const hamburger = document.querySelector(".hamburger__container");
const hamburger1 = document.querySelector(".hamburger1");
const hamburger2 = document.querySelector(".hamburger2");
let menuOpen = false;
hamburger.onclick = (e) => {
  if (!menuOpen) {
    // Show Menu Items
    hamburger1.classList.add("toggled");
    hamburger2.classList.add("toggled");
    mobileHeader.classList.add("open");
    mobileHeader.style.display = "block";
    menuOpen = true;
  } else {
    // Hide the Menu Items
    hamburger1.classList.remove("toggled");
    hamburger2.classList.remove("toggled");
    mobileHeader.classList.remove("open");
    mobileHeader.style.display = "none";
    menuOpen = false;
  }
};

const facebook = (document.querySelector(".fa-facebook").onclick = (e) => {
  window.open("https://facebook.com/ihugba", "_blank");
  // cl("Opened facebook");
});
const linkedin = (document.querySelector(".fa-linkedin").onclick = (e) => {
  window.open("https://linkedin.com/in/kizito-ihugba-365891128", "_blank");
  // cl("LinkedIn Opened");
});
const github = (document.querySelector(".fa-github").onclick = (e) => {
  window.open("https://github.com/kizito25", "_blank");
  // cl("Github Opened");
});
const twitter = (document.querySelector(".fa-twitter").onclick = (e) => {
  window.open("https://twitter.com/@ihugba", "_blank");
  // cl("Twitter Opened");
});
