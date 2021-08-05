import Map from '../Map/Map';
import './App.css';
// import mapboxConfig from '../../data/mapbox-config';


// map tiles & attribution
const mapboxStyle = 'https://api.maptiler.com/maps/outdoor/style.json?key=pRmETZ6APJE6l5kAzesF';


function init() {
	console.log('App!')
	Map.init();	
}

export default { init };
