import {Component, HostListener, OnInit} from '@angular/core';
import {CarServiceService} from "./service/car-service.service";
import {CarOne} from "./model/CarOne";
import {CarTwo} from "./model/CarTwo";

import {SatelitCarOne} from "./model/SatelitCarOne";
import {SatelitCarTwo} from "./model/SatelitCarTwo";

@Component({
  selector: 'app-app-storag-area',
  templateUrl: './app-storag-area.component.html',
  styleUrls: ['./app-storag-area.component.css']
})
export class AppStoragAreaComponent implements OnInit {
  windowX: string
  windowY: string
  carOne: CarOne;
  carTwo: CarTwo;
  satelitCarOne:SatelitCarOne;
  satelitCarTwo:SatelitCarTwo;

  constructor(private carService: CarServiceService) {
    this.carOne=new CarOne('0px','0px',false)
    this.carTwo=new CarTwo('0px','0px',false)
    this.satelitCarOne=new SatelitCarOne(0,0,0,0,true)
    this.satelitCarTwo=new SatelitCarTwo(0,0,0,0,true)
  }

  ngOnInit() {


  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.windowX = window.innerWidth + 'px'
    this.windowY = window.innerHeight + 'px'
    console.log(this.windowY + " " + this.windowX)
  }

  onPositionCarOne(){
    this.carService.onPositionCarOne().subscribe(car=>this.carOne=car)
    console.log('pos 1: '+this.carOne.positionX)
    console.log('pos 1: '+this.carOne.positionZ)

    this.satelitCarOne.positionX1=parseInt(this.carOne.positionX)
    this.satelitCarOne.positionX2=parseInt(this.carOne.positionX)
    this.satelitCarOne.positionZ1=parseInt(this.carOne.positionZ)+5
    this.satelitCarOne.positionZ2=parseInt(this.carOne.positionZ)-5
  }
  onPositionCarTwo(){
    this.carService.onPositionCarTwo().subscribe(car=>this.carTwo=car)
    console.log('pos 2: '+this.carTwo.positionX)
    console.log('pos 2:'+this.carTwo.positionZ)
    this.satelitCarTwo.positionX1=parseInt(this.carTwo.positionX)
    this.satelitCarTwo.positionX2=parseInt(this.carTwo.positionX)
    this.satelitCarTwo.positionZ1=parseInt(this.carTwo.positionZ)+5
    this.satelitCarTwo.positionZ2=parseInt(this.carTwo.positionZ)-5
  }
}
