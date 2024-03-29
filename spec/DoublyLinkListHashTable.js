/* global HashTable, describe, it, expect, should */

describe('HashTable()', function () {
  'use strict';
  var hashTable;
  beforeEach(function() {
    hashTable = new HashTable(8);
  });

  it('exists', function () {
    expect(HashTable).to.be.a('function');
  });

  it('should have a private variable to store input maxmize', function () {
    expect(hashTable._max).to.equal(8);
  });

  it('should create an array and length is the maxmize length', function () {
    expect(hashTable.storage.length).to.equal(8);
  });


  it('should have three functions', function () {
    expect(HashTable.prototype.insert).to.be.a('function');
    expect(HashTable.prototype.retrieve).to.be.a('function'); 
    expect(HashTable.prototype.remove).to.be.a('function');
    expect(HashTable.prototype.getIndexBelowMaxForKey).to.be.a('function');
  });

  it('should added node to hashTable after insert', function () {
    hashTable.insert('dog','happy');
    var index = hashTable.getIndexBelowMaxForKey('dog', 8);
    var moduleIndex = index%8;
    expect(hashTable.storage[moduleIndex].isContain('dog')).to.equal('happy');
    
    hashTable.insert('god','sky');
    var index = hashTable.getIndexBelowMaxForKey('god', 8);
    var moduleIndex = index%8;
    expect(hashTable.storage[moduleIndex].isContain('god')).to.equal('sky');
  });

  it('should return the value of the key after called retrieve', function () {
    hashTable.insert('dog','happy');
    hashTable.insert('cat','angry');
    expect(hashTable.retrieve('dog')).to.equal('happy');
    expect(hashTable.retrieve('cat')).to.equal('angry');
  });

  it('should remove the key and value after called remove', function () {
    hashTable.insert('dog','happy');
    expect(hashTable.retrieve('dog')).to.equal('happy');
    expect(hashTable.remove('dog')).to.equal('dog');
    expect(hashTable.retrieve('dog')).to.equal('');

  });
});


describe('DoublyLinkList()', function () {

  var list;
  beforeEach(function() {
    list = new DoublyLinkList();
  });

  it('exists', function () {
    expect(DoublyLinkList).to.be.a('function');
  });

  it('should have four functions', function () {
    expect(DoublyLinkList.prototype.addToTail).to.be.a('function');
    expect(DoublyLinkList.prototype.isContain).to.be.a('function');
    expect(DoublyLinkList.prototype.removeFromList).to.be.a('function');
    expect(DoublyLinkList.prototype.makeNode).to.be.a('function');
  });

  it('should add new node to tail and also add new node to prev node', function () {
    list.addToTail('dog','happy');
    expect(list.tail.value[0]).to.equal('dog');

    list.addToTail('cat','angry');
    expect(list.tail.value[0]).to.equal('cat');

    list.addToTail('god','sky');
    expect(list.tail.value[0]).to.equal('god');
    expect(list.head.value[0]).to.equal('dog');
    expect(list.head.next.value[0]).to.equal('cat');
    expect(list.head.next.next.value[0]).to.equal('god');
  });

  it('should contain value after added', function () {
    list.addToTail('dog', 'happy');
    list.addToTail('cat','angry');
    expect(list.isContain('dog')).to.equal('happy');
    expect(list.isContain('cat')).to.equal('angry');
    expect(list.isContain('god')).to.equal('');
  });

  it('should do not contain value if the node get removed from list', function () {
    list.addToTail('dog','happy');
    list.addToTail('cat','angry');
    list.addToTail('god','sky');
    expect(list.removeFromList('dog')).to.equal('dog');
    expect(list.isContain('dog')).to.equal('');

    expect(list.removeFromList('cat')).to.equal('cat');
    expect(list.isContain('cat')).to.equal('');

    expect(list.isContain('god')).to.equal('sky');
    expect(list.head.value[0]).to.equal('god');    
  });

});
