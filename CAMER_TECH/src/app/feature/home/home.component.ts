import {Component} from '@angular/core';
//import {FooterComponent} from "../../shared/component/footer/footer.component";
import {FooterComponent} from "../../shared/component/footer/footer.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderComponent} from  "../../shared/component/header/header.component"
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink,
    RouterLinkActive,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
