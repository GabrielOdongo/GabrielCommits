// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' html document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
}
}

class LinkedList {
    constructor(){

    }
}
data(){
    return this.data;
}
next(){
    if (this.next){
        return this.next;
    }
    else 
    return null
}
}

const n = new Node ('There')

console.log(n.next())




class LinkedList {
    constructor(){
        this.node = [];
    }
head(){
    return this.node;
}

insertFirst(data){
    return this.node.push(data);
}

size(){
    return this.node.length;
}

getFirst(){
    return this.node[0]; //Removes the first element from an array and returns that element.
}

getLast(){
   return this.node[this.node.length-1]
}

clear(){
    return this.node = null;
}

removeFirst(){
    return this.node.splice(0);
}

removeLast(){
    return this.node.splice(this.node.length - 1);
}

insertLast(){
    return this.node.push(data);
}
}
