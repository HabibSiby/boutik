import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../Module/feture/components/home/home.component';
import { NavbarComponent } from '../Module/shared/components/navbar/navbar.component';
import { FooterComponent } from '../Module/shared/components/footer/footer.component';
import { ProductsComponent } from "../Module/feture/components/products/products.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, NavbarComponent, FooterComponent, ProductsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
