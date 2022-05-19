const menu = document.querySelector('.nav'),
			burger = document.querySelector('.burger'),
			mobileBack = document.querySelector('.mobile-back'),
			overlay = document.querySelector('.overlay');

const lockScroll = () => {
	document.body.classList.add('lock');
}

const unlockScroll = () => {
	document.body.classList.remove('lock');
}


const scrollTop = () => {
	menu.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

burger.addEventListener('click', () => {
	menu.classList.add('open');
	overlay.classList.add('open');
	lockScroll();
	initialMenu();
});

overlay.addEventListener('click', () => {
	menu.classList.remove('open');
	overlay.classList.remove('open');
	unlockScroll();
});

menu.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav-link-drop')) {
		e.preventDefault();
		e.target.closest('.nav-list').classList.add('transformation');
		e.target.closest('.nav-item').querySelector('.nav-list-dropdown').classList.add('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('mobile-back-link')) {
		e.preventDefault();
		e.target.closest('.nav-list-dropdown').classList.remove('transformation');
		e.target.closest('.nav').querySelector('.nav-list').classList.remove('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('nav-link') && !e.target.classList.contains('nav-link-drop')) {
		e.preventDefault();
		menu.classList.remove('open');
		overlay.classList.remove('open');
		unlockScroll();
	}
});

 