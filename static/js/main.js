import type from './type';
import {addDOMListener, removeDomListener} from './dom-listener';

document.addEventListener("DOMContentLoaded", () => {
	var texts = ["Hi, I'm Aki.", "This is my website.", "Learn more about me below."];
	var interval = 100;
	var textDelay = 500;;
	type("header-text", interval, texts, textDelay);

	var delay = textDelay * texts.length - 1;
	for (let i = 0; i < texts.length; i++) {
		delay += interval * (texts[i].length);
	}
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

			switch (this.value) {
				case "about":
					document.getElementById('projects').classList.remove('expand');
					document.getElementById('resume').classList.remove('expand-resume');
					resultTimer = setTimeout(() => document.getElementById('about').classList.add('expand'), 250);
					break;
				case "projects":
					document.getElementById('about').classList.remove('expand');
					document.getElementById('resume').classList.remove('expand-resume');
					resultTimer = setTimeout(() => document.getElementById('projects').classList.add('expand'), 250);
					break;
				case "resume":
					document.getElementById('about').classList.remove('expand');
					document.getElementById('projects').classList.remove('expand');
					resultTimer = setTimeout(() => document.getElementById('resume').classList.add('expand-resume'), 250);
				default:
					document.getElementById('about').classList.remove('expand');
					document.getElementById('projects').classList.remove('expand');
					document.getElementById('resume').classList.remove('expand-resume');
					break;
			}
			var headerText = document.getElementById('header-text');

			if (this.value) {
				if (this.value === "about" || this.value === "resume" || this.value === "projects") {
					if (headerText.innerHTML != "Aki Gao - 1 search result") {
						headerText.style.opacity = 0;
						document.addEventListener('transitionend', () => {
							headerText.innerHTML = "Aki Gao - 1 search result";
							headerText.style.opacity = 1;
						});
					}
				} else {
					if (headerText.innerHTML != "Aki Gao - 0 search results") {
						headerText.style.opacity = 0;
						document.addEventListener('transitionend', () => {
							headerText.innerHTML = "Aki Gao - 0 search results"
							headerText.style.opacity = 1;
						});
					}
				}
			} else {
				if (headerText.innerHTML != texts.join(' ')) {
					headerText.style.opacity = 0;
					document.addEventListener('transitionend', () => {
						headerText.innerHTML = texts.join(' ');
						headerText.style.opacity = 1;
					});
				}
			}
		}, 150);
	});
});
