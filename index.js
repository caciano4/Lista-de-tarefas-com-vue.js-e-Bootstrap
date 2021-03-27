var app = new Vue({
    el: '#app',
    data: {
      newTodo: null,
      todos: []
    },
    mounted() {
        this.todos = localStorage.todos ? JSON.parse(localStorage.todos) : []
    },
    methods: {
        store(event,description){
            if(event.which == 13){
                console.log("ola")
                this.todos.push({
                    description: description,
                    finished: false,
                    edit:false
                })
                localStorage.todos = JSON.stringify(this.todos)
                this.newTodo = null
            }
        },

        edit(todo){
            todo.edit = true
        },
        update(e,todo){
            if(e,which == 13){console.log("test")
                const index = this.todos.indexOf(todo)
                todo.edit = false
                this.todo[index] = todo
                localStorage.todos = JSON.stringify(this.todos)
            }
        },


        finished(todo) {
            const index = this.todos.indexOf(todo)
            todo.finished = true
            this.todos[index] = todo
            localStorage.todos = JSON.stringify(this.todos)
        },

        cancelUpdate(todo){
            todo.edit = false
        },
        remove(todo){
            const index = this.todos.indexOf(todo)
            this.todos.splice(index, 1)
            localStorage.todos = JSON.stringify(this.todos)
        }
    }
  })