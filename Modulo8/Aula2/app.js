const users = [
  { name: "Ada Lovelave", premium: true },
  { name: "Grace Hopper", premium: false },
  { name: "Alan Turing", premium: true },
  { name: "Linus Torvalds", premium: false },
  { name: "Margaret Hamilton", premium: false },
]

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);