import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HomeComponent, FooterComponent, RouterOutlet, NavbarComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
