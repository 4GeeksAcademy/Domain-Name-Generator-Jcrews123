const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".io"];

const domain = [];

for (let index = 0; index < pronoun.length; index++) {
  for (let secondIndex = 0; secondIndex < adj.length; secondIndex++) {
    for (let thirdIndex = 0; thirdIndex < noun.length; thirdIndex++) {
      for(let fourthIndex = 0; fourthIndex < extensions.length; fourthIndex++)
      domain.push(`${pronoun[index]}${adj[secondIndex]}${noun[thirdIndex]}${extensions[fourthIndex]}`);
    }
  }
}
console.log(domain);


// for (const domain of domains) {
//   console.log(domain + ".com");
// }
