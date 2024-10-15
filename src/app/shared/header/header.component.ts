import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isModalOpen = false;

  openContactModal() {
    this.isModalOpen = true;
  }

  closeContactModal() {
    this.isModalOpen = false;
  }
}

