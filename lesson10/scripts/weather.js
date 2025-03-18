
 const currentTemp = document.querySelector("#current-temp");
 const weatherIcon = document.querySelector("#weather-icon");
 const captionDesc = document.querySelector("figcaption");
 
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=82b9407b7b6d113e077d354c4b29fe74&units=imperial`;
 
 async function apiFetch(){
     try{
         const response = await fetch(url);
         if(response.ok){
             const data = await response.json();
             console.log(data); //Testing only
             displayResults(data); // uncomment when ready
         } else {
             throw Error(await response.text());
         }
     } catch (error) {
         console.log(error)
     }
 }
 
 function displayResults(data) {
     currentTemp.innerHTML = `${data.main.temp}&deg;F`;
     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
     let desc = data.weather[0].description;
     weatherIcon.setAttribute("src",iconsrc);
     weatherIcon.setAttribute("alt","weather icon");
     captionDesc.textContent =`${desc}`;
 }
 
 apiFetch();