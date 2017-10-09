import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Layover } from '../../models/layover';
import { User } from '../../models/user';

import {LayoverService} from '../../services/layover.service'

@Component({
  selector: 'app-layover-new',
  templateUrl: './layover-new.component.html',
  styleUrls: ['./layover-new.component.css']
})
export class LayoverNewComponent implements OnInit {
  newLayover: Layover;
  @Output() onSubmited= new EventEmitter<boolean>();
  constructor(private layoverService: LayoverService,  private route: ActivatedRoute) { }

  ngOnInit() {
  }


  addNew(station, arrival, departure){
    this.newLayover = new Layover({station, arrival, departure});
    this.route.params.subscribe((params)=>{
      this.layoverService.createNew(params['id'],this.newLayover).subscribe()
    });
    this.newLayover= new Layover({});
    this.onSubmited.emit(false);

  }
}
