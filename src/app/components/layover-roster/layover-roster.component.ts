import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Layover } from '../../models/layover';
import { User } from '../../models/user';

import {LayoverService} from '../../services/layover.service'

@Component({
  selector: 'app-layover-roster',
  templateUrl: './layover-roster.component.html',
  styleUrls: ['./layover-roster.component.css']
})
export class LayoverRosterComponent implements OnInit {
  roster: Object[];
  newLayover: Object;
  showForm: boolean = false;
  buttonName: string = 'Add new';
  constructor(private layoverService: LayoverService,  private route: ActivatedRoute) { }

  ngOnInit() {
      this.getRoster();

  }

  getRoster(){
    this.route.params.subscribe((params)=>{
      this.layoverService.getList(params['id'])
      .subscribe((roster) => {
        this.roster = roster;
      });
    });
  }

  toggleForm(){
    this.showForm=!this.showForm;
    if(this.showForm) this.buttonName = 'Hide';
    else this.buttonName = 'Add new';
  }

  onSubmited(){
    this.showForm=false;
  }
}
