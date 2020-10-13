import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input()
  loadedData: any;

  @Input()
  winner: any;

  personNext: String = 'person';
  dateNext = '';

  theme: string;
  dataList: any;
  options: any;

  constructor() {}

  ngOnInit(): void {

    this.options = {
      title: {
        text: "Friday's breakfast ",
        subtext: "Who's next ?",
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}',
      },
      calculable: true,
      series: [
        {
          name: 'area',
          type: 'pie',
          radius: [50, 110],
          roseType: 'area',
          data: this.loadedData,
        },
      ],
    };
  }


}
