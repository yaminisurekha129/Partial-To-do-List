import { Component,OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {

  taskInput=""

  constructor(private ts:TodoService){ }

  ngOnInit():void{

  }

  addTask(){

    this.ts.addTodo(this.taskInput)
    this.taskInput=""

  }

  resetTask(){
    this.taskInput=""

  }
  

}
