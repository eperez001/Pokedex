var apiUrl = "http://fizal.me/pokeapi/api/v2/id/";
    var input = document.querySelector(".pokemon-input");
    var pokemonName = document.querySelector(".pokemon-name");
    var pokemonImage = document.querySelector(".pokemon-image");
    var pokemonAbilities = document.querySelector(".pokemon-abilities")
    var pokemonMoves = document.querySelector(".pokemon-moves")

    function getPokemonData() {
        axios.get(apiUrl + input.value + ".json")
        .then(function (response) {
            pokemonName.innerHTML = response.data.forms[0].name;
            pokemonImage.src = response.data.sprites.front_default;
          for(let j =0; j<response.data.abilities.length; j++){
              let text = document.createElement('li');
              text.innerHTML= response.data.abilities[j].ability.name;
              pokemonAbilities.appendChild(text);}

            for(let j =0; j<4; j++){
              let text = document.createElement('li');
              text.innerHTML= response.data.moves[j].move.name;
              console.log(response.data.moves[j].move.name)
              pokemonMoves.appendChild(text);
            }
        })
        .catch(function (error) {
          console.log(error)
            pokemonName.innerHTML = "(An error has occurred.)";
            pokemonImage.src = "";
        });
    }

    var button = document.querySelector(".pokemon-button");
    button.addEventListener("click", getPokemonData);

class Pokemon{
  constructor(hp, name, attack, defence){
    this.hp = hp;
    this.name = name;
    this.attack = attack;
    this.defence = defence;
    this.abilities = abilitiy;
  }
}


class Trainer{
  constructor(){
  }
  all(){

  }
  get(pokemon){

  }
}
