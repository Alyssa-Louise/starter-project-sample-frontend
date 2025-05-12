import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true, // Make sure this is true
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  // Add a method to handle button clicks
  onButtonClick(buttonType: string) {
    console.log(`${buttonType} button clicked!`);
  }
}
