function invertBinaryTree(tree) {
	// Create an empty queue to hold the root node
	const nodeQueue = [tree];
	// Start traversing the tree --
	// until the queue is empty, do the following:
	while (nodeQueue.length > 0) {
		// Shift off the first element and store it in a variable
		let currentNode = nodeQueue.shift();
		// If the currentNode has a left node, add to queue
		if (currentNode.left) nodeQueue.push(currentNode.left);
		// if the currentNode has a right node, add to queue
		if (currentNode.right) nodeQueue.push(currentNode.right);
		// Create intermediary to store its left node
		let intermediary = currentNode.left;
		// Switch left and right nodes
		currentNode.left = currentNode.right;
		currentNode.right = intermediary;
	}
}

// This is the class of the input binary tree.
class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
