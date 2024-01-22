const phaseScores = [
  { name: "Vinicius Costa", score: 337 },
  { name: "Roger Melo", score: 43 },
  { name: "Alfredo Braga", score: 234 },
  { name: "Pedro H. Silva", score: 261 },
  { name: "Ana Paula Rocha", score: 491 },
  { name: "Roger Melo", score: 137 },
]

const rogerScore = phaseScores.reduce((acc, phaseScore) => {
  if(phaseScore.name === "Roger Melo") {
    acc += phaseScore.score;
  }

  return acc;
}, 0)

console.log(rogerScore);