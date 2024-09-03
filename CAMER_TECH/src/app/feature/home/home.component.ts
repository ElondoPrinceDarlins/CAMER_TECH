import {Component} from '@angular/core';
import {FooterComponent} from "../../shared/component/footer/footer.component";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
