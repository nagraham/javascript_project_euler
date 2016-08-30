
function isPalindrome(str) {
  var front = 0, back = str.length - 1;
  while (front <= back) {
    if (str[front++] !== str[back--]) return false;
  }
  return true;
}


// ===== Solution 1: Brute Force =====

function getLargestPalindromeProduct() {
  var max = 0;

  for (var i = 999; i > 99; i--) {
    for (var j = 999; j > 99; j--) {
      var product = i * j;
      if (isPalindrome(product.toString())) {
        max = Math.max(max, product);
      }
    }
  }

  return max
}

var start = Date.now()
console.log("Brute Force:" + getLargestPalindromeProduct());
var end = Date.now();
console.log("Time: " + (end - start) + "ms");


// ===== Solution 2: Traverse Multiplication Table =====

// Iterates through N x M values, returning each value from max to min.
function MaxProductInterator(n, m) {
  var self = this;
  var queues = [[ n * m ]];

  self.hasNext = function() {
    return n > 0;
  }

  self.next = function() {
    var nextRowValue = (n - 1) * m;
    var maxQueue = findMaxQueue();

    if (nextRowValue >= maxQueue[0] || queues.length === 0) {
      n -= 1;
      maxQueue = createQueue(n, m);
      queues.push(maxQueue);
    }

    var next = maxQueue.shift();

    if (maxQueue.length === 0) {
      var index = queues.indexOf(maxQueue);
      queues.splice(index, 1);
    }

    return next;
  }

  function createQueue(a, b) {
    var q = [];
    for (var i = b; i >= a; i--) {
      q.push(i * a);
    }
    return q
  }

  function findMaxQueue() {
    var maxValue = -1;
    var maxQueue = [];
    queues.forEach(function(q) {
      if (q[0] > maxValue) {
        maxValue = q[0];
        maxQueue = q;
      }
    });
    return maxQueue;
  }
}

// Finds the largest product for which the given callback function returns a
// truthy value. If none of the values return truthy, the result will be "undefined"
function findLargestProduct(n, m, func) {
  var itr = new MaxProductInterator(n, m);

  while(itr.hasNext()) {
    var next = itr.next();
    if (func.call(this, next)) {
      return next;
    }
  }

  return undefined;
}

var start = Date.now();
var product = findLargestProduct(999, 999, function(num) {
  return isPalindrome(num.toString());
})
console.log("Queue-based Iterator: " + product);
var end = Date.now();
console.log("Time: " + (end - start) + "ms");


// ===== Solution 3: Priority Queue =====

function PriorityQueue() {
  var self = this
  var heap = []

  self.isEmpty = function() { return heap.length === 0 }

  self.insert = function(key, value) {
    heap.push({ key: key, value: value })
    shiftUp()
  }

  self.peek = function() { return heap[0] && heap[0].value }

  self.pop = function() {
    var value = heap[0].value
    lastNode = heap.pop();
    if (heap.length > 0) heap[0] = lastNode;
    shiftDown()
    return value
  }

  function shiftUp() {
    var index = heap.length - 1
    var parent
    var unbalanced = true

    while(unbalanced && index > 0) {
      if (!isRoot(index) && greaterThanParent(index)) {
        parent = getParentIndex(index)
        swap(index, parent)
        index = parent
      } else {
        unbalanced = false
      }
    }
  }

  function shiftDown() {
    var index = 0
    var child
    var unbalanced = true

    while (unbalanced && index < heap.length) {
      var largestChild = getLargestChildIndex(index);
      if (largestChild && heap[largestChild].key > heap[index].key) {
        swap(largestChild, index);
        index = largestChild;
      } else {
        unbalanced = false
      }
    }
  }

  function isRoot(index) {
    return index === 0
  }

  function getLargestChildIndex(index) {
    var left = getLeftChildIndex(index)
    var right = getRightChildIndex(index)
    var leftValue = heap[left] && heap[left].key
    var rightValue = heap[right] && heap[right].key

    if (leftValue === undefined && rightValue === undefined) {
      return undefined
    } else if (rightValue === undefined) {
      return left
    } else if (leftValue === undefined) {
      return right
    } else {
      return leftValue >= rightValue ? left : right
    }
  }

  function getLeftChildIndex(index) {
    return 2 * index + 1
  }

  function getRightChildIndex(index) {
    return 2 * index + 2
  }

  function getParentIndex(index) {
    return isRoot(index) ? 0 : Math.ceil((index / 2) - 1)
  }

  function greaterThanParent(index) {
    var parent = getParentIndex(index)
    return heap[index].key > heap[parent].key
  }

  function lessThanLeftChild(index) {
    var child = heap[getLeftChildIndex(index)];
    return child && heap[index].key < child.key
  }

  function lessThanRightChild(index) {
    var child = heap[getRightChildIndex(index)];
    return child && heap[index].key < child.key
  }

  function swap(a, b) {
    var temp = heap[a]
    heap[a] = heap[b]
    heap[b] = temp
  }
}

