//alert("Hola mundo");

let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let zona_horaria = document.getElementById("zona_horaria");

const solicitudAPI = () => {
  // Hacer una petición para un usuario con ID especifico
  axios
    .get("https://itp-scr-vmpf-01.000webhostapp.com/php-geoip-api/")
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response.data);
      ip.innerHTML = response.data.ip;
      pais.innerHTML = response.data.pais;
      continente.innerHTML = response.data.continente;
      zona_horaria.innerHTML = response.data.zona_horaria;
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
};

//Llama al evento LOAD cada vez que se actualiza la página
//y llama a la función solicitudAPI que tiene la rutina
//de llamar a la API desde Axios
window.addEventListener("load", solicitudAPI);
