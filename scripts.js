/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxzþ'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = split(str);
  if (words.length === 0) {
    return '';
  }

  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.assert(longest('halló heimur') === 'heimur', 'longest: Skilar lengsta orðinu');
console.assert(longest('bleeh blaah') === 'bleeh', 'longest: Skilar firsta lengsta orðinu þegar tvö orð eru jafn löng');

function shortest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = split(str);
  if (words.length === 0) {
    return '';
  }

  let shortestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }
  return shortestWord;
}
console.assert(shortest('halló heimur') === 'halló', 'shortest: Skilar lengsta orðinu');
console.assert(longest('blooh bliih') === 'blooh', 'shortest: Skilar firsta stysta orðinu þegar tvö orð eru jafn löng');

function reverse(str) {
  if (!isString(str)) {
    return null;
  }

  if (str.length === 0) {
    return '';
  }

  return str.split('').reverse().join('');
}
console.assert(reverse('abc') === 'cba', 'reverse: Snýr strengnum við');
console.assert(reverse('  ') === '  ', 'reverse: Snýr tómum streng við án breytinga');

function palindrome(str) {
  if (!isString(str)) {
    return false;
  }

  if (str.length === 0) {
    return false;
  }

  const normalStr = str.toLowerCase().replace(/\s+/g, '');
  const reverseStr = reverse(str.toLowerCase().replace(/\s+/g, ''));

  return normalStr === reverseStr;
}
console.assert(palindrome('anna') === true, 'palindrome: Skilar true fyrir palindrome');
console.assert(palindrome('abc') === false, 'palindrome: Skilar false ef ekki palindrome');

function vowels(str) {
  if (!isString(str)) {
    return 0;
  }

  let vowelCount = 0;
  for (const char of str.toLowerCase()) {
    if (VOWELS.includes(char)){
      vowelCount++;
    }
  }
  return vowelCount;
}
console.assert(vowels('halló') === 2, 'vowels: Skilar fjölda sérhljóða');
console.assert(vowels('bcdfgh') === 0, 'vowels: Skilar 0 ef engir sérhljóðar');

function consonants(str) {
  if (!isString(str)) {
    return 0;
  }

  let consonantCount = 0;
  for (const char of str.toLowerCase()) {
    if (CONSONANTS.includes(char)){
      consonantCount++;
    }
  }
  return consonantCount;
}
console.assert(consonants('halló') === 3, 'consonants: Skilar fjölda samhljóða');
console.assert(consonants('aeiou') === 0, 'consonants: Skilar 0 ef engir samhljóðar');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert("Sælir! Þetta forrit lest inn strengi og gefur þér upplýsingar um þá.\nSláðu inn streng og fáðu upplýsingar um lengsta og stysta orðið, öfugan streng, fjölda sérhljóða og samhljóða og hvort strengurinn sé palindrome.");

  const input = prompt("Sláðu inn streng:");
  if (input === null || input.trim() === "") {
    return;
  }
  const longestWord = longest(input);
  const shortestWord = shortest(input);
  const reverseStr = reverse(input);
  const vowelCount = vowels(input);
  const consonantCount = consonants(input);
  const isPalindrome = palindrome(input);

  let results = `Niðurstöður fyrir strenginn "${input}" eru:\n\n`;
  results += `Lengsta orðið: ${longestWord}\n`;
  results += `Stysta orðið: ${shortestWord}\n`;
  results += `Öfugur strengur: ${reverseStr}\n`;
  results += `Fjöldi sérhljóða: ${vowelCount}\n`;
  results += `Fjöldi samhljóða: ${consonantCount}\n`;
  results += `Er palindrome?: ${isPalindrome}\n`;

  alert(results);
  
  const again = confirm("Viltu prófa aftur?");
  if (again) {
    start()
  } else {
    alert("Takk fyrir mig!!!");
  }
}
