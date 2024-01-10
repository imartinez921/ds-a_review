// ================================================================
// Iterate through input array WITHOUT any sorting
// O(n) time and O(1) space
function findThreeLargestNumbers(array) {
	// Input: Array of at least 3 integers
	// May be positive or negative
	// Do NOT sort input array

	// array = [141, 1, -7, 17]
	let largestThree = [-Infinity, -Infinity, -Infinity]; 
	// Strategy:
	// Have placeholder answer array
	// Keep answer array sorted
	// Iterate through input array
	for (let i = 0; i < array.length; i++) {
		// i = 1; 1 < 4 => True
		let ele = array[i]; // array[1] = 1;
		// Helper function that takes a number and the answer array
		// and compares each index and returns modified array
		compareNumtoArrayItems(ele, largestThree); // 1, [141]
	}
	// Return: Array containing the 3 largest integers in the array
	return largestThree;
}

function compareNumtoArrayItems(ele, array) {
	if (ele > array[2]) {
		shiftAndUpdate(array, ele, 2);
	} else if (ele > array[1]) {
		shiftAndUpdate(array, ele, 1);
	} else if (ele > array[0]) {
		shiftAndUpdate(array, ele, 0);
	}
	return array;
}

function shiftAndUpdate(array, ele, idx) {
	for (let i = 0; i <= idx; i++) {
		// start at first ele and include last ele
		if (i === idx) {
			array[i] = ele;
		} else {
			array[i] = array[i + 1];
		}
	}
	return array;
}

// ================================================================
// Iterate through input array, always sorting answer array
// O(n) time bc array.length = 3 would end up much smaller than input array
// O(1) space bc we are only creating array.length = 3

function findThreeLargestNumbers(array) {
	// Input: Array of at least 3 integers
	// May be positive or negative
	// Do NOT sort input array

	// array = [141, 1, -7, 17]
	let largestThree = [array[0]]; // [141]
	// Strategy:
	// Have placeholder answer array
	// Keep answer array sorted
	// Iterate through input array
	for (let i = 1; i < array.length; i++) {
		// i = 1; 1 < 4 => True
		let ele = array[i]; // array[1] = 1;
		// Helper function that takes a number and the answer array
		// and compares each index and returns modified array
		largestThree = compareNumtoArrayItems(ele, largestThree); // 1, [141]
	}
	// Return: Array containing the 3 largest integers in the array
	return largestThree;
}

function compareNumtoArrayItems(ele, array) {
	array.push(ele);
	const numericOrder = (a, b) => a - b;
	array.sort(numericOrder);
	console.log(array);
	return array.length > 3 ? array.slice(1, array.length) : array;
}
