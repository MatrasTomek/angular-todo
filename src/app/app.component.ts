import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string | Date } | null = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2023-01-01',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2023-03-01',
      done: false,
    },
    {
      name: 'Sprzatanie kuwety',
      deadline: '2023-05-01',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: ' Lista zadań w Angular',
        date: new Date(),
      };
    }, 1500);
  }
}
