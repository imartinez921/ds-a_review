
function balancedBrackets(string) {
	// Create a cipher object for each bracket pair as the answer key
	const pairedHash = {
		"(": ")",
		"[": "]",
		"{": "}",
	};

	// Create a stack for open brackets
	const stack = []; // {
	const openers = Object.keys(pairedHash);
	const closers = Object.values(pairedHash);

	// For loop through the string arg
	for (let i = 0; i < string.length; i += 1) {
		// {
		let char = string[i]; // {

		// If character is not in Object.values or Object.keys, discard it
		if (!openers.includes(char) && !closers.includes(char)) continue;

		// If character is an opener, add to stack
		if (openers.includes(char)) {
			// true
			stack.push(char);
		} else if (closers.includes(char)) {
			// If the character is a closing bracket, check it against the last in the stack
			let last = stack[stack.length - 1];
			if (pairedHash[last] === char) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	if (stack.length === 0) return true;
	return false;
}

balancedBrackets("()[]{}{");

// N.B. The difference between && and || operators