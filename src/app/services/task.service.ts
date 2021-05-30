import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../task/mock-task';
import { Task } from '../task/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  // getTasks(): Task[] {
  //   return TASKS;
  // }
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
