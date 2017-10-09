import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layover-card',
  templateUrl: './layover-card.component.html',
  styleUrls: ['./layover-card.component.css']
})
export class LayoverCardComponent implements OnInit {
@Input() city:string;
@Input() station:string;
@Input() arrival:Date;
@Input() departure:Date;
@Input() id:string;
@Input() user:Object;
  constructor() { }

  ngOnInit() {
  }

}
