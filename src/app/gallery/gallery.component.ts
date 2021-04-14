import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import { ImageServiceService } from '../image-detail/shared/image-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges{
  @Input() filterBy?: string = 'all'
  visibleImages: any[] = [];

  constructor(private imageService: ImageServiceService) {
    this.visibleImages = this.imageService.getImages();
   }
  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }

}
