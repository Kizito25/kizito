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
  //   const sendMessage = document.querySelector("#send-message");
  //   sendMessage.onclick = (e) => {
  //     e.preventDefault();
  //     // cl("message sent");

  //     // Ajax Form Submit
  // };
  $(document).ready(() => {
    $("#messenger").on("submit", (e) => {
      e.preventDefault();

      var formData = {
        name: $("input[name=name]").val(),
        email: $("input[name=email]").val(),
        message: $("textarea[name=message]").val(),
      };

      $.ajax({
        type: "POST",
        crossDomain: true,
        headers: {
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        url: "/messenger",
        data: formData,
        dataType: "json",
        encode: true,
      })
        // using the done promise callback
        .done(function (data) {
          // log data to the console so we can see
          console.log(data);

          // here we will handle errors and validation messages
          if (!data.success) {
            // handle errors for name ---------------
            if (data.errors.name) {
              $("#message-icon").removeClass("fa-paper-plane");
              $("#message-icon").addClass("fa-ban");
            }

            // handle errors for email ---------------
            if (data.errors.email) {
              $("#message-icon").removeClass("fa-paper-plane");
              $("#message-icon").addClass("fa-ban");
            }

            // handle errors for superhero alias ---------------
            if (data.errors.message) {
              $("#message-icon").removeClass("fa-paper-plane");
              $("#message-icon").addClass("fa-ban");
            }
          } else {
            // ALL GOOD! just show the success message!
            $("#message-icon").removeClass("fa-paper-plane");
            $("#message-icon").addClass("fa-check");
            cl("Message sent!!!");
          }
        });
    });
  });
});
