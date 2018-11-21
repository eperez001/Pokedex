    var apiUrl = "http://fizal.me/pokeapi/api/v2/id/";
    let grovyle;
    let lugia;
    let tyranitar;
    let name1;
    let imagesrc1;
    let ability1;
    let attack1;
    let defense1;
    let hp1;

//


class Pokemon {
  constructor(name, image, ability, attack, defense, hp, number) {
    this.name = name;
    this.abilities = ability;
    this.image = image;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.number = number;
    }
    display() {
      var pokemonName = document.querySelector(".pokemon-name" + this.number);
      let image = document.getElementById("pokemon-image" + this.number);
      let abilities = document.getElementById("pokemon-abilities" + this.number);
      let attack = document.getElementById("pokemon-attack" + this.number);
      let defense = document.getElementById("pokemon-defense" + this.number);
      let hp = document.getElementById("pokemon-hp" + this.number);
        pokemonName.innerHTML = this.name;
        image.src = this.image;
        abilities.innerHTML = this.abilities;
        attack.innerHTML = this.attack;
        defense.innerHTML = this.defense;
        hp.innerHTML = this.hp
  }
}
class Trainer {
  constructor(name, url, address, classurl, classtext){
    this.name = name;
    this.url = url;
    this.address = address;
    this.classurl = classurl;
    this.classtext = classtext;
    this.pokemon = [];
  }
  all(){
    return this.pokemon;
  }
      get(name){

         for(let i=0; i < this.pokemon.length; i++){
           if (name === this.pokemon[i].name){
          return this.pokemon[i];

        }}}
      display(){
        let myimage = document.getElementById('jack')
        myimage.src = this.url;
        let myname = document.getElementById('eli')
        myname.innerHTML = this.name;
        let myaddress = document.getElementById('address')
        myaddress.innerHTML = this.address;
        myimage.className = this.classurl;
        myaddress.className = this.classtext;
        myname.className = this.classtext;
    }
  }
    let Eli = new Trainer("Eli", "ace.png", "Palettown", "animated fadeInLeftBig", "text");
function appear(){
    axios.get(apiUrl + "382" + ".json")
        .then(pikachu);
        function pikachu(response) {
            name1 ="Name: " + response.data.forms[0].name;
            imagesrc1 = response.data.sprites.front_default;
            ability1 ="Ability: " + response.data.abilities[0].ability.name;
            attack1 = "Attack: " + response.data.stats[4].base_stat;
            defense1 ="Defence: " + response.data.stats[3].base_stat;
            hp1 = "Hp: " + response.data.stats[5].base_stat;
              lugia = new Pokemon(name1, imagesrc1, ability1, attack1, defense1, hp1, 2);
              lugia.display();
              Eli.pokemon.push(lugia);

            }
}
function bye() {
axios.get(apiUrl + "383" + ".json")
  .then(john);
      function john(response) {
      name1 ="Name: " + response.data.forms[0].name;
      imagesrc1 = response.data.sprites.front_default;
                ability1 = "Ability: " + response.data.abilities[0].ability.name;
                attack1 ="Attack: " + response.data.stats[4].base_stat;
                defense1 ="Defense: " + response.data.stats[3].base_stat;
                hp1 ="Hp: " + response.data.stats[5].base_stat;
                   grovyle = new Pokemon(name1, imagesrc1, ability1, attack1, defense1, hp1, 1);
                  grovyle.display();
                  Eli.pokemon.push(grovyle);
                }
}
function hello(){
axios.get(apiUrl + "384" + ".json")
                .then(mike);
                function mike(response) {
                    name1 ="Name: " + response.data.forms[0].name;
                    imagesrc1 = response.data.sprites.front_default;
                    ability1 ="Ability: " + response.data.abilities[0].ability.name;
                    attack1 ="Attack: " + response.data.stats[4].base_stat;
                    defense1 ="Defense: " + response.data.stats[3].base_stat;
                    hp1 ="Hp: " + response.data.stats[5].base_stat;
                    tyranitar = new Pokemon(name1, imagesrc1, ability1, attack1, defense1, hp1, 3);
                    tyranitar.display();
                    Eli.pokemon.push(tyranitar);
                }
}



Eli.display();
let lug = document.getElementById('ball2');
lug.addEventListener("click", appear);
let dial = document.getElementById('ball1');
dial.addEventListener("click", bye);
let grov = document.getElementById('ball3');
grov.addEventListener("click", hello);
