// Obtener el modal
const modal = document.getElementById("myModal");
const info = document.querySelector(".info-project");
const contentSlider = document.querySelector(".images-project");

// Obtener el elemento para cerrar el modal
const span = document.getElementsByClassName("close")[0];

// Obtener el botón para abrir el modal
const btn = document.getElementById("myBtn");
const content1 = document.getElementById("fileproject1")

const btn2 = document.getElementById("myBtn2");
const content2 = document.getElementById("fileproject2")

const btn3 = document.getElementById("myBtn3");
const content3 = document.getElementById("fileproject3")


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
btn.onclick = function () {
	modal.style.display = "block";
	contentSlider.innerHTML = sliderFunction(
		"../img/projects/petz/menu.PNG",
		"../img/projects/petz/adoptsection.PNG",
		"../img/projects/petz/user/mypetssection.PNG",
		"../img/projects/petz/user/mypetsdiagnosticsection.PNG",
		"../img/projects/petz/profilesection.PNG",
		"../img/projects/petz/admin/clientsection.PNG",
		"../img/projects/petz/admin/petsection.PNG",
		"../img/projects/petz/admin/diagnosticsection.PNG",
		"../img/projects/petz/admin/petadoptionsection.PNG",
		"../img/projects/petz/modals.PNG",
		"../img/projects/petz/admin/applicationsection.PNG",
	)
	info.innerHTML = content1.innerHTML;
}

btn2.onclick = function () {
	modal.style.display = "block";
	contentSlider.innerHTML = sliderFunction(
		"../img/projects/rickandmorty/menu.PNG",
		"../img/projects/rickandmorty/listsection.PNG",
		"../img/projects/rickandmorty/detailcharacter.PNG",
	)
	info.innerHTML = content2.innerHTML;
}

btn3.onclick = function () {
	modal.style.display = "block";
	contentSlider.innerHTML = sliderFunction(
		"../img/projects/rickandmorty/listsection.PNG",
		"../img/projects/rickandmorty/detailcharacter.PNG"
	)
	info.innerHTML = content3.innerHTML;
}

// Cuando se hace clic en la 'x', ocultar el modal
span.onclick = function () {
	if (span.onclick) {
		modal.style.display = "none";

	}
}

// Cuando el usuario hace clic fuera del modal, ocultarlo
// window.onclick = function (event) {
// 	if (event.target == modal) {
// 		modal.style.display = "none";
// 	}
// }
