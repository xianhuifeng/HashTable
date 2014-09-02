/*! HashTable v0.0.0 - MIT license */
'use strict';

var HashTable = function (maxLength) {
	var list = new DoublyLinkList();
	this._max = maxLength;
	this.storage = new Array(this._max);

	for (var i = 0; i < this.storage.length; i++) {
		this.storage[i] = list;
	};
};

HashTable.prototype.insert = function(k,v) {
				
};

HashTable.prototype.retrieve = function(k) {
		
};

HashTable.prototype.remove = function(k) {
	// body...
};


var DoublyLinkList = function () {
	this.head = null;
	this.tail = null;
};

DoublyLinkList.prototype.addToTail = function(k,v) {
	var node = this.makeNode(k,v);
	if (this.head === null) {
		this.tail = this.head = node;	
	} else {
		var currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next;
		}
 		this.tail = node;
 		currentNode.next = node;
 		node.prev = currentNode;
	}
};

DoublyLinkList.prototype.isContain = function(k) {
	// body...
};

DoublyLinkList.prototype.removeFromList = function(k) {
	// body...
};

DoublyLinkList.prototype.makeNode = function(k,v) {
	var node = {};
	node.value = [k,v];
	node.prev = null;
	node.next = null;
	return node;
};