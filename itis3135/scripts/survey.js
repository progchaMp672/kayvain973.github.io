document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const coursesContainer = document.getElementById("courses");
    const addCourseBtn = document.getElementById("addCourseBtn");
  
    addCourseBtn.addEventListener("click", () => {
      const courseInput = document.createElement("input");
      courseInput.type = "text";
      courseInput.name = "courses";
      courseInput.placeholder = "Enter course";
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.type = "button";
      deleteBtn.addEventListener("click", () => {
        coursesContainer.removeChild(courseInput);
        coursesContainer.removeChild(deleteBtn);
      });
  
      coursesContainer.appendChild(courseInput);
      coursesContainer.appendChild(deleteBtn);
      coursesContainer.appendChild(document.createElement("br"));
    });
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const requiredFields = ["name", "mascot", "image", "imageCaption", "personalBackground", "professionalBackground", "academicBackground", "webDevBackground", "primaryPlatform"];
      for (const field of requiredFields) {
        const input = document.getElementById(field);
        if (!input.value) {
          alert(`${field} is required!`);
          return;
        }
      }
  
      if (!document.getElementById("agreement").checked) {
        alert("You must agree to the terms.");
        return;
      }
  
      const formData = new FormData(form);
      const resultSection = document.createElement("section");
      for (const [key, value] of formData.entries()) {
        if (key === "image") {
          const img = document.createElement("img");
          img.src = URL.createObjectURL(value);
          resultSection.appendChild(img);
        } else {
          const p = document.createElement("p");
          p.textContent = `${key}: ${value}`;
          resultSection.appendChild(p);
        }
      }
  
      document.body.innerHTML = ""; // Clear the page
      document.body.appendChild(resultSection);
  
      const resetLink = document.createElement("a");
      resetLink.href = "#";
      resetLink.textContent = "Reset Form";
      resetLink.addEventListener("click", () => location.reload());
      document.body.appendChild(resetLink);
    });
  
    form.addEventListener("reset", () => {
      coursesContainer.innerHTML = "";
    });
  });
  