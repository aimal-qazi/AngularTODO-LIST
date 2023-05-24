import { Component } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
  isEditing: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({
        text: this.newTodo,
        completed: false,
        isEditing: false,
      });
      this.newTodo = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  editTodo(index: number) {
    this.todos[index].isEditing = true;
  }

  updateTodo() {
    this.todos.forEach((todo) => (todo.isEditing = false));
  }
}
