function removeChar(str) {
  // menghilangkan karakter pertama dan terahir
  return str.slice(1, -1);
}

console.log(removeChar("eloquent"), "loquen");
console.log(removeChar("country"), "ountr");
console.log(removeChar("person"), "erso");
console.log(removeChar("place"), "lac");
console.log(removeChar("ooopsss"), "oopss");

console.log(removeChar("ab"), "");
console.log(removeChar("xyz"), "y");
