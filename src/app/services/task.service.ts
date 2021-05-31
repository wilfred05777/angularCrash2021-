import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { TASKS } from '../task/mock-task';
import { Task } from '../task/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  // getTasks(): Task[] {
  //   return TASKS;
  // }
  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
