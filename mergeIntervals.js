// MERGE INTERVALS
// Given an array of intervals where `intervals[i] = [start, end],
// merge all overlapping intervals, and return an array of the non-overlapping
// intervals that cover all the intervals in the input.


intervals = [[1,3],[2,6],[8,10],[15,18]]

function merge_intervals(intervals) {
    let merged_if_applicable = [];
    let queue = intervals;
    while (queue.length > 0) {
        let comparison = queue.shift(); // take off first item // pair of INTs // [1,3]
        for (item in queue) { // iterate through rest of queue // item is a pair of INTs
            if ((comparison[0] >= item[0] && comparison[0] <= item[1])  // check remaining items
                || (comparison[1] >= item[0] && comparison[1] <= item[1])) {
                    let min = comparison[0] < item[0] ? comparison[0] : item[0];
                    let max = comparison[1] > item[1] ? comparison[1] : item[1];
                    let pair = [min,max];
                    merged_if_applicable.push(pair); // add merged array to soln
                    let index = queue.indexOf(item); // find second merged item in the array
                    queue.splice(index, 1); // remove second merged item from array
            }
        } 
    }
    return merged_if_applicable;
}

console.log(merge_intervals(intervals))