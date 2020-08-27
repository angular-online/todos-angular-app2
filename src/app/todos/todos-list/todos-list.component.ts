import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit, OnDestroy {

  public title: string = 'Some title';
  todos: ITodo[];  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('component loaded');
    this.http.get('https://todos-api-dev.herokuapp.com/todos').subscribe((response: ITodo[]) => {
      console.log(response);
      this.todos = response;
    });
  }

  ngOnDestroy(): void {
    console.log('component unloaded');
  }

}
