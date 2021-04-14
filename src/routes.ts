import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { Routes } from '@angular/router';

export const appRoutes:Routes = [
    { path: "gallery", component: GalleryComponent},
    { path: "image/:id", component: ImageDetailComponent},
    {path: "", redirectTo:"/gallery", pathMatch:"full"},
]