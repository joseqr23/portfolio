// Obtener el modal
const modal = document.getElementById("myModal");
const info = document.querySelector(".info-project");
const contentSlider = document.querySelector(".images-project");

// Obtener el elemento para cerrar el modal
const span = document.getElementsByClassName("close")[0];

// Obtener el botón para abrir el modal
const btnProject1 = document.getElementById("myBtn");
const imgModal1 = document.getElementById("img-modal-1");
const content1 = document.getElementById("fileproject1")

const btnProject2 = document.getElementById("myBtn2");
const imgModal2 = document.getElementById("img-modal-2");
const content2 = document.getElementById("fileproject2")

const btnProject3 = document.getElementById("myBtn3");
const imgModal3 = document.getElementById("img-modal-3");
const content3 = document.getElementById("fileproject3")


const btnProject4 = document.getElementById("myBtn4");
const imgModal4 = document.getElementById("img-modal-4");
const content4 = document.getElementById("fileproject4")


function sliderFunction() {
	let numImages = arguments.length;
	let carouselHtml = `

		<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
		 <div class="carousel-inner">
	`;

	for (let i = 0; i < numImages; i++) {
		let activeClass = i === 0 ? ' active' : '';
		let imgHtml = `
		
			<div class="carousel-item${activeClass}">
				<img src="${arguments[i]}" class="d-block" id="modal-carousel-img" alt="...">
		 	</div>
		 
	  `;
		carouselHtml += imgHtml;
	}

	carouselHtml += `
		 </div>
		 <button id="secondcarousel" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden" style="">Previous</span>
		 </button>
		 <button id="secondcarousel" class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		 </button>
	  </div>
	 
	`;

	return carouselHtml;
}




// Cuando se hace clic en el botón, mostrar el modal

btnProject1.addEventListener("click", openModal1)
imgModal1.addEventListener("click", openModal1)

btnProject2.addEventListener("click", openModal2)
imgModal2.addEventListener("click", openModal2)

btnProject3.addEventListener("click", openModal3)
imgModal3.addEventListener("click", openModal3)

btnProject4.addEventListener("click", openModal4)
imgModal4.addEventListener("click", openModal4)


// Funciones para abrir modal
function openModal1() {
	modal.style.display = "block";
	contentSlider.innerHTML = sliderFunction(
		"../img/projects/petz/petz-main.webp",
		"../img/projects/petz/petz-adoptsection.webp",
		"../img/projects/petz/user/petz-mypetssection.webp",
		"../img/projects/petz/user/petz-mypetsdiagnosticsection.webp",
		"../img/projects/petz/petz-profilesection.webp",
		"../img/projects/petz/admin/petz-clientsection.webp",
		"../img/projects/petz/admin/petz-petsection.webp",
		"../img/projects/petz/admin/petz-diagnosticsection.webp",
		"../img/projects/petz/admin/petz-petadoptionsection.webp",
		"../img/projects/petz/petz-modals.webp",
		"../img/projects/petz/admin/petz-applicationsection.webp",
	)
	info.innerHTML = content1.innerHTML;
}

function openModal2() {
	modal.style.display = "block";
	contentSlider.innerHTML = sliderFunction(
		"../img/projects/rickandmorty/rickandmorty-main.webp",
		"../img/projects/rickandmorty/rickandmorty-listsection.webp",
		"../img/projects/rickandmorty/rickandmorty-detailcharacter.webp",
	)
	info.innerHTML = content2.innerHTML;
}

function openModal3() {
	modal.style.display = "block";
	contentSlider.innerHTML = sliderFunction(
		"../img/projects/pokedex/pokedex-main.webp",
		"../img/projects/pokedex/pokedex-add.webp",
		"../img/projects/pokedex/pokedex-favorites.webp",
	)
	info.innerHTML = content3.innerHTML;
}

function openModal4() {
	modal.style.display = "block";
	contentSlider.innerHTML = sliderFunction(
		"../img/projects/portfoliodjango/portfolio-django-main.webp",
		"../img/projects/portfoliodjango/portfolio-django-login.webp",
		"../img/projects/portfoliodjango/portfolio-django-signup.webp",
		"../img/projects/portfoliodjango/portfolio-django-menu-register.webp",
		"../img/projects/portfoliodjango/portfolio-django-menu-register2.webp",
		"../img/projects/portfoliodjango/portfolio-django-menu-register3.webp",
	)
	info.innerHTML = content4.innerHTML;
}



// Cuando se hace clic en la 'x', ocultar el modal
span.onclick = function () {
	if (span.onclick) {
		modal.style.display = "none";

	}
}

// Cuando el usuario hace click fuera del modal, ocultarlo
// window.onclick = function (event) {
// 	if (event.target == modal) {
// 		modal.style.display = "none";
// 	}
// }

// Cuando el usuario hace click en la tecla esc, ocultarlo
document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		modal.style.display = "none";
	}
});