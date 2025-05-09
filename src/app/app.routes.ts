import { Routes } from '@angular/router'; // Import Routes
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [ // Define and export the routes array
  { path: 'submit', component: FeedbackFormComponent },
  { path: 'feedback', component: FeedbackListComponent },
  { path: '', component: LandingComponent},
  { path: '**', redirectTo: '' } // This redirects any unknown paths to the root ('/')
];