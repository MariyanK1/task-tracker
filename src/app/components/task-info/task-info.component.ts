import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css'],
})
export class TaskInfoComponent implements OnInit {
  @Input() task: Task = {
    text: '',
    day: '',
    reminder: false,
  };

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    const taskId: number = Number(this.router.url.split('/')[2]);

    this.taskService
      .getTask(taskId)
      .subscribe((singleTask: Task) => (this.task = singleTask));
  }
}