function MaxProductInterator2(n, m) {
  var self = this;
  var queue = new PriorityQueue();
  queue.insert(n * m, n * m);

  self.hasNext = function() {
    return n > 0;
  }

  self.next = function() {
    var nextProductInterval = (n - 1) * m;
    if (queue.peek() === undefined || nextProductInterval >= queue.peek()) {
      n -= 1;
      addProductsToQueue(n, m);
    }
    return queue.pop();
  }

  function addProductsToQueue(a, b) {
    for (var i = b; i >= a; i--) {
      queue.insert(i * a, i * a);
    }
  }
}

function findLargestProduct2(n, m, func) {
  var itr = new MaxProductInterator2(n, m);

  while(itr.hasNext()) {
    var next = itr.next();
    if (func.call(this, next)) {
      return next;
    }
  }

  return undefined;
}

var start = Date.now();
var product2 = findLargestProduct2(999, 999, function(num) {
  return isPalindrome(num.toString());
})
console.log("Priority Queue based Iterator: " + product2);
var end = Date.now();
console.log("Time: " + (end - start) + "ms");

// ===== Solution 4: Fix Iterator + Priority Queue =====



// Iterates through the unique values of the multiplication table of
// n x m to 1 x 1, from highest to lowest values.
function MaxProductIterator3(n, m) {
  var self = this
  var queue = new PriorityQueue()

  self.hasNext = function() { return n * m !== 0 }

  self.next = function() {
    var nextProductChainValue = n * m;

    if (queue.isEmpty() || nextProductChainValue >= queue.peek().peek()) {
      queue.insert(nextProductChainValue, new ProductChainIterator(n, m))
      n--
    }

    var prodChainItr = queue.pop()
    var value = prodChainItr.next()

    if (prodChainItr.hasNext()) {
      queue.insert(prodChainItr.peek(), prodChainItr)
    }

    return value
  }

    /*
     *  Iterates over products of n x m, for a sequence n, (n-1), (n-2), ...,
     *  until n === m. If you look at a multiplication table, this would be a column.
     *  Returns undefined if no other values exist.
     */
  function ProductChainIterator(n, m) {
    var self = this
    self.hasNext = function() { return m >= n }
    self.next = function() {
      var value = self.peek();
      m--
      return value;
    }
    self.peek = function() { return (m >= n) ? n * m : undefined }
  }
}

function findLargestProduct3(n, m, func) {
  var itr = new MaxProductIterator3(n, m);

  while(itr.hasNext()) {
    var next = itr.next();
    if (func.call(this, next)) {
      return next;
    }
  }

  return undefined;
}

console.log("Object + Priority Queue Iterator: ")
var start = Date.now();
console.log(findLargestProduct3(999, 999, function(num) {
  return isPalindrome(num.toString());
}))
var end = Date.now();
console.log("Time: " + (end - start) + "ms");
