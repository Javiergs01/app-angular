import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from "./prueba-component/prueba-component";
import { Comp2 } from "./comp2/comp2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PruebaComponent, Comp2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-angular');
}
