import {Component, HostListener, OnInit} from '@angular/core';
import {CarServiceService} from "./service/car-service.service";
import {CarOne} from "./model/CarOne";
import {CarTwo} from "./model/CarTwo";

import {SatelitCarOne} from "./model/SatelitCarOne";
import {SatelitCarTwo} from "./model/SatelitCarTwo";
import {BoardService} from "./service/board.service";
import {Board} from "./model/Board";

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
  boards:Board[]

  constructor(private carService: CarServiceService,
              private boardService:BoardService) {
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

  }
  onPositionCarTwo(){
    this.carService.onPositionCarTwo().subscribe(car=>this.carTwo=car)
    console.log('pos 2: '+this.carTwo.positionX)
    console.log('pos 2:'+this.carTwo.positionZ)

  }
  onTestBoardStandStillCarOne(){
this.boardService.onTestBoard(parseInt(this.carOne.positionX),parseInt(this.carOne.positionZ))
  .subscribe(boards=>{this.boards=boards;console.log(boards);})

  }
}
