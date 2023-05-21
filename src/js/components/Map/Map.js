import maplibregl from 'maplibre-gl';

// CSS
import './Map.css';
import './maplibre-gl.css';

let map;


function init(data, options) {
	console.log(data)

	map = new maplibregl.Map({
		container: 'map',
		style: options.mapboxStyle,
		center: options.center,
		zoom: options.zoom,
		bearing: options.bearing,
		pitch: options.pitch	
	});

	// On every scroll event, check which element is on screen
	window.onscroll = (map) => {
		const sections = Object.keys(data);

		for (let i = 0, l = sections.length; i < l; i++) {
			const section = sections[i];

			if (isElementOnScreen(section)) {
				setActiveChapter(section, options.activeSection, data);
				break;
			}
		}
	};
}


function setActiveChapter(section, activeSection, data) {
	if (section === activeSection) return;
	 
	map.flyTo(data[section]);
	 
	document.getElementById(section).setAttribute('class', 'active');
	document.getElementById(activeSection).setAttribute('class', '');
	 
	activeSection = section;
}

function isElementOnScreen(id) {
	var element = document.getElementById(id);
	var bounds = element.getBoundingClientRect();

	return bounds.top < (window.innerHeight * 2) && bounds.bottom > 0;
}

export default { init };
