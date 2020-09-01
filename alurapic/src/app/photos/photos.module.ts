import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FilterByDescriptionPipe } from './photo-list/filter-br-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
  declarations: [
    FilterByDescriptionPipe,
    LoadButtonComponent,
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class PhotosModule {}
