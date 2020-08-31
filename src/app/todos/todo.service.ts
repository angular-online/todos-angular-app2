import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../interfaces/todo';

@Injectable()
export class TodoService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodo[]> {
    return this.http.get(`${this.apiUrl}/todos`).pipe(
      map(resp => resp as ITodo[])
    );
  }
}
