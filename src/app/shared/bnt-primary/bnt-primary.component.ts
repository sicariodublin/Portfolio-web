import { Component, Input } from '@angular/core';

@Component({
  selector: 'bnt-primary',
  templateUrl: './bnt-primary.component.html',
  styleUrls: ['./bnt-primary.component.scss']
})
export class BntPrimaryComponent {
  @Input() text: string = 'Download Resume';
  @Input() download: boolean = false; // New input to differentiate button types
  @Input() filePath: string = 'assets/Resume.pdf'; // Path to the resume file in assets folder
  @Input() fileName: string = 'Resume.pdf'; // Name for the downloaded file
  @Input() modalTrigger: boolean = false; // Add modal trigger input for "Contact Me"
  

}