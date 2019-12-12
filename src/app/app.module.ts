import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule}    from '@angular/forms'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MainNavComponent } from './main-nav/main-nav.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { SekharDirective } from './sekhar.directive';
import { DirectivesComponent } from './directives/directives.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    SekharDirective,
    DirectivesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    HttpClientModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
