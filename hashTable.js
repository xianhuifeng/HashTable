/*! HashTable v0.0.0 - MIT license */

'use strict';

var HashTable = function (maxLength) {
	this._max = maxLength;
	this.storage = new Array(this._max);

	for (var i = 0; i < this.storage.length; i++) {
		this.storage[i] = new DoublyLinkList();
	}
};

HashTable.prototype.insert = function(k,v) {
	var index = this.getIndexBelowMaxForKey(k,this._max);
	var moduleIndex = index%this._max;
	this.storage[moduleIndex].addToTail(k,v);
};

HashTable.prototype.retrieve = function(k) {
	var index = this.getIndexBelowMaxForKey(k,this._max);
	var moduleIndex = index%this._max;
	return this.storage[moduleIndex].isContain(k);
};

HashTable.prototype.remove = function(k) {
	var index = this.getIndexBelowMaxForKey(k,this._max);
	var moduleIndex = index%this._max;
	return this.storage[moduleIndex].removeFromList(k);
};

//hashtable helper
HashTable.prototype.getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
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
	var foundValue = '';
	var currentNode = this.head;
	while(found === false && currentNode !== null){	
		if(currentNode.value[0] === k){
			found = true;
			foundValue = currentNode.value[1];			
		} else {
			currentNode = currentNode.next;			
		}
	}
	return foundValue;
};

DoublyLinkList.prototype.removeFromList = function(k) {
	var currentNode = this.head;
	var found = false;
	var foundKey = '';
	while(found === false && currentNode !== null){
		if(currentNode.value[0] === k){
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