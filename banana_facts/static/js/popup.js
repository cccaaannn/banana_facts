// Saves options to chrome.storage
function save_options() {
    var isBananaActive = document.getElementById('isBananaActive').checked;
    chrome.storage.sync.set({
        isBananaActive: isBananaActive
    },
        displayMessages("status", "bananas saved", 1)
    );
}
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        isBananaActive: true
    }, function(items) {
        document.getElementById('isBananaActive').checked = items.isBananaActive;
    });
}

function displayMessages(parent_id, message, delay){
    const alert = document.createElement("div");
    alert.innerHTML = `
        <br>
        ${message}
    `;

    const message_div = document.getElementById(parent_id);
    message_div.appendChild(alert);

    window.setTimeout(function(){
        alert.remove();
    },delay*1000);
}



document.getElementById('isBananaActive').addEventListener('click', save_options);
document.addEventListener('DOMContentLoaded', restore_options);
