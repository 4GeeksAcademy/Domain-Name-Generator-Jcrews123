const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".io"];

const domain = [];

for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
  for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
    for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
      for (let extensionsIndex = 0; extensionsIndex < extensions.length; extensionsIndex++)
        domain.push(
          `${pronoun[pronounIndex]}${adj[adjIndex]}${noun[nounIndex]}${extensions[extensionsIndex]}`
        );
    }
  }
}
console.log(domain);

// for (const domain of domains) {
//   console.log(domain + ".com");
// }
