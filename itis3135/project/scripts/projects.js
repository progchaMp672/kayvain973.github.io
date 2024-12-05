// Select the gallery container
const galleryContainer = document.getElementById("gallery");

// Array of gallery items
const galleryItems = [
  {
    title: "Custom Keychain",
    description: "A personalized keychain with your name or initials.",
    image: "images/product1.jpg",
    link: "https://example.com/1" // Link
  },
  {
    title: "Charm Set",
    description: "A set of three handmade charms for your collection.",
    image: "images/product1.jpg",
    link: "https://example.com/2" // Link
  },
  {
    title: "Exclusive Pendant",
    description: "An exclusive handcrafted pendant for special occasions.",
    image: "images/product1.jpg",
    link: "https://example.com/3" // Link
  }
];

// Function to create and append gallery items
function populateGallery() {
  galleryItems.forEach((item) => {
    // Create the anchor element to wrap only the image
    const anchorElement = document.createElement("a");
    anchorElement.href = item.link; // Set link for the anchor
    anchorElement.target = "_blank";

    // Creates a container div for each gallery item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("gallery-item");

    // Creates the image element and wrap it with the anchor tag
    const img = document.createElement("img");
    img.src = item.image;

    // Update the alt text conditionally
    img.alt = item.title.includes("Keychain") ? "keychain" : item.title;

    // Append the image inside the anchor element
    anchorElement.appendChild(img);

    // Creates the title element
    const title = document.createElement("h3");
    title.textContent = item.title;

    // Creates the description element
    const description = document.createElement("p");
    description.textContent = item.description;

    // Apply all elements to the itemDiv
    itemDiv.appendChild(anchorElement);
    itemDiv.appendChild(title);
    itemDiv.appendChild(description);

    // Add the itemDiv to the gallery container
    galleryContainer.appendChild(itemDiv);
  });
}

// Populate the gallery on page load
populateGallery();
