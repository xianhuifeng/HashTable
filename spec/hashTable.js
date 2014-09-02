/* global HashTable, describe, it, expect, should */

describe('HashTable()', function () {
  'use strict';
  var hashTable = new HashTable(8);

  it('exists', function () {
    expect(HashTable).to.be.a('function');
  });

  it('should have a private variable to store input maxmize', function () {
    expect(hashTable._max).to.equal(8);
  });

  it('should create an array and length is the maxmize length', function () {
    expect(hashTable.storage.length).to.equal(8);
  });

});

describe('HashTable.prototype.insert()', function () {
  it('exists', function () {
    expect(HashTable.prototype.insert).to.be.a('function');
  });
});

describe('HashTable.prototype.retrieve()', function () {
  it('exists', function () {
    expect(HashTable.prototype.retrieve).to.be.a('function');
  });
});

describe('HashTable.prototype.remove()', function () {
  it('exists', function () {
    expect(HashTable.prototype.remove).to.be.a('function');
  });
});


describe('DoublyLinkList()', function () {

  it('exists', function () {
    expect(DoublyLinkList).to.be.a('function');
  });
})

describe('DoublyLinkList.prototype.addToTail', function () {
  it('exists', function () {
    expect(DoublyLinkList.prototype.addToTail).to.be.a('function');
  });

  var list = new DoublyLinkList();
  list.addToTail('dog','happy');

  it('should add node to tail', function () {
    expect(list.tail === null).to.equal(false);
  });

});

describe('DoublyLinkList.prototype.isContain', function () {
  it('exists', function () {
    expect(DoublyLinkList.prototype.isContain).to.be.a('function');
  });
});

describe('DoublyLinkList.prototype.removeFromList', function () {
  it('exists', function () {
    expect(DoublyLinkList.prototype.removeFromList).to.be.a('function');
  });
});

describe('DoublyLinkList.prototype.makeNode', function () {
  it('exists', function () {
    expect(DoublyLinkList.prototype.makeNode).to.be.a('function');
  });
});

