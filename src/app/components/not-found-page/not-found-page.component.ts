import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css'],
  animations: [
    trigger('fadeInOut', [
      // Defining an animation trigger named 'fadeInOut'.
      state('void', style({ opacity: 0 })), // Initial state when element is not yet in the DOM (invisible).
      transition(':enter', [
        // Transition to fade in when the element enters the DOM.
        animate('0.8s ease-out', style({ opacity: 1 })), // Fades in over 0.8 seconds.
      ]),
      transition(':leave', [
        // Transition to fade out when the element leaves the DOM.
        animate('0.8s ease-out', style({ opacity: 0 })), // Fades out over 0.8 seconds.
      ]),
    ]),
  ]
})
export class NotFoundPageComponent implements OnInit {

  status_code: number = 404;
  status_code_description: string = "This page could not be found.";
  // Predefined status code and description for a 404 error.

  alert_message: boolean = false; // Tracks whether the alert box is visible.
  message: string = ''; // Stores the message to be displayed in the alert box.
  progress: number = 0; // Tracks the progress of the progress bar.
  intervalId: any; // Stores the interval ID for the progress bar updates.

  ngOnInit(): void {
    console.error("Status Code : " + this.status_code + ". " + this.status_code_description);
    // Logs the status code and description to the console when the component initializes.
    this.open_alert_box(this.status_code_description);
    // Opens the alert box with the status code description when the page loads.
  }

  open_alert_box(message: string) {
    this.message = message; // Sets the alert box message.
    this.alert_message = true; // Makes the alert box visible.
    this.startProgress(); // Starts the progress bar animation.
  }

  close_alert_box() {
    this.alert_message = false; // Hides the alert box.
    this.progress = 0; // Resets the progress bar.
    if (this.intervalId) {
      clearInterval(this.intervalId); // Stops the progress bar update interval if it's running.
    }
  }

  startProgress() {
    this.progress = 0; // Initialize progress at 0%.
    const duration = 7000; // Set the duration of the progress bar animation (7 seconds).
    const interval = 100; // Update the progress bar every 100 milliseconds.
    const increment = 100 * (interval / duration); // Calculate the progress increment per interval.

    this.intervalId = setInterval(() => {
      this.progress += increment; // Increment the progress.
      if (this.progress >= 100) {
        this.progress = 100; // Cap progress at 100%.
        clearInterval(this.intervalId); // Stop the interval when progress reaches 100%.
        this.close_alert_box(); // Automatically close the alert box when the progress completes.
      }
    }, interval); // Set the interval timing.
  }
}
