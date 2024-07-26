//Template string
/*
const numero = (num) => `el numero es: ${num}`;
const resultado = numero(10);
console.log(resultado);
*/

//Objects
/*
const web = {
  nombre: "bluuweb",
  links: {
    enlace: "www.bluuweb.cl",
  },
  redesSociales: {
    youtube: {
      enlace: "youtube.com/bluuweb",
      nombre: "bluuweb yt",
    },
    facebook: {
      enlace: "facebook.com/bluuweb",
      nombre: "facebook fb",
    },
  },
};

console.log(web.redesSociales.youtube.enlace);
console.log(web.redesSociales.facebook.enlace);

const { enlace, nombre } = web.redesSociales.youtube;

console.log(enlace);
console.log(nombre);
*/

//Fetch
/*
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    //console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => console.log(error));
*/

//Async
const obtenerPokemones = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
  
      const arrayNombres = data.results.map((poke) => poke.name);
      console.log(arrayNombres);
  
      const arrayNombresFiltrados = data.results.filter(
        (poke) => poke.name !== "bulbasaur",
      );
      console.log(arrayNombresFiltrados);
    } catch (error) {
      console.log(error);
    }
  };
  
  obtenerPokemones();
  