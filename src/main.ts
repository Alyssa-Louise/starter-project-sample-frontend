import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; // Import provideRouter
import { routes } from './app/app.routes'; // Import your routes

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
