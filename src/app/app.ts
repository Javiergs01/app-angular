import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from "./prueba-component/prueba-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PruebaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-angular');
}
