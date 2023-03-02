import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

  showModal =  false;
  items =[
    { title: 'Title 1', content: 'Some content for title 1'},
    { title: 'Title 2', content: 'Some content for title 2'},
    { title: 'Title 3', content: 'Some content for title 3'},
    { title: 'Title 4', content: 'Some content for title 4'}
  ]

  onClick(){
    this.showModal = !this.showModal;
  }
}
