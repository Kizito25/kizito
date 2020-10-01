// Console.log() shorthand

const cl = (value) => console.log(value);

// Main Message Panel
const mainContactButton = document.querySelector("#main_profile_contact_btn");
const mainContactButtonClass = document.querySelector(".open-message-panel");
const mainContactButtonClassText = document.querySelector(
  ".open-message-panel-text"
);
const mainMessagePanel = document.querySelector("#main__profile_contact_panel");
const mainCloseButton = document.querySelector("#close");
const panelClose = (mainCloseButton.onclick = () => {
  mainMessagePanel.style.display = "none";
  mainContactButtonClass.style.display = "block";
  mainContactButtonClassText.style.display = "block";
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
