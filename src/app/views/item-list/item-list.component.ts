import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  @Input() items: any = [];

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(){
    console.log(this.items)
  }
}
