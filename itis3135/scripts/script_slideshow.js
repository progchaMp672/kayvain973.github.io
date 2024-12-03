// script.js
$(document).ready(function () {
    // List of images and captions
    const images = [
      { src: "images/knife.jpg", caption: "K - for Knife" },
      { src: "images/egg.jpg", caption: "E - for Egg" },
      { src: "images/ice.jpg", caption: "I - for Ice" },
      { src: "images/vaccum.jpg", caption: "V - for Vaccum" },
      { src: "images/all.jpg", caption: "A - for All" },
      { src: "images/napkin.jpg", caption: "N - for Napkin" },
      { src: "images/grass.jpg", caption: "G - for Grass" }
    ];
  
    // Function to dynamically create and insert thumbnails
    function createThumbnails() {
      images.forEach((item, index) => {
        const thumbnailHTML = `
          <li>
            <img src="${item.src}" alt="${item.caption}" data-index="${index}">
          </li>
        `;
        $("#thumbnail-list").append(thumbnailHTML);
      });
    }
  
    // Function to update the main image and caption
    function updateMainImage(index) {
      $("#main-image").attr("src", images[index].src);
      $("#main-image").attr("alt", images[index].caption);
      $("#caption").text(images[index].caption);
    }
  
    // Handle thumbnail click events
    $("#thumbnail-list").on("click", "img", function () {
      const index = $(this).data("index");
      updateMainImage(index);
    });
  
    // Initial setup: Insert thumbnails and load the first image
    createThumbnails();
    updateMainImage(0); // Load the first image initially
  });
  