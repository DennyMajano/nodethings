//version 1 NOOOO
function esPalindromo(palabra) {
  let esPalindromo = true;
  for (let i = 0; i < palabra.length / 2; i++) {
    if (palabra[i] !== palabra[palabra.length - i - 1]) {
    console.log(palabra[i],palabra[palabra.length - i - 1])
      esPalindromo = false;
      break;
    }
  }
  return esPalindromo;
}
//version 2  NOOOOOO
function esPalindromo2(palabra){
    const palabraReversa = palabra.split("").reverse().join("");
    return palabraReversa === palabra? "es palindromo": "no es palindromo"
}

//version 3 YEESSS
function esPalindromo3(palabra){
    palabra = palabra.replace(/\s/g,"").toLowerCase();
    const palabraReversa = palabra.split("").reverse().join("");
    return palabraReversa === palabra? "es palindromo": "no es palindromo" 
}

function esPermutacionDePalindromo(cadena){
    let letras = new Set();
    cadena = cadena.replace(/\s/g,"").toLowerCase();
    for(letra of cadena){
        if(letras.has(letra)) letras.delete(letra);
        else letras.add(letra)
    }

    return letras.size <=1?"Puede ser permutación de palindromo": "No puede ser permutación de palindromo"
}

console.log(esPermutacionDePalindromo("Ali tomo tila"));
