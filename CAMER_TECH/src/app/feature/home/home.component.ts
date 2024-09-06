import {Component} from '@angular/core';
//import {FooterComponent} from "../../shared/component/footer/footer.component";
import {FooterComponent} from "../../shared/component/footer/footer.component";
import {HeaderComponent} from "../../shared/component/header/header.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterLink,
    RouterLinkActive,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
