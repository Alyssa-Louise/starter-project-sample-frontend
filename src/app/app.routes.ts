import { Routes } from '@angular/router'; // Import Routes
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';

export const routes: Routes = [ // Define and export the routes array
  { path: 'submit', component: FeedbackFormComponent },
  { path: 'feedback', component: FeedbackListComponent },
  { path: '', redirectTo: '/submit', pathMatch: 'full' }, // Redirect to submit form by default
  { path: '**', redirectTo: '/submit' } // Redirect unknown paths to submit form
];