import { Component, OnInit } from '@angular/core';
import file from 'data/data.json';
import dayjs from 'dayjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'croissant';
  data: any;
  winner: any = { name: 'unknown', date: 'unknown' };

  ngOnInit() {
    this.data = this.getData();
  }

  getData() {
    let list = file.data;
    let returnList = [];

    list.forEach((person, index) => {
      returnList.push({
        name: person.name,
        value: this.getPersonValue(person, index),
      });
    });

    return returnList;
  }

  getPersonValue(person: any, index: number) {
    let startingDate: Date = new Date(file.startingDate);
    const count = file.data.length;

    if (this.isPersonTurn(startingDate, person, index)) {
      return 15;
    }

    return 10;
  }

  isPersonTurn(date: Date, person: any, position: number) {
    const max: number = file.data.length;
    const count: number = Math.round(53 / max);

    for (var i = 0; i < count; i++) {
      const tmp = i * max;
      const next = this.addWeeks(date, position + tmp)
      
      //console.log(next.format('DD/MM/YYYY'));
      if (
        this.nextFriday().isSame(next, 'week')
      ) {
        this.winner = {
          name: person.name,
          date: next.format('DD/MM/YYYY'),
        };
        return true;
      }
    }

    return false;
  }

  addWeeks(date: Date, weeks: number) {
    return dayjs(date).add(weeks, 'week');
  }

  nextFriday() {
    // date reset on saturaday 6
    return dayjs().day(5);
  }
}
