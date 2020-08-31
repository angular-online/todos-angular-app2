import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../../interfaces/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit, OnDestroy {

  todos: ITodo[];  

  constructor(private http: HttpClient, private todoService: TodoService) { }

  ngOnInit(): void {
    console.log('component loaded');

    this.todoService.getTodos().subscribe((response: ITodo[]) => {
      this.todos = response;
    });
  }

  ngOnDestroy(): void {
    console.log('component unloaded');
  }

}
