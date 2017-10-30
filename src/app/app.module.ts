import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HostelsComponent } from './components/hostels/hostels.component';
import { SelectedHostelComponent } from './components/selected-hostel/selected-hostel.component';
import { CarouselComponent } from './components/selected-hostel/carousel/carousel.component';
import { ModalComponent } from './components/selected-hostel/modal/modal.component';

const appRoutes: Routes = [
  { path: '', component: HostelsComponent },
  { path: 'hostel/:id', component: SelectedHostelComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HostelsComponent,
    SelectedHostelComponent,
    CarouselComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
