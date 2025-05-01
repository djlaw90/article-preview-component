const shareBtn = document.querySelector('.share-icon');
const shareSection = document.getElementById("share-section");
const authorSection = document.getElementById("author-section");
const bottomSection = document.getElementById("bottom-section");
const circleAroundShareIcon = document.querySelector(".circle-icon");
const shareIconSvg = document.getElementById("share-path");


document.addEventListener('click', (e) => {
  if (!shareBtn.contains(e.target) && !shareSection.contains(e.target)) {
    shareSection.classList.add('hide');
    shareBtn.classList.toggle('desktop-active');
    toggleShareIconColor();
  }
});


const toggleShare = () => {
  const isDesktop = window.innerWidth >= 975;
  const isAuthorHidden = authorSection.classList.contains("hide");

  if(!isDesktop) {
    authorSection.classList.toggle("hide", !isAuthorHidden);
    shareSection.classList.toggle("hide", isAuthorHidden);
    circleAroundShareIcon.classList.toggle('mobile-active');

    bottomSection.style.backgroundColor = isAuthorHidden
    ? "var(--white)"
    : "var(--grey900)";

  }

  if(isDesktop) {
    circleAroundShareIcon.classList.toggle('desktop-active');
    shareSection.classList.toggle("hide");
  }

  toggleShareIconColor();
};

const toggleShareIconColor = () => {
  const currentIconColor = shareIconSvg.getAttribute('fill') || '#6E8098';
  const originalColor = "#6E8098";
  const activeColor = "#ecf0f1";

  shareIconSvg.setAttribute(
    "fill",
    currentIconColor.toLowerCase() === originalColor.toLowerCase()
      ? activeColor
      : originalColor
  );
}
  
shareBtn.addEventListener('click', toggleShare);

