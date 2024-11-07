import { Component,OnInit } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  
  constructor(private ts:TodoService){ }

  todos:any;

  ngOnInit(): void{
    this.todos = this.ts.todolist

  }

  removeTodo(index:any){
    this.ts.deleteTodo(index)

  }



}
