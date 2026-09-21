//exo 1;2;3;4;5;6 déja exécuté avant 
//Exo 7 
const nombres = [12, -5, 8, -3, 0, 42, -17, 9, -1];
const positifs = [];
const negatifs = [];
nombres.forEach(nombre => {
  if (nombre >= 0) {
    positifs.push(nombre); 
  } else {
    negatifs.push(nombre); 
  }
});
console.log("Tableau des nombres positifs :", positifs);
console.log("Tableau des nombres négatifs :", negatifs);

//Exo 8
let listes = [];

    
//Exo 9
const monMot = ("cadeau")
const motInverse = "cadeau".split('').reverse().join('');
console.log(motInverse)


//partie 2 exo
//exo 1 
const max = 5;

for (let i = 1; i <= max; i++) {
  console.log('*'.repeat(i));
}

//exo 2
const superHeros = ["Batman", "Spider-Man", "Wonder Woman", "Iron Man"];
superHeros.forEach(function(nom) {
    console.log("Je suis fan de " + nom);
});
//exo 3
let compte = 10
while (compte >= 0) {
    console.log(compte);
    compte--;
}

console.log("Décollage !")

