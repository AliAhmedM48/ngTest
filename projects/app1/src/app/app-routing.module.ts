import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: "Home" },
  { path: 'about', component: AboutComponent, title: "About" },
  // { path: 'portfolio', component: PortfolioComponent, title: "Portfolio" },
  // { path: 'contact', component: ContactComponent, title: "Contact" },
  { path: '**', component: NotFoundComponent, title: "NotFound" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
