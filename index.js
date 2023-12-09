let uniqueMeats = ['beaf','meat','pork','chicken','turkey','dragon']
let uniqueVegies = ['brocli','cauliflower','spinich','carrot']
let uniqueDeserts = ['cupcake','applepie','pudding','muffin']

uniqueMeats.pop()
uniqueVegies.pop()

let string = uniqueDeserts[0]

let mondayMenu = uniqueMeats.concat(uniqueVegies).concat(uniqueDeserts)

console.log(mondayMenu)