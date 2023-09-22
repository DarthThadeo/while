// JavaScript source code
"use strict"

let aT = 3;// declarer la variable aT egal à 3
while (aT < 9) {// tant que a est plus petit que 9
    aT++
    if (aT == 7) {// si a est egal a 7 on revient au debut de la boucle
        continue
    }
    if (aT == 8) {// si a est egal à 8 on arrete la boucle
        break
    }
    console.log(aT);
}
console.log('Jai cassé la boucle au bout de ' + aT + " tours");//la console annonce à quelles tours la boucle c'est