'use strict';
let toggleOnOffBtn = document.getElementById("toggleOnOffBtn");
let descriptionDiv = document.getElementById("description");

chrome.storage.local.get("isDisabled", function (data) {
    toggleOnOffBtn.checked = !data.isDisabled;
    setDescriptionText(data.isDisabled);
    console.log("gettet");
});

toggleOnOffBtn.onclick = function toggleOnOff(btn) {
    let isDisabled = !document.getElementById('toggleOnOffBtn').checked;
    setDescriptionText(isDisabled);
    chrome.storage.local.set({ isDisabled: isDisabled })
};


function setDescriptionText(isDisabled) {
    if (isDisabled) {
        descriptionDiv.innerHTML = "not hiding ELO and player names!";
    } else {
        descriptionDiv.innerHTML = "hiding ELO and player names!";
    }
}