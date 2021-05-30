import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../task/Task';
import { TASKS } from '../../task/mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  // tasks: Task[] = TASKS;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
