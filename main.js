const shareButtons = document.querySelectorAll(".share-icon");
const shareSection = document.getElementById("share-section");
const authorSection = document.getElementById("author-section");

shareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      toggleShare();
    });
  });


const toggleShare = () => {
    if(authorSection.classList.contains("hide")) {
        authorSection.classList.remove("hide");
        shareSection.classList.add("hide");
    } else {
        authorSection.classList.add("hide");
        shareSection.classList.remove("hide");
    }
}