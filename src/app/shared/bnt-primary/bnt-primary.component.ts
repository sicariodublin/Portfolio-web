import { Component, Input } from '@angular/core';

@Component({
  selector: 'bnt-primary',
  templateUrl: './bnt-primary.component.html',
  styleUrls: ['./bnt-primary.component.scss']
})
export class BntPrimaryComponent {
  @Input() text: string = '';
}
