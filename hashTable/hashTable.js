//最基本的散列表（不考虑散列冲突)

class HashTable {
  constructor() {
    this.table = [];
  }

  hashFunc(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    //是为了得到更小的数，对hash进行任意数取余
    return hash%37;
  }

  put(key, value) {
    const hashTableKey = this.hashFunc(key);
    this.table[hashTableKey] = value;
  }

  get(key) {
    const hashTableKey = this.hashFunc(key);
    console.log('get value:==', this.table[hashTableKey]);
    return this.table[hashTableKey];
  }

  remove(key) {
    const hashTableKey = this.hashFunc(key);
    this.table[hashTableKey] = undefined;
  }

  print() {
    this.table.forEach((item, index) => {
      if(item) {
        console.log(`${index}-${item}`);
      }
    })
  }
}

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.remove('Gandalf')
hash.get('Gandalf')
hash.get('Tyrion')
hash.print()