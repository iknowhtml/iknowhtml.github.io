import type from './type';

document.addEventListener("DOMContentLoaded", () => {
	var text = "Hi, I'm Aki. This is my website. Learn more about me below.";
	var interval = 75;
	var textDelay = 300;

	var delay = interval * text.length + text.match(/(\w\.$)|(\w\. )/g).length * textDelay;

	type("header-text", interval, text, textDelay);
	//fades search bar in and removes cursor from dom
	setTimeout(() => {
		document.getElementById('search-bar').classList.add("fade-in");
		document.getElementsByTagName('h1')[0].removeChild(document.getElementById('cursor'));
		document.getElementById('search-bar').focus();
	}, delay);

	var typeTimer = null;
	var resultTimer = null;

	//sets up search bar autocomplete
	document.getElementById('search-bar').addEventListener("keyup", function(e) {
		clearTimeout(typeTimer);
		clearTimeout(resultTimer);

		typeTimer = setTimeout(() => {
			if ((e.keyCode >= 48 && e.keyCode <= 90) || e.keyCode >= 186) {
				//eventually refactor to create function that generates regex and replicates functionality
				if (/^a((b|(bo)|(bou)|(bout))?)$/.test(this.value)) {
					var start = this.value.length;
					this.value = "about";
					this.setSelectionRange(start, 5);
					this.focus();
				}

				if (/^r((e|(es)|(esu)|(esum)|(esume))?)$/.test(this.value)) {
					var start = this.value.length;
					this.value = "resume";
					this.setSelectionRange(start, 6);
					this.focus();
				}

				if (/^p((r|(ro)|(roj)|(roje)|(rojec)|(roject)|(rojects))?)$/.test(this.value)) {
					var start = this.value.length;
					this.value = "projects";
					this.setSelectionRange(start, 8);
					this.focus();
				}
			}

			function hide(id, expand){
				var element = document.getElementById(id);
				element.classList.remove(expand);
				element.addEventListener('transitionend', (e) => {
					if(e.elapsedTime <= 1 && e.elapsedTime >= 0.5){
						element.classList.remove('show');
					}
				});

			}

			function show(id, expand){
				var element = document.getElementById(id);
				element.classList.add('show');
				resultTimer = setTimeout(() =>{
					element.classList.add(expand);
				}, 250);
			}

			switch (this.value) {
				case "about":
					hide('projects','expand');
					hide('resume','expand-resume');
					show('about','expand');
					break;
				case "projects":
					hide('about','expand');
					hide('resume','expand-resume');
					show('projects','expand');
					break;
				case "resume":
					hide('about','expand');
					hide('projects','expand');
					show('resume','expand-resume');
					break;
				default:
					hide('about','expand');
					hide('projects','expand');
					hide('resume','expand-resume');
					break;
			}
			var headerText = document.getElementById('header-text');

			if (this.value) {
				//if input value in search bar is about, resume or projects, set header to "Aki Gao - 1 search result" if not already that value
				if (this.value === "about" || this.value === "resume" || this.value === "projects") {
					if (headerText.innerHTML != "Aki Gao - 1 search result") {
						headerText.style.opacity = 0;
						headerText.addEventListener('transitionend', () => {
							headerText.innerHTML = "Aki Gao - 1 search result";
							headerText.style.opacity = 1;
						});
					}
				}
				//if input value in search bar is not about, resume or projects, set header to "Aki Gao - 0 search result" if not already that value
				else {
					if (headerText.innerHTML != "Aki Gao - 0 search results") {
						headerText.style.opacity = 0;
						headerText.addEventListener('transitionend', () => {
							headerText.innerHTML = "Aki Gao - 0 search results"
							headerText.style.opacity = 1;
						});
					}
				}
			}
			//if input value in search bar is blank, set header to original header value
			else {
				if (headerText.innerHTML != text) {
					headerText.style.opacity = 0;
					headerText.addEventListener('transitionend', () => {
						headerText.innerHTML = text;
						headerText.style.opacity = 1;
					});
				}
			}
		}, 150);
	});
});
