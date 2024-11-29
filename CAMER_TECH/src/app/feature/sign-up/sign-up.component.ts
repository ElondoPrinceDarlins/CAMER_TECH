import {Component} from '@angular/core';
import {FooterComponent} from "../../shared/component/footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
