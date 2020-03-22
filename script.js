var res;
const P = new Pokedex.Pokedex();
var query = prompt("Pokemon Name:");
P.getPokemonByName(query).then(function (res) {
  $("h1#name").html(res.name.toUpperCase())
  $("div#image").append(`<img src="${res.sprites.front_default}"</img>`)
  res.moves.forEach(move => {
    P.getMoveByName(move.move.name).then((res) => {
      $("ul#moves").append(`<div class="card"><h1>${move.move.name}</h1><p>${res.effect_entries[0].effect}</p></div>`)
    });
  });
  res.abilities.forEach(ability => {
    P.getAbilityByName(ability.ability.name).then((res) => {
      $("ul#abilities").append(`<div class="card"><h1>${ability.ability.name}</h1><p>${res.effect_entries[0].effect}</p></div>`)
    });
  });
});

