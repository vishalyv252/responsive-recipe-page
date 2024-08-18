import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [

  // Default route that loads the 'Recipe Page' component.
  { path: '', component: RecipePageComponent },

  // Wildcard route that catches all undefined routes and loads the 'Not Found Page' component.
  { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
