// TWO SUM

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  input: ARR of INT, target: INT
//      * unordered array
//  output: two INDICES (of the numbers that add up to target
//  * each input has EXACTLY ONE solution
//  * cannot use an element twice

var twoSum = function (nums, target) {
	ansArr = [];
	for (i = 0; i < nums.length; i++) {
		// IF YOU FIND NO SOLUTION, THIS NEEDS TO BE I < NUMS.LENGTH - 1 OR ELSE J WILL EXIT THE ARRAY
		// nums[0] = 2
		for (j = i + 1; j < nums.length; j++) {
			// nums[1] = 7
			if (nums[i] + nums[j] === target) {
				ansArr.push(i, j);
				return ansArr;
			}
		}
	}
	return ansArr;
};

var twoSum = function (nums, target) {
	ansArr = [];
	for (i = 0; i < nums.length - 1; i++) {
		if (nums[i] + num[i + 1] === target) {
			ansArr.push(i, j);
			return ansArr;
		}
	}
	return ansArr;
};


