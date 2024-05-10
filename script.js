document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".js-cite-modal").addEventListener("click", function () {
        document.getElementById("citePopup").style.display = "block";
    });
});

function closePopup() {
    document.getElementById("citePopup").style.display = "none";
}

function downloadCitation() {
    // Add functionality for downloading citation
    alert("Downloading citation...");
}

function copyToClipboard() {
    // Add functionality for copying to clipboard
    alert("Copying to clipboard...");
}

