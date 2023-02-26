const changeThemeColorSide = document.querySelector("#sidemenu");
const changeThemeColorBody = document.querySelector(".bodymenu");

// Change image background
const imgBackgroundSection = document.querySelector("#img-background-section");
const imagesBackground = ["./img/fondomenu2.svg","./img/fondomenu.svg"]
let indexImage = 0;

// Button for collapsed sidemenu
const btnThemeColor = document.querySelector(".btn-theme-color")
btnThemeColor.addEventListener("click", e => {
	indexImage = (indexImage+1) % imagesBackground.length;
	imgBackgroundSection.src = imagesBackground[indexImage];

	changeThemeColorSide.classList.toggle("dark-mode")
	changeThemeColorSide.classList.toggle("light-mode")

	changeThemeColorBody.classList.toggle("body-dark-mode")
	changeThemeColorBody.classList.toggle("body-light-mode")
});

// Button for collapsed sidemenu
const btnCollapsedThemeColor = document.querySelector("#collapsed-btn-theme-color")
btnCollapsedThemeColor.addEventListener("click", e => {

	indexImage = (indexImage+1) % imagesBackground.length;
	imgBackgroundSection.src = imagesBackground[indexImage];

	changeThemeColorSide.classList.toggle("dark-mode")
	changeThemeColorSide.classList.toggle("light-mode")

	changeThemeColorBody.classList.toggle("body-dark-mode")
	changeThemeColorBody.classList.toggle("body-light-mode")
});


// Button nav for cellphone size
const btnNavThemeColor = document.querySelector("#nav-btn-theme")
btnNavThemeColor.addEventListener("click", e => {

	indexImage = (indexImage+1) % imagesBackground.length;
	imgBackgroundSection.src = imagesBackground[indexImage];

	changeThemeColorSide.classList.toggle("dark-mode")
	changeThemeColorSide.classList.toggle("light-mode")

	changeThemeColorBody.classList.toggle("body-dark-mode")
	changeThemeColorBody.classList.toggle("body-light-mode")
});