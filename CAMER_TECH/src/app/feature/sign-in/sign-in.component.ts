import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/component/header/header.component";
import {FooterComponent} from "../../shared/component/footer/footer.component";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
