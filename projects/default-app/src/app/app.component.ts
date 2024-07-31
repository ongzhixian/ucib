import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'default-app';
  renderedDate = Date();
   constructor(private notification: NotificationService) {
    this.fetchNotifications();
    
    // Check for new version every minute
    setInterval(() => this.fetchNotifications(), 60 * 1000);
  }
  
  fetchNotifications = async () => {
    this.notification.getNotifications().subscribe(m => {
        console.log("results is ", m);
    });
  }
}
