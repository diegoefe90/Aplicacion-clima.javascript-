let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let app_key ='c11360510d1853f909206cf362285383'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click',() => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }  
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${app_key}`)
    .then(data => data.json())
    .then(data => mostararDatosClima(data))
} 

function mostararDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descricion meteorologica es: ${descripcion} `

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
}