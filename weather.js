const weather = document.querySelector('.weather');
const KEY = '22e6b99f59f7fecf10ebc8c6bf87f5e3';
const COORDS = 'coords';

function getweather(lat, lon) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=20572b6769fe98adf7833ba6111b0282&units=metric`
	)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			const temper = json.main.temp;
			const place = json.name;
			const wind = json.wind.speed;
			weather.innerText = `${temper}℃  ${wind}㎧  ${place}`;
		});
}

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function GeoSucces(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude,
	};
	saveCoords(coordsObj);
}

function GeoError() {
	console.log('위치 정보 확인 불가');
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(GeoSucces, GeoError);
}

function loadCoords() {
	const loadCoords = localStorage.getItem(COORDS);
	if (loadCoords === null) {
		askForCoords();
	} else {
		const parsedCoords = JSON.parse(loadCoords);
		getweather(parsedCoords.latitude, parsedCoords.longitude);
	}
}

function init() {
	loadCoords();
}

init();
