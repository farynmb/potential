
//Todo

//styling

var app = new Vue({
    el: '#app',
    data: {
        wizard: 1,
        sort: 0,
        number: '',
    max: 4,
   
      todos: [{
       
        text: "Obtain Wand",
        completed: false,
      }, {
        text: "Sorting Hat",
        completed: false,
      }, {
        text: "Broom Riding Experience",
        completed: false,
      }, {
        text: "Defense Against the Dark Arts",
        completed: false,
      }, {
        text: "Potions Class",
        completed: false
      }],
     
    },
computed:{
    activeTodos(){
        let count = 0;
for(let i =0; i < this.todos.length; i++)
{
    if(this.todos[i].completed)
    {
        count++;
    }
}
return count === this.todos.length;
    }

},
    methods: {
  
          previous() {
           this.wizard--;
          },
          next() {
              this.wizard++;
          },
          random() {
            this.sort = this.getRandom(1, 4);
          },
          getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
          },
         
        },
       
    });
          