import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/component/header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
