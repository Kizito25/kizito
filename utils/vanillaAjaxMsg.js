//   Vanilla JS Ajax form handling
const sendMessage = document.querySelector("#messenger");
sendMessage.onsubmit = (e) => {
  e.preventDefault();
  //   Ajax Form Submit

  const xhr = new XMLHttpRequest();
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const url = document.getElementById("messenger").getAttribute("action");
  function handleForm() {
    if (xhr) {
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.setRequestHeader("Content-Type", "application/xml");
      xhr.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
          setTimeout(() => {
            document
              .getElementById("#message-icon")
              .classList.remove("fa fa-paper-plane");
            document.getElementById("send-mesage").textContent = "Sent";
            document
              .getElementById("send-message")
              .appendChild("<i id='message-icon' class='fas fa-check'></i>");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            setTimeout(() => {
              document.getElementById("send-message").textContent = "Send";
              document
                .getElementById("send-message")
                .appendChild(
                  "<i id='message-icon' class='fa fa-paper-plane'></i>"
                );
            }, 1500);
          }, 1200);
        }
      };
      xhr.send(formData);
    }
  }
  handleForm();
};
