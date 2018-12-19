module.exports = factorielle;

function factorielle(n){
    return n>0 ? n*factorielle(n-1) : 1;}

