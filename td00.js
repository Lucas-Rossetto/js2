/* TD00 - EasySort

Le but de cet exercice est de vous familiariser avec le format des TDs de ce cours et de commencer a prendre en main votre architecture Node/JavaScript.

Dans ce premier TD, vous devez terminer d'écrire une fonction de classement (easySort) permettant de trier le tableau passé en paramètre.

Il est impératif de n'éditer que le code présent dans la 'TD Part'.

La testing part ne doit pas être modifiée ! 
Le code doit être réalisé uniquement en ES5 pour cette partie du cours (pas de .sort(...) par exemple) !

*/

/* TD Part */
function easySort(array) {

    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;



}

/* Testing Part */
const array = []

for (let i = 0; i < 100; i++) {
    array.push(Math.floor((Math.random() * 10)))
}

easySort(array)
//console.log(array)

let lastItem = 0

for (let i = 0; i < array.length; i++) {
    if (lastItem > array[i]) {
        console.log('TD00 :: Failed')
        process.exit()
    } else {
        lastItem = array[i]
    }
}
console.log('TD00 :: Success')