import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CardComponent } from './components/shared/card/card.component';
import { ToggleComponent } from './components/shared/toggle/toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    AboutComponent,
    CardComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
