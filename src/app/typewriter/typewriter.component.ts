import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
  text: string = 'Hello, Im Pedro L. Yorpo Jr.,';

  displayedText: string = '';
  typingSpeed: number = 100;

  constructor() { }

  ngOnInit(): void {
    this.type();
  }
  type() {
    // Clear displayed text before starting
    this.displayedText = '';
    let i = 0;

    // Use `setInterval` to type one character at a time
    const intervalId = setInterval(() => {
      if (i < this.text.length) {
        this.displayedText += this.text.charAt(i);
        i++;
      } else {
        clearInterval(intervalId); // Stop the interval when done
      }
    }, this.typingSpeed);
  }

}
