// This is a for loop.

function theBeatlesPlay () {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  let statement = [];

for (let i = 0; i < musicians.length; i++) {
      statement.push(musicians[i] + ' plays ' + instruments[i]);
   }
   return statement;
}

// This is a while loop.
function johnLennonFacts () {
  const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]
}

let i = 0;
while (i < facts.length) {
  johnLennonFacts.push(facts[i] += "!!!");
  i++;
  console.log(johnLennonFacts);
}








