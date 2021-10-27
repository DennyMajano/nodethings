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


console.log(esPalindromo3("Ali tomo tila"));
