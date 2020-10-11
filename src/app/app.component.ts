import { Component, OnInit } from '@angular/core';
import file from 'data/data.json';
import dayjs from 'dayjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'croissant';
  data: any;
  winner: any;

  ngOnInit() {
    this.data = this.getData();
  }

  getData() {
    let list = file.data;
    let returnList = [];

    list.forEach((person) => {
      returnList.push({
        name: person.name,
        value: this.getPersonValue(person),
      });
    });

    return returnList;
  }

  getPersonValue(person: any) {
    let startingDate: Date = new Date(file.startingDate);
    const count = file.data.length;

    if (this.isPersonTurn(startingDate, person)) {
      return 15;
    }

    return 10;
  }

  isPersonTurn(date: Date, person: any) {
    let position: number = person.id;
    const max: number = file.data.length;
    const count: number = Math.round(53 / max);
    console.log(person.name);
    console.log(count);

    for (var i = 0; i < count; i++) {
      const tmp = i * max;
      console.log(this.addWeeks(date, position + tmp).format('DD/MM/YYYY'));
      if (
        this.nextFriday().isSame(this.addWeeks(date, position + tmp), 'week')
      ) {
        this.winner = {
          name: person.name,
          date: this.addWeeks(date, position + tmp).format('DD/MM/YYYY')
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
