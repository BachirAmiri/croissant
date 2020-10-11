import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.sass']
})
export class NextComponent implements OnInit {
  @Input()
  loadedData: any;

  constructor() { }

  ngOnInit(): void {
  }
}
