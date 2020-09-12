// Console.log() shorthand

const cl =(value)=> console.log(value);

// Main Message Panel
const mainContactButton = document.querySelector('#main_profile_contact_btn')
const mainContactButtonClass = document.querySelector('.open-message-panel')
const mainContactButtonClassText = document.querySelector('.open-message-panel-text')
const mainMessagePanel = document.querySelector('#main__profile_contact_panel')
const mainCloseButton = document.querySelector('#close')
const panelClose = mainCloseButton.onclick = () =>{
mainMessagePanel.style.display = "none";
mainContactButtonClass.style.display = "block";
mainContactButtonClassText.style.display = "block";
} 
const panelOpen = mainContactButton.onclick =() => {
    mainMessagePanel.style.display = "block";
    mainContactButtonClass.style.display = "none";
    mainContactButtonClassText.style.display = "none";
    }
