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
	var found = false;
	var currentNode = this.head;
	while(found === false && currentNode !== null){	
		if(currentNode.value[0] === k){
			found = true;
		} else {
			currentNode = currentNode.next;			
		}
	}
	return found;
};

DoublyLinkList.prototype.removeFromList = function(k) {
	var currentNode = this.head;
	var found = false;
	var foundKey = '';
	while(found === false && currentNode !== null){
		if(currentNode.value[0] === k){
			console.log(currentNode.value[0]);
			//found = true
			found = true;
			//foundKey = currentNode.value[0];	
			foundKey = currentNode.value[0];
			if(!currentNode.prev && !currentNode.next){
				this.head = this.tail = null;
			}else if(!currentNode.prev && currentNode.next){
				//this.head is this.head.next
				this.head = this.head.next;
				//this.head.next.prev = null
				this.head.prev = null;
			}else if(!currentNode.next && currentNode.prev){//else if currentNode is tail
				//this.tail is this.tail.prev
				this.tail = this.tail.prev;
				//this.tail.next = null
				this.tail.next = null;
			}else{
				//currentNode.prev.next = currentNode.next
				currentNode.prev.next = currentNode.next;
				//currentNode.next.prev = currentNode.prev
				currentNode.next.prev = currentNode.prev;
			}
		}else{
			currentNode = currentNode.next;			
		}
	}
	return foundKey;
};

DoublyLinkList.prototype.makeNode = function(k,v) {
	var node = {};
	node.value = [k,v];
	node.prev = null;
	node.next = null;
	return node;
};