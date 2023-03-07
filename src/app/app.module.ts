import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadImageComponent } from './load-image/load-image.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// import { MatCardModule } from '@angular/material/card';

const modules = [
  MatCardModule,
  MatGridListModule,
  MatExpansionModule,
  FormsModule,
  MatFormFieldModule,
  MatSelectModule,
];
@NgModule({
  declarations: [AppComponent, LoadImageComponent],
  imports: [BrowserModule, AppRoutingModule, modules],
  providers: [],
  exports: [modules],
  bootstrap: [AppComponent],
})
export class AppModule {}
