import {Component} from '@angular/core';
import {FooterComponent} from "../../shared/component/footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
