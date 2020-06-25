import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { TimerApp } from './../../../environments/environment';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  minutes: string;
  timer: number; // Segundos
  constructor() {
   const clicks = fromEvent(document, 'click');
   clicks.subscribe(x => console.log(x));
  }

  ngOnInit() {
    this.startTimer(TimerApp);
  }

  startTimer(duracion: number) {
    this.timer = duracion * 60;
    setInterval(() => {
      let minutes: any  = this.timer / 60;
      let seconds: any  = this.timer % 60;
      minutes = String('0' + Math.floor(minutes)).slice(-2);
      seconds = String('0' + Math.floor(seconds)).slice(-2);
      const text = minutes + ':' + seconds;
      this.time.next(text);
      --this.timer;
      if (this.timer < 0) {
        this.startTimer(5000);
      }
    }, 1000);
  }

}
