    var apiUrl = "http://fizal.me/pokeapi/api/v2/id/";
    let grovyle;
    let lugia;
    let tyranitar;
    let name1;
    let imagesrc1;
    let ability1;
    let attack1;
    let defence1;
    let hp1;
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
        display() {
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
    class Trainer {
      constructor(name, url, address, classurl, classtext){
        this.name = name;
        this.url = url;
        this.address = address;
        this.classurl = classurl;
        this.classtext = classtext;
        this.pokemon = [];
      }
      get(captured){
       this.pokemon.push(captured);
        // let i = [];
        // for(let i=0; i<this.pokemon.length; i++){
        // let string = i;
        // return this.pokemon[i];
      }

      all(){
        return this.pokemon;
      }
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

    axios.get(apiUrl + "249" + ".json")
        .then(pikachu);
        function pikachu(response) {
            name1 = response.data.forms[0].name;
            imagesrc1 = response.data.sprites.front_default;
            ability1 = response.data.abilities[0].ability.name;
            attack1 = response.data.stats[4].base_stat;
            defence1 =response.data.stats[3].base_stat;
            hp1 = response.data.stats[5].base_stat;
              lugia = new Pokemon(name1, imagesrc1, ability1, attack1, defence1, hp1, 2);
              lugia.display();
              Eli.get(lugia);
            }
axios.get(apiUrl + "254" + ".json")
  .then(john);
      function john(response) {
      name1 = response.data.forms[0].name;
      imagesrc1 = response.data.sprites.front_default;
                ability1 = response.data.abilities[0].ability.name;
                attack1 = response.data.stats[4].base_stat;
                defence1 =response.data.stats[3].base_stat;
                hp1 = response.data.stats[5].base_stat;
                   grovyle = new Pokemon(name1, imagesrc1, ability1, attack1, defence1, hp1, 1);
                  grovyle.display();
                  Eli.get(grovyle);
                }
axios.get(apiUrl + "248" + ".json")
                .then(mike);
                function mike(response) {
                    name1 = response.data.forms[0].name;
                    imagesrc1 = response.data.sprites.front_default;
                    ability1 = response.data.abilities[0].ability.name;
                    attack1 = response.data.stats[4].base_stat;
                    defence1 =response.data.stats[3].base_stat;
                    hp1 = response.data.stats[5].base_stat;
                    tyranitar = new Pokemon(name1, imagesrc1, ability1, attack1, defence1, hp1, 3);
                    Eli.get(tyranitar);
                    tyranitar.display();
                }




Eli.display();
