import { Component, OnInit } from '@angular/core';
import { ImageDataService } from '../service/image-data.service';
import { retry } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent implements OnInit {
  images: any[] = [];
  searchTerm: string = '';
  
  constructor(private imageDataService: ImageDataService) {}
  
  ngOnInit(): void {
    this.images = this.imageDataService.getImages();
  }
 

  filterImages(){
    if(!this.searchTerm){
      return this.images;
    }
    return this.images.filter(image => {
      return image.title.toLowerCase().includes(this.searchTerm.toLowerCase());
    })
  }

}
