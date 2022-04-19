function scuberGreetingForFeet(distance) {
  // Write your code here!
  if (distance <= 400) {
    return 'This one is on me!'
  } else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (distance > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (true) {
    case tip === 'generous': return "Thank you so much."
      break
    case tip === 'not as generous': return "Thank you."
      break
    case tip === 'thanks for everything': return "Bye."
  }
}


console.log(scuberGreetingForFeet(2300))
console.log(ternaryCheckCity('NYC'))
console.log(switchOnCharmFromTip('not as generous'))