import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  id: string;
  layoverId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  )
  { }

  ngOnInit() {
    //this.checkIds();

  }
  checkIds(){
    this.route.params.subscribe((params)=>{
      console.log(params['id']);
      this.id = params['id'];
      this.layoverId = params['layoverId'];
    })
  }

}
