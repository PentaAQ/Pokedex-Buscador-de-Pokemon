const urlApi = "https://pokeapi.co/api/v2/pokemon/";

const formulario = document.getElementById("formPokedex");
const resultado = document.getElementById("resultado");
const imagenPokemon = document.getElementById("imagenPokemon");
const imagenes = document.getElementById("imagenes");

const nombrePokemonSpan = document.getElementById("nombrePokemonSpan");
const tipoPokemonSpan = document.getElementById("tipoPokemonSpan");
const habilidadPokemonSpan = document.getElementById("habilidadPokemonSpan");

const input = document.getElementById("inputNombre");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  input.style.border = "none";
  const inputNombre = document
    .getElementById("inputNombre")
    .value.toLowerCase();
  imagenPokemon.src = "";
  if (inputNombre !== "") {
    input.style.border = "3px solid green";
    resultado.style.display = "flex";
    fetch(`${urlApi}${inputNombre}`)
      .then((res) => res.json())
      .then((data) => {
        imagenPokemon.src = data.sprites.front_default;
        imagenPokemon.classList.add("animacion");

        nombrePokemonSpan.innerText = data.species.name;
        tipoPokemonSpan.innerText = data.types[0].type.name;
        habilidadPokemonSpan.innerText = data.abilities[0].ability.name;
      })
      .catch((error) => {
        input.style.border = "3px solid red";
        resultado.style.display = "none";
      });
  } else {
    resultado.style.display = "none";
    input.style.border = "3px solid red";
    console.log("error");
  }
});
