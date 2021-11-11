import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './app.timer.component.html',
  styleUrls: ['./app.timer.component.css']
})
export class AppTimerComponent implements OnInit {
  time = '';
  target = '2021-09-27T23:58:56';
  seconds = '00';

  private readonly update = () => {
    let duration = Date.parse(this.target) - Date.now();
    console.log (duration)
    if (duration < 0) {
      clearInterval(this.timer);
      this.time = 'Expired';
      return;
    }

    // calculates datetime
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    duration -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(duration / (1000 * 60 * 60));
    duration -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(duration / (1000 * 60));
    duration -= minutes * 1000 * 60;

    this.seconds = pretty(Math.floor(duration / 1000));

    function pretty(value: number) {
      return value.toString().padStart(2, '0');
    }

    this.time = `${days} days | ${pretty(hours)} hours | ${pretty(minutes)} minutes`;
  }

  private timer = setInterval(this.update, 1000);

  ngOnInit() {
    this.update();
  }
}
