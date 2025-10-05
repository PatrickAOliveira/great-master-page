document.addEventListener("DOMContentLoaded", function () {
	const buttons = document.querySelectorAll("[data-tab-button]");
	const questions = document.querySelectorAll("[data-faq-question]");

	const heroSection = document.querySelector(".hero");
	const alturaHero = heroSection.clientHeight;

	window.addEventListener("scroll", function () {
		const posicaoAtual = window.scrollY;

		if (posicaoAtual < alturaHero) {
			hiddenHeaderElem();
		} else {
			showHeaderElem();
		}
	});

	// Seção de atrações, programação das abas / tabs
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function (botao) {
			const abaAlvo = botao.target.dataset.tabButton;
			const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
			hideAllTabs();
			aba.classList.add("films__tabs__item--is-active");
			removeActiveButton();
			botao.target.classList.add("films__tabs__button--active");
		});
	}

	// Seção FAQ, accordion
	for (let i = 0; i < questions.length; i++) {
		questions[i].addEventListener("click", abreOuFechaResposta);
	}
});

function hiddenHeaderElem() {
	const header = document.querySelector("header");
	header.classList.add("header--is-hidden");
}

function showHeaderElem() {
	const header = document.querySelector("header");
	header.classList.remove("header--is-hidden");
}

function abreOuFechaResposta(e) {
	const classe = "faq__questions__item--is-open";
	const elementoPai = e.target.parentNode;

	elementoPai.classList.toggle(classe);
}

function removeActiveButton() {
	const buttons = document.querySelectorAll("[data-tab-button]");

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("films__tabs__button--active");
	}
}

function hideAllTabs() {
	const tabsContainer = document.querySelectorAll("[data-tab-id]");

	for (let i = 0; i < tabsContainer.length; i++) {
		tabsContainer[i].classList.remove("films__tabs__item--is-active");
	}
}
