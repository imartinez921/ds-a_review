// Running a count and iterating for half the count
// O(n) time, O(1) space

function middleNode(linkedList) {
	let count = 0;
	let currentNode = linkedList;

	while (currentNode) {
		count++;
		currentNode = currentNode.next;
	}

	let midIdx = Math.floor(count / 2); // 10/2 = 5
	let midNode = linkedList;
	for (let i = 1; i <= midIdx; i++) {
		midNode = midNode.next;
	}

	return midNode;
}

// Storing nodes in a hash map for reference
// O(n) time bc iterating once
// O(n) space bc storing a hash relative to size of linkedList
//  I would choose this solution if we had to execute an action at any given node

function middleNode(linkedList) {
	// Input: linked list with at least one node
	let node = linkedList;
	// If only one node, return it
	if (node.next === null) return node;
	// Create hash to give index to each node
	const nodesHash = {};
	// Iterate linked list once. Also log the length
	let length = 0;
	while (node) {
		length++;
		nodesHash[length] = node;
		node = node.next;
	}
	// If even length, return value at middle index + 1
	let midIdx;
	if (length % 2 === 0) {
		midIdx = length / 2 + 1;
		return nodesHash[midIdx];
	} else {
		// If odd, return value at middle index
		midIdx = Math.ceil(length / 2);
		return nodesHash[midIdx];
	}
	// Return: Middle node, or second node in an even length list
}



// Use 2 pointer approach where fast pointer iterates through list
// at twice the speed of slow pointer, so that when fast pointer
// reaches the end of the list, the slow pointer would at that point be halfway.
// O(n) time and O(1) space

function middleNode(linkedList) {
    // iterate through linkedlist with two pointers
    let slowPointer = linkedList;
    let fastPointer = linkedList;

    // Stop when either the next node OR the current node is null (covers both even & odd)
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer;

}
