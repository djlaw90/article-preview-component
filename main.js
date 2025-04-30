const shareButtons = document.querySelectorAll(".share-icon");
const shareSection = document.getElementById("share-section");
const authorSection = document.getElementById("author-section");
const bottomSection = document.getElementById("bottom-section");
const circleAroundShareIcon = document.querySelector(".circle-icon");
const shareIconSvg = document.getElementById("share-path");

const toggleShare = () => {
  const isAuthorHidden = authorSection.classList.contains("hide");
  const currentIconColor = shareIconSvg.getAttribute('fill') || '#6E8098';

  authorSection.classList.toggle("hide", !isAuthorHidden);
  shareSection.classList.toggle("hide", isAuthorHidden);

  circleAroundShareIcon.style.backgroundColor = isAuthorHidden
    ? "var(--grey200)"
    : "var(--grey500)";

  bottomSection.style.backgroundColor = isAuthorHidden
    ? "var(--white)"
    : "var(--grey900)";

    // Toggle SVG color between original and light grey
  const originalColor = "#6E8098";
  const activeColor = "#ecf0f1";

  shareIconSvg.setAttribute(
    "fill",
    currentIconColor.toLowerCase() === originalColor.toLowerCase()
      ? activeColor
      : originalColor
  );
};
  
shareButtons.forEach(button => {
  button.addEventListener("click", toggleShare);
});
