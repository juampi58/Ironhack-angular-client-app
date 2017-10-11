import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Layover } from '../../models/layover';

import { LayoverService } from '../../services/layover.service'

@Component({
  selector: 'app-layover-matches',
  templateUrl: './layover-matches.component.html',
  styleUrls: ['./layover-matches.component.css']
})
export class LayoverMatchesComponent implements OnInit {
  matches: Object[];
  city: string;
  constructor(private layoverService:LayoverService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    console.log('hola')
    this.route.params.subscribe((params)=>{
      this.layoverService.getMatches(params['layoverId'])
      .subscribe((list) => {
        this.matches = list;
        this.city= list[0].city;
        console.log(list);
      });
    });
  }

}
