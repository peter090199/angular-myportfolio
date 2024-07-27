import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading = true; // Start with loading true

  constructor() {}

  ngOnInit() {
    // Simulate a data loading delay
    this.loadData();
  }

  loadData() {
    // Simulate loading with a timeout (replace this with actual data fetching)
    setTimeout(() => {
      this.isLoading = false; // Set loading to false after data is fetched
    }, 3000); // Adjust time as necessary
  }
}
