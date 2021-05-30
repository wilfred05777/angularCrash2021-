import { Injectable } from '@angular/core';
import { TASKS } from '../task/mock-task';
import { Task } from '../task/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }
}
