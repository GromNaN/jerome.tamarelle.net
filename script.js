var nav = document.getElementsByTagName('nav')[0];
var links = nav.getElementsByTagName('a');
var link, section;

function toggle (e) {
	e.preventDefault();
	// Hide previous
	if (section) section.classList.remove('current');
	if (link) link.classList.remove('current');

	// Show new
	var id = this.attributes.href.value.substring(1);
	link = this;
	section = document.getElementById(id);
	section.classList.add('current');
	this.classList.add('current');

	section.id = '';
	window.location.hash = '#'+id;
	section.id = id;
}

link = links[0];
for(var i=0,n=links.length; i<n; i++) {
	links[i].addEventListener('click', toggle);
	if (links[i].attributes.href.value == window.location.hash) {
		link = links[i];
	}
}
//delete links;

var e = document.createEvent('Events');
e.initEvent('click', true, true);
link.dispatchEvent(e);
