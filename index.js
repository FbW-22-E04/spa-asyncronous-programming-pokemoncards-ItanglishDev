

const inputName = document.querySelector('input')
const button = document.querySelector('button')
const name = document.querySelector('.card-title')
let pokeName = inputName.value

let dataGlobal = {}

async function getData() {


  try {

    const result = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName)

    const data = await result.json()

    console.log(data.stats[0].base_stat);

    addDom(data)

  } catch (error) {

  }

}

getData()

inputName.addEventListener('input', () => {
  e.result.name = pokeName
  // console.log(pokeName);
})
console.log(pokeName.target);

// hp = data.stats[0].base_stat
// attack = data.stats[1].base_stat
// defense = data.stats[2].base_stat
// special attack = data.stats[3].base_stat
// special defense = data.stats[4].base_stat
// speed = data.stats[5].base_stat
// abilities 1 = data.abilities[0].ability.name
//  abilities 2 = data.abilities[1].ability.name

// name.textContent = data