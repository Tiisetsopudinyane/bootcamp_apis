export default function shortestWord(string) {
  const words = string.split(' '); // split the string into an array of words
  let shortest = words[0]; // initialize the shortest word to the first word in the array

  // iterate over each word in the array and update the shortest word if a shorter word is found
  for (let i = 1; i < words.length; i++) {
    if (words[i].length <= shortest.length) {
      shortest = words[i];
    }
  }

  return shortest;
}
