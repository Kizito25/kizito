// Console.log() shorthand
const cl = (value) => console.log(value);

// Main Message Panel
const mainContactButton = document.querySelector("#main_profile_contact_btn");
const mainContactButtonClass = document.querySelector(".open-message-panel");
const mainContactButtonClassText = document.querySelector(
  ".open-message-panel-text"
);
const mainMessagePanel = document.querySelector("#main__profile_contact_panel");
let isMobile = false;
const mainCloseButton = document.querySelector("#close");
const panelClose = (mainCloseButton.onclick = () => {
  mainMessagePanel.style.display = "none";
  mainContactButtonClass.style.display = "block";
  if (!isMobile) {
    mainContactButtonClassText.style.display = "none";
    isMobile = true;
  } else {
    mainContactButtonClassText.style.display = "block";
    isMobile = false;
  }
});
const panelOpen = (mainContactButton.onclick = () => {
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
