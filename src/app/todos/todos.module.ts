import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [TodosListComponent, AddEditTodoComponent],
  imports: [
    CommonModule
  ],
  providers: [TodoService]
})
export class TodosModule { }
