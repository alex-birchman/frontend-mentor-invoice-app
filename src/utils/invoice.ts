const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomAlphabetLetter() {
  return alphabet[(Math.random() * 25) | 0];
}

export function getRandomInvoiceId() {
  const randomIdLetters = Array.from(new Array(2))
    .map(() => getRandomAlphabetLetter())
    .join("");
  const randomIdNumber = Math.floor(Math.random() * 10000);
  return `${randomIdLetters}${randomIdNumber}`;
}
