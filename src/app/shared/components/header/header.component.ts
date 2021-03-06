import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output () toggleSideBarForMe : EventEmitter<any> =new EventEmitter()
  constructor() { }

  ngOnInit() {}
  toggleSideBar (){
    this.toggleSideBarForMe.emit();
  }

}


