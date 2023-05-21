import Map from '../Map/Map';
import './App.css';

// scrollytelling chapters
import data from '../../../data/data';

// map tiles & attribution
const options = {
	activeSection: 'baker',
	bearing: 27,
	center: [-0.15591514, 51.51830379],
	mapboxStyle: 'https://api.maptiler.com/maps/basic-v2/style.json?key=arETEBBqRxRrA5v30F6H',
	pitch: 45,
	zoom:  15.5
};


function init() {
	Map.init(data, options);	
}

export default { init };
