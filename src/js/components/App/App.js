import Map from '../Map/Map';
import './App.css';
// import mapboxConfig from '../../data/mapbox-config';

// scrollytelling chapters
import data from '../../../data/data';

// map tiles & attribution
const options = {
	activeSection: 'baker',
	bearing: 27,
	center: [-0.15591514, 51.51830379],
	mapboxStyle: 'https://api.maptiler.com/maps/outdoor/style.json?key=pRmETZ6APJE6l5kAzesF',
	pitch: 45,
	zoom:  15.5
};


function init() {
	console.log('App!')
	Map.init(data, options);	
}

export default { init };
