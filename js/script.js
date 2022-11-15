new Vue({
    el: '#root',
    data: {
        arrTodo: [
            {
                text: 'fare la spesa',
                done: true,
            },
            {
                text: 'cucinare',
                done: false,
            },
            {
                text: 'fare la doccia',
                done: false,
            },  
            {
                text: 'fare benzina',
                done: true,
            },
        ],
        newTodo: '',
    },
    methods: {
        createTodo(){
            let objTodo = {};
            let text = this.newTodo.trim();
            objTodo['text'] = text;
            objTodo['done'] = false;

            if(text){
                this.arrTodo.push(objTodo);
                this.newTodo = '';
            }
            console.log(objTodo);
        },
        deleteTodo(index) {
            this.arrTodo.splice(index, 1);
        }
    }
});