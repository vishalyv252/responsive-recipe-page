import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class RecipePageComponent {

  // Image path for desktop/laptop view.
  Omlette_Image_Path_Desktop_View: string = "images/image-omelette.jpeg";
  // Alt text for the omelette image in desktop/laptop view.
  Omlette_Image_Desktop_View_Description: string = "I have attached the image of Omlette in Desktop/Laptop View.";

  // Image path for tablet and mobile view.
  Omlette_Image_Path_Tablet_And_Mobile_View: string = "images/image-omelette.jpeg";
  // Alt text for the omelette image in tablet and mobile view.
  Omlette_Image_Tablet_And_Mobile_View_Description: string = "I have attached the image of Omlette in Tablet and Mobile View.";

  // Title of the recipe displayed on the page.
  title: string = "Simple Omelette Recipe";

  // Description of the recipe displayed on the page.
  description: string = "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.";

}
