import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, 
    TestimonialsComponent,
    FooterComponent,
    CommonModule, 
    RouterModule
  ]
})
export class SharedModule { }
