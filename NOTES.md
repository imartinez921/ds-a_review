- [Generate Document](#generate-document)
  - [Solution 1 using while loop and substrings](#solution-1-using-while-loop-and-substrings)
  - [Solution 2 using a count Hash to compare letter quantities](#solution-2-using-a-count-hash-to-compare-letter-quantities)
  - [Solution 3 using recursion](#solution-3-using-recursion)
- [Invert Binary Tree](#invert-binary-tree)
- [Balanced Brackets](#balanced-brackets)
- [Points That Intersect With Cars](#points-that-intersect-with-cars)
- [Merge Intervals](#merge-intervals)
- [Rate Limiter](#rate-limiter)
- [Two Sum](#two-sum)


## [Generate Document](generateDocument.js)
### Solution 1 using while loop and substrings
- BEWARE: What is the conditional for your while loop?
- t complexity = `O(n**2 * m)`
  - iterates thru characters, & each iteration includes character.slice = `n*n`
  - `* m`, bc within the loop, worst case also includes document.slice on each iteration
- s complexity = `O(m + n)` bc .slice is called on each string = copy is made of each
### Solution 2 using a count Hash to compare letter quantities
- Consider using the OR operator when dealing with undefined values
  - Evalutes to the first truthy value or the last value if all are falsy
  - Here, if value is undefined, left side will evaluate to NaN; will evaluate to right side
```
for (let x of characters) {
    characterCount[x] = ++characterCount[x] || 1;
}
```
- BEWARE: `for loops` for objects VS strings
  - use OF to define the KEY at each item 
  - use IN to define the INDEX at each item when iterating each index for 
  - **`for (let ele of string)` VS `for (let index IN string)`**
- t complexity = `O(n + m)`
  - Don't forget to keep a variable for each input
- s complexity = `O(c)` where c is the number of unique chars in characters string
### Solution 3 using recursion
- **N.B. .splice overwrites the original array!**
  - `array.splice(index, howmany items to remove, any, items, to, add)`
- **N.B. Splice is an ARRAY METHOD, not for strings!**

## Invert Binary Tree
- YOU MUST WORK ON THE ROOT NODE FIRST!
  - Wrap the root node in a queue and then start your queue loop
- Not sure how long I took because of this stupid stopwatch resetting 😅 

## Balanced Brackets
-   25mins, but I couldn't troubleshoot my solution, which was failing
    -   BEWARE THE LOGIC OF && vs ||
-   If you .pop an empty array, it returns undefined
-   Be careful the punctuation inside the set-up for a for loop

## Points That Intersect With Cars
- UNSOLVED

## Merge Intervals
- UNSOLVED

## Rate Limiter
- UNSOLVED

## Two Sum
- [ ] SOLVE in Python
  - [ ] DO IT WITH A HASH MAP in python
- [ ] Review double for loop
- [ ] CHALLENGE: what about using MAP WITH INDEX