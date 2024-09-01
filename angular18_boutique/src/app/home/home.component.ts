import { Component } from '@angular/core';
import { MainCarouselComponent } from "./main-carousel/main-carousel.component";
import { ProductSliderComponent } from "./product-slider/product-slider.component";
import { menJeans } from '../../data/Men/men_jeans';
import { gounsPage1 } from '../../data/Gouns/gouns';
import { lehngacholiPage2 } from '../../data/Saree/lenghaCholiPage2';
import { mens_kurta } from '../../data/Men/men_kurta';
import { mensShoesPage1 } from '../../data/shoes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainCarouselComponent, ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  menJeans:any
  womenGouns:any
  lenghaCholi:any
  mensKurta:any
  mensShoes:any


  ngOnInit() {
    this.menJeans=menJeans.slice(0,5)
    this.womenGouns=gounsPage1.slice(0,5)
    this.lenghaCholi=lehngacholiPage2.slice(0,5)
    this.mensKurta=mens_kurta.slice(0,5)
    this.mensShoes=mensShoesPage1.slice(0,5)
  }
}
