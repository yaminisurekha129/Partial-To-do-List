import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskid=3

  todolist=[

    {
      id:1,"task":"Task1"
    },

    {
      id:1,"task":"Task2"
    }

  ]

  constructor() { }

  addTodo(taskName:any){
    this.todolist.push({"id":this.taskid++,'task':taskName})


  }

  deleteTodo(index:any){
    this.todolist.splice(index,1)
  } 


  
}
