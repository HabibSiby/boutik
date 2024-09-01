import { afterNextRender, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mensShoesPage1 } from '../../../data/shoes';
import { NgFor } from '@angular/common';
import { homeSpotlightData } from '../../../data/mainSpotlight';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.css'
})
export class MainCarouselComponent {
  spotlightData:any;

  currentSlide=0;
  interval:any;

  ngOnInit(){
    this.spotlightData=homeSpotlightData;
    //console.log(this.spotlightData)
    //this.startImageRotation();
  }

  startImageRotation(): void {
     afterNextRender(() => {
      this.interval = setInterval(()=>{
        this.nextSlide();
      }, 2000)
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide+1) % this.spotlightData.length;
  }
}
