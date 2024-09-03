import {Component} from '@angular/core';
import {HeaderItems} from "./model/HeaderItems";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public menuOpen: boolean = false;

  public headerItems: HeaderItems[] = [
    {
      id: 1,
      link: '',
      title: 'Home'
    },
    {
      id: 2,
      link: '',
      title: 'Bookings'
    },
    {
      id: 3,
      link: '',
      title: 'About'
    },
    {
      id: 4,
      link: '',
      title: 'Contact'
    }, {
      id: 4,
      link: '/dashboard',
      title: 'dashboard'
    }
  ];

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden', !this.menuOpen);
    }
  }
}
