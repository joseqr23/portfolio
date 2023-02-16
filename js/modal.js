// Get the modal
let modal = document.getElementById("myModal");

// Projects
let img1 = document.getElementById("myImg1");
let content1 = document.getElementById("fileproject1")


let img2 = document.getElementById("myImg2");
let content2 = document.getElementById("fileproject2")


let img3 = document.getElementById("myImg3");
let content3 = document.getElementById("fileproject3")

let contentSlider = document.getElementById("slider-modal");
let info = document.getElementById("info");

function sliderFunction() {
	let numImages = arguments.length;
	let carouselHtml = `
	<center>  
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
	  </center>
	`;

	return carouselHtml;
}





img1.onclick = function () {
	modal.style.display = "block";
	contentSlider.innerHTML = sliderFunction(
		"../img/projects/petz/adoptsection.PNG",
		"../img/projects/petz/modals.PNG",
		"../img/projects/petz/profilesection.PNG",
	)

	info.innerHTML = content1.innerHTML;
}

img2.onclick = function () {
	modal.style.display = "block";
	contentSlider.innerHTML = sliderFunction(
		"../img/projects/rickandmorty/listsection.PNG",
		"../img/projects/rickandmorty/detailcharacter.PNG",
	)
	info.innerHTML = content2.innerHTML;
}

img3.onclick = function () {
	modal.style.display = "block";
	contentSlider.innerHTML = sliderFunction(
		"../img/projects/rickandmorty/listsection.PNG",
		"../img/projects/rickandmorty/detailcharacter.PNG"
	)
	info.innerHTML = content3.innerHTML;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}


//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;