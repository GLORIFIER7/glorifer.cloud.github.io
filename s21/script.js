console.log("connected");

//Data Structure - Stacks

function getChecked(others){
    //select all checkboxes of group languages using querySelectorAll()

    let checkboxes = document.querySelectorAll ('input[name="language"]');

    let values = [];

    //looping through checkboxes
    //if checked property is true then push

    for (let i = 0; i < checkboxes.length; i++)
    {
        if (checkboxes[i].checked == true){
            values.push(checkboxes[i].value);
        }
    }

    alert(`${values} has been added to the learning list`);
}

//Data Structure - Queue
class Queue {
    constructor(){
        this.items = [];
    }

    //add elements to the queue
    enqueue(element){
        return this.items.push(element);
    }

    //remove elements from the queue
    dequeue(){
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }

    //view the last element
    peek(){
        return this.items[this.items.length - 1];
    }

    //check if the queue is empty
    isEmpty(){
        return this.items.length == 0;
    }

    //the size of the queue
    size(){
        return this.items.length;
    }

    //empty the queue
    clear(){
        return this.items = [];
    }
}

//initialization
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items); //all items are added in the array

queue.dequeue();
console.log(queue.items); //using shift method, we delete the first element inside the array

console.log(queue.peek()); //it displays the last element

console.log(queue.isEmpty()); //false - returns a boolean

console.log(queue.size()); //it displays how many elements are there in an array.

queue.clear();
console.log(queue.items); //it returns an empty array due to the methods that we declared in the class.

//Data Structure - Linked List
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //add an element at the end of the list

    add(element){

        //create a new node
        let node = new Node(element);

        //to store the current node
        let current;

        //if the list is empty add the element and make it as a head
        if(this.head = null){
            this.head = node;
        }
        else {
            current = this.head;

            //iterate to the end of the list
            while (current.next){
                current = current.next;
            }

            //add node
            current.next = node;
        }
        this.size++;
    }
    
}