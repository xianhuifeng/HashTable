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

var list;
beforeEach(function() {
  list = new DoublyLinkList();
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

