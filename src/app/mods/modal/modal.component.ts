import {Component, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() close = new EventEmitter();
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
    // document.body.removeChild(this.el.nativeElement); - This also works to remove the Modal
  }

  onCloseClick(){
    this.close.emit();
  }
}
