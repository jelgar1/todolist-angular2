import { Component } from '@angular/core';

import { Task } from './task';

const TASKS: Task[] = [
  { id: 1, name: 'Practice Angular2' },
  { id: 2, name: 'Revisit RXJs' },
  { id: 3, name: 'Tidy room' },
  { id: 4, name: 'Revise Typescript' },
  { id: 5, name: 'Remember to eat' },
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Tasks</h2>
    <ul class="tasks">
      <li *ngFor="let task of tasks"
        [class.selected]="task === selectedTask"
        (click)="onSelect(task)">
        <span class="badge">{{task.id}}</span> {{task.name}}
      </li>
    </ul>
    <my-task-detail [task]="selectedTask"></my-task-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .tasks {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .tasks li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .tasks li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .tasks li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .tasks .text {
      position: relative;
      top: -3px;
    }
    .tasks .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Tasks';
  tasks = TASKS;
  selectedTask: Task;

  onSelect(task: Task): void {
    this.selectedTask = task;
  }
}
