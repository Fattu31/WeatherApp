async function fetchWheatherCity(cityName) {
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7a6821afe4630c8b189f6a64e5950bcb`;
	const response=await fetch(url);
	const data=await response.json();
	console.log(data)
}
//demo()

function fetchCity(){
	let cityName= document.getElementById("city_name");
	if(cityName.value==="")
	{
		alert("Enter a city name");
	}
	else{
        fetchWheatherCity(cityName.value);
        cityName.value="";
	}
}


