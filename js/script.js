const spoiler = document.querySelectorAll('.title');

spoiler.forEach(function(index) {
	index.addEventListener('click', function() {
		spoiler.forEach((element) => {
		let content = element.nextElementSibling;

		if (element != this) {
			content.style.maxHeight = null;
			element.classList.remove('active');
		} else {
			content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
			this.classList.toggle('active');
		}
		});
	});
});