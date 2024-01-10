// Solution 1 using while loop and substrings
// t complexity = O(n^2 * m)
    // iterates thru characters, & each iteration includes character.slice = O(n*n)
    // * m, bc within the loop, worst case also includes document.slice on each iteration
// s complexity = O(m + n) bc .slice is called on each string = copy is made of each

function generateDocument(characters, document) {
	// input: char string, doc string
	// return a Boolean
	// return true if char string has all the letters needed to match doc
	// return false if doc has more unique chars than char string

	// while loop: if char string still has letters
	while (characters.length > 0) {
		// take char at last index
		let currentChar = characters[characters.length - 1];
		// check if it is in doc
		if (document.includes(currentChar)) {
			// if yes find its index using indexOf
			let index = document.indexOf(currentChar);
			// splice doc to cut out that letter
			document = document.slice(0, index) + document.slice(index + 1);
		}
		characters = characters.slice(0, characters.length - 1);
		// if doc has letters left, return false else return true
	}
	if (document.length > characters.length) return false;
	return true;
}

// valid case
let characters = "abcdefg"
let document = "abcdef"
console.log(generateDocument(characters,document))

// not enough characters
characters = "abc"
document = "abcdef"
console.log(generateDocument(characters,document) == false)

// integers
try {
	console.log(generateDocument(true, document));
	console.log(false)
} catch(error){
	console.log(true)
}

// empty characters
// empty document

// // Solution 2 using a count Hash to compare letter quantities
// function generateDocument(characters, document) { // (car, care)
// 	// create count hash for char string
// 	const countChars = {}; // {A:1}
// 	for (let char of characters) {// r
// 		// if (countChars[char] === undefined) {
// 		// 	countChars[char] = 1;
// 		// } else {
// 		// 	countChars[char] += 1;
// 		// }
//         countChars[char] = ++countChars[char] || 1
// 	}
    
// 	// iterate through doc
// 	for (let char of document) { // e
// 		// if char in doc is in char count hash
// 		if (countChars[char] > 0) {
// 			// key in and decrement value
// 			countChars[char] -= 1;
// 		} else {
// 			// if char in doc is NOT in char count hash
// 			// return false
// 			return false;
// 		}
// 	}
// 	return true;
// }



// // Solution 3 using recursion
// // t complexity = .includes conditional is O(m) and has .slice O(n)
//     // O(n) to traverse entire characters string
//     // * O(m), bc we each time traverse document in .includes
//     // * O(n), bc we also 
// function generateDocument(characters, document) {
// 	// base case
// 	// if characters.length === 0, return whether document has any letters left
// 	if (characters.length === 0) return document.length === 0;
// 	// take the last letter of characters
// 	let checkChar = characters[characters.length - 1];
// 	// check if document has that char
// 	if (document.includes(checkChar)) {
// 		// if yes, splice it out of document
// 		let index = document.indexOf(checkChar);
// 		document = document.slice(0, index) + document.slice(index + 1);
// 	}
// 	// take off the last letter of characters
// 	characters = characters.slice(0, characters.length - 1);
// 	// make recursive call using new characaters and remaining document string
// 	return generateDocument(characters, document);
// }