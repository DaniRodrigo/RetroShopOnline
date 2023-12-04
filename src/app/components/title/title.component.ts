import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnChanges{
   @Input() title ='';

   ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
