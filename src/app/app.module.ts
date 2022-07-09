import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { ChampionsComponent } from './pages/champions/champions.component';
import { ChampionListItemComponent } from './components/champion-list-item/champion-list-item.component';
import { ProfileSuggestionComponent } from './components/profile-suggestion/profile-suggestion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SummonerComponent } from './pages/summoner/summoner.component';
import { SummonerHeaderComponent } from './components/summoner-header/summoner-header.component';
import { TabSelectComponent } from './components/tab-select/tab-select.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChampionsComponent,
    ChampionListItemComponent,
    ProfileSuggestionComponent,
    SummonerComponent,
    SummonerHeaderComponent,
    TabSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
