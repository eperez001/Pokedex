var apiUrl = "http://fizal.me/pokeapi/api/v2/id/";

    let name1;
    let imagesrc1;
    let ability1;
    let attack1;
    let defence1;
    let hp1;
        axios.get(apiUrl + "249" + ".json")
        .then(picachu);
        function picachu(response) {
            name1 = response.data.forms[0].name;
            imagesrc1 = response.data.sprites.front_default;
            ability1 = response.data.abilities[0].ability.name;
            attack1 = response.data.stats[4].base_stat;
            defence1 =response.data.stats[3].base_stat;
            hp1 = response.data.stats[5].base_stat;

              let lugia = new Pokemon(name1, imagesrc1, ability1, attack1, defence1, hp1, 2);
              lugia.execute();
            }
            axios.get(apiUrl + "253" + ".json")
            .then(pika);
            function pika(response) {
                name1 = response.data.forms[0].name;
                imagesrc1 = response.data.sprites.front_default;
                ability1 = response.data.abilities[0].ability.name;
                attack1 = response.data.stats[4].base_stat;
                defence1 =response.data.stats[3].base_stat;
                hp1 = response.data.stats[5].base_stat;

                  let pika = new Pokemon(name1, imagesrc1, ability1, attack1, defence1, hp1, 1);
                  pika.execute();
                }
                axios.get(apiUrl + "248" + ".json")
                .then(raichu);
                function raichu(response) {
                    name1 = response.data.forms[0].name;
                    imagesrc1 = response.data.sprites.front_default;
                    ability1 = response.data.abilities[0].ability.name;
                    attack1 = response.data.stats[4].base_stat;
                    defence1 =response.data.stats[3].base_stat;
                    hp1 = response.data.stats[5].base_stat;

                      let raichu = new Pokemon(name1, imagesrc1, ability1, attack1, defence1, hp1, 3);
                      raichu.execute();
                    }
class Pokemon {
  constructor(name, image, ability, attack, defence, hp, number) {
    this.name = name;
    this.abilities = ability;
    this.image = image;
    this.attack = attack;
    this.defence = defence;
    this.hp = hp;
    this.number = number;
  }
    execute() {
      var pokemonName = document.querySelector(".pokemon-name" + this.number);
      let image = document.getElementById("pokemon-image" + this.number);
      let abilities = document.getElementById("pokemon-abilities" + this.number);
      let attack = document.getElementById("pokemon-attack" + this.number);
      let defence = document.getElementById("pokemon-defence" + this.number);
      let hp = document.getElementById("pokemon-hp" + this.number);
      pokemonName.innerHTML = this.name;
      image.src = this.image;
      abilities.innerHTML = this.abilities;
      attack.innerHTML = this.attack;
      defence.innerHTML = this.defence;
      hp.innerHTML = this.hp

    }
}
// axios.get(apiUrl + "249" + ".json")
// .then(pika);
// function pika(response) {
//     name1 = response.data.forms[0].name;
//     imagesrc1 = response.data.sprites.front_default;
//     ability1 = response.data.abilities[0].ability.name;
//     attack1 = response.data.stats[4].base_stat;
//     defence1 =response.data.stats[3].base_stat;
//     hp1 = response.data.stats[5].base_stat;
//
//       let pika = new Pokemon(name1, imagesrc1, ability1, attack1, defence1, hp1, 2);
//       pikas.execute();
