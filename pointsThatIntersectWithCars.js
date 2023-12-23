//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// HackerRank: Points that intersect with cars

// You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line.
// For any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending
// point of the ith car.
// Return the number of integer points on the line that are covered with any part of a car.

// eg. nums = [[3,6], [1,5], [4,7]]

function number_of_points(nums) {
	let coordRegistry = {};
	let ansArr = [];
	let max = 0;
	for (let i = 0; i < nums.length; i++) {
		// nums[0] = [3,6]
		let car = nums[i]; // car is an array of 2 integers [3,6]
		let start = car[0]; // 3
		let end = car[1]; // 6
		if (start > max) max = start; // max = 3
		if (end > max) max = end; // max = 6
		coordRegistry[start] = start; // {3: true}
		coordRegistry[end] = end; // {6: true}
	}

	for (let j = 0; j <= max; j++) {
        let index = j.toString();
		if (coordRegistry[index]) ansArr.push(j);
	}
	return ansArr.length;
}

arr = [
	[3, 6],
	[1, 5],
	[4, 7],
];

console.log(number_of_points(arr));