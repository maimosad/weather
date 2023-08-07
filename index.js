
//myHttp.open("GET",`http://api.weatherapi.com/v1/forecast.json?key=4f8f370159b0448db76200310230508&q=${a}&days=3&aqi=no&alerts=no`);


async function searchData(a){
   let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4f8f370159b0448db76200310230508&q=${a}&days=3`);

 if (t.ok && t.status != 400) { 
    let a = await t.json(); 
    displayData(a.location, a.current),
    displayAnother(a.forecast.forecastday);
    return new Promise (function(callback){
        document.getElementById("search").addEventListener("keyup", a => { searchData(a.target.value) }); 
        document.getElementById("submit").addEventListener("click", a => { searchData(a.target.value) }); 

    });
}
}


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



function displayData(a, t){
  
    var cartona =``;
  
    var e = new Date(t.last_updated);
    
cartona += ` <div class="today forecast">
<div class="forecast-header" id="today">
<div class="day">${days[e.getDay()]}</div>
<div class=" date">${e.getDate() + monthNames[e.getMonth()]}</div>
</div> <!-- .forecast-header -->
<div class="forecast-content" id="current">
<div class="location">${a.name}-${a.country}</div>
<div class="degree">
    <div class="num">${t.temp_c}<sup>o</sup>C</div>
  
    <div class="forecast-icon">
        <img src="https:${t.condition.icon}" alt="" width="90">
    </div>	

</div>
<div class="custom">${t.condition.text}</div>
<span><img src="images/icon-umberella.png" alt="">20%</span>
                            <span><img src="images/icon-wind.png" alt="">${t.condition.wind_kph}km/h</span>
                            <span><img src="images/icon-compass.png" alt="">East</span>
 
</div>`;
  
 
 document.getElementById("forecast").innerHTML = cartona;

}
function displayAnother(a) { let t = ""; for (let e = 1; e < a.length; e++)
t += `\t<div class="forecast">\n        <div class="forecast-header">\n         
   <div class="day"> ${days[new Date(a[e].date).getDay()]}</div>\n      
     </div> \x3c!-- .forecast-header --\x3e\n        <div class="forecast-content">\n     
            <div class="forecast-icon">\n        
                    <img src="https:${a[e].day.condition.icon}" alt="" width=48>\n         
                       </div>\n            <div class="degree">${a[e].day.maxtemp_c}<sup>o</sup>C</div>\n      
                             <small>${a[e].day.mintemp_c}<sup>o</sup></small>\n         
                                <div class="custom">${a[e].day.condition.text}</div>\n        </div>\n        </div>`;






document.getElementById("forecast").innerHTML += t 


}
searchData('cairo');