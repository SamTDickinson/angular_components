import {Component} from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {

  data = [
    {name: 'James', age: 24, job: 'Designer', employed: true, salary: 10},
    {name: 'Jill', age: 26, job: 'Engineer', employed: true, salary: 20},
    {name: 'Elyse', age: 25, job: 'Engineer', employed: false, salary: 30},
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job Title'},
  ];
}



