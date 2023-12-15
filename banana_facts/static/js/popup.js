/**
 * Saves options to chrome.storage.
 */
function saveOptions() {
    var isBananaActive = document.getElementById('isBananaActive').checked;
    chrome.storage.sync.set({ isBananaActive: isBananaActive }, displayMessages("#status", "Bananas saved", 1));
}

/**
 * Restores select box and checkbox state using the preferences.
 * Stored in chrome.storage.
 */
function restoreOptions() {
    chrome.storage.sync.get({ isBananaActive: true }, items => { document.getElementById('isBananaActive').checked = items.isBananaActive; });
}

/**
 * Adds message to a parent element.
 * @param {*} parentSelector
 * @param {*} message 
 * @param {*} delaySeconds 
 */
function displayMessages(parentSelector, message, delaySeconds) {
    const alert = document.createElement("div");
    alert.innerHTML = `<br>${message}`;

    const message_div = document.querySelector(parentSelector);
    message_div.appendChild(alert);

    window.setTimeout(() => alert.remove(), delaySeconds * 1000);
}

document.getElementById('isBananaActive').addEventListener('click', saveOptions);
document.addEventListener('DOMContentLoaded', restoreOptions);
