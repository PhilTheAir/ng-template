// Step 1: ng new project-name
// Step 2: ng server --open
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Step 3: declare variables here
export class AppComponent {
  title = 'Tour of Heroes';
}
