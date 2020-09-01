import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterByDescriptionPipe } from './filter-br-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from './../photo/photo.module';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent
  ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoListModule {}
