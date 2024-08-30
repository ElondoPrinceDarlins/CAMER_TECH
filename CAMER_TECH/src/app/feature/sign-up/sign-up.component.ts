import { Component } from '@angular/core';
import {FooterComponent} from "../../shared/component/footer/footer.component";
import {HeaderComponent} from "../../shared/component/header/header.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
