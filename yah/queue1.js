// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // return

let my_function = [2,3,4,5,7,6,8];
function Queue(){
    my_element = [];
    
   Queue.enqueue = function([my_function]){
        my_element.push([my_function]);
    }
    Queue.dequeue = function(){
        my_element.shift();

    }
}

console.log(Queue( my_function))