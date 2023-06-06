const pokeName = document.getElementById("name");
const number = document.getElementById("number");
const imgSrc = document.getElementById("imageSrc");
const charNum = document.getElementById("charNum");
const button = document.getElementById("butto");

button.onclick = () => {
  getAPI();
};

async function getAPI() {
  if (charNum.value) {
    if (charNum.value > 1010) {
      pokeName.innerHTML = "There are only 1,010 Pokemon";
      return;
    }
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${charNum.value}`
    );
    const data = await response.json();
    updatePage(data, charNum.value);
  } else {
    const rndNum = Math.floor(Math.random() * 1010);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rndNum}`);
    const data = await response.json();
    updatePage(data, rndNum);
  }
}

function updatePage(data, num){
  console.log(data);
  pokeName.innerHTML = data.name.toUpperCase();
  number.innerHTML = `ID: ${num}`;
  imgSrc.src = data.sprites.other.home.front_default;
  charNum.value = "";
}
