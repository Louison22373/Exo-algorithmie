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
