const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActives = 1;

prev.addEventListener("click", () => {
	if (currentActives > 1) {
		currentActives--;
		update();
	}
});

next.addEventListener("click", () => {
	if (currentActives < circles.length) {
		currentActives++;
		update();
	}
});

function update() {
	circles.forEach((circle, idx) => {
		if (idx < currentActives) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	const actives = document.querySelectorAll(".active");

	switch (actives.length) {
		case 1:
			progress.style.width = "0%";
			break;
		case 2:
			progress.style.width = "33%";
			break;
		case 3:
			progress.style.width = "66%";
			break;
		case 4:
			progress.style.width = "99%";
			break;
		default:
			break;
	}

	if (currentActives === 1) {
		prev.disabled = true;
	} else if (currentActives === 4) {
		next.disabled = true;
	} else {
		next.disabled = false;
		prev.disabled = false;
	}
}
