// O( n log n) time due to the sorting function
// O(1) space due to mutating array in place

function minimumWaitingTime(queries) {
	// Sort from small to large so other queries don't have to wait long times
	queries.sort((a, b) => a - b);

	// queries = [2, 3]
	// Sum total waiting time considering the entire cumutative quantity
	// Multiply each element by how many elements come after it
	// Disregarded last ele since nothing after it / nothing has to wait for it
	let totalWaitingTime = 0; // 2
	for (let i = 0; i < queries.length - 1; i++) {
		// i = 1; 1 < 1 => False
		let currentEle = queries[i]; // currentEle = queries[0] = 2
		let remainingEles = queries.length - 1 - i; // remainingEles = (2 - 1) - 0 = 1;
		totalWaitingTime += currentEle * remainingEles; // 0 + (2*1) = 2
	}

	return totalWaitingTime;
}

// Using reduce function
function minimumWaitingTime(queries) {
	const numericOrder = (a, b) => a - b;

	const totalWaitTime = queries
		.sort(numericOrder)
		.reduce((totalWait, ele, idx) => {
			let remainingEles = queries.length - idx - 1;
			return totalWait + ele * remainingEles;
		}, 0);
	return totalWaitTime;
}