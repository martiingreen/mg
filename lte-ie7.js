/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'mg-social\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-social_icons_grey-07' : '&#x66;',
			'icon-social_icons_grey-06' : '&#x69;',
			'icon-social_icons_grey-05' : '&#x6c;',
			'icon-social_icons_grey-04' : '&#x74;',
			'icon-social_icons_grey-03' : '&#x67;',
			'icon-social_icons_grey-02' : '&#x70;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};