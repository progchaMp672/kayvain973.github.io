document.getElementById("craft-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const craftNameInput = document.getElementById("craft-name");
    const craftImageInput = document.getElementById("craft-image");
    const craftList = document.getElementById("craft-list");

    // Get the craft name (required)
    const craftName = craftNameInput.value.trim();
    if (!craftName) {
        alert("Please provide a name for the craft.");
        return;
    }

    // Create a list item for the craft
    const craftItem = document.createElement("li");

    // Add the craft name
    const craftNameElement = document.createElement("span");
    craftNameElement.textContent = craftName;
    craftItem.appendChild(craftNameElement);

    // Add the craft image if provided
    if (craftImageInput.files && craftImageInput.files[0]) {
        const imageFile = craftImageInput.files[0];
        const imageElement = document.createElement("img");

        // Create a file reader to load the image
        const reader = new FileReader();
        reader.onload = function (e) {
            imageElement.src = e.target.result; // Set image source to the uploaded file
            imageElement.alt = `Image of ${craftName}`; // Automatically set alt tag
            craftItem.appendChild(imageElement);
        };
        reader.readAsDataURL(imageFile);
    }

    // Add the craft item to the list
    craftList.appendChild(craftItem);

    // Clear the form inputs
    craftNameInput.value = "";
    craftImageInput.value = "";
});
