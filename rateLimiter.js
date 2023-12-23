// You need to write a function that can only be called at most N times within any 1 minute window. 
// For example, it can be called at most 10 times in a minute. If the function is called 
// more than N times it should throw an exception. The function should have expected O(1) performance.
// https://malisper.me/an-algorithm-for-passing-programming-interviews/


// input: N, for frequency called within 1-minute window
// needs to keep a 1-minute timer
// if timer is hit, reset
// needs a counter to use N
// if counter = 10, throw exception
// increment counter every time function is called
// O(1) = linked list (stack or queue)
// needs to use its own input iteratively (no recursion) - use if conditions

let queue = [];

function rateLimiter (N=1) {
  if (queue.length >= N) throw Error("Too many calls");
  let now = new Date();
  queue.push(now);
  for (item in queue) {
    console.log(now-item)
    if (now - item > 60000) queue.shift();
  }
  console.log(queue);
}

rateLimiter(1)


