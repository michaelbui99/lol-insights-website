import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './pages/champions/champions.component';
import { HomeComponent } from './pages/home/home.component';
import { SummonerComponent } from './pages/summoner/summoner.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'summoner', component: SummonerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
