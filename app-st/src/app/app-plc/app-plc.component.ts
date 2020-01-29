import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {PLCData} from "./model/PLCData";
import {Observable} from "rxjs";
import {AppPlcServiceService} from "./service/app-plc-service.service";
import {delay, timeout} from "rxjs/operators";


@Component({
  selector: 'app-app-plc',
  templateUrl: './app-plc.component.html',
  styleUrls: ['./app-plc.component.css']
})
export class AppPlcComponent implements OnInit {

  plcDataL: PLCData
  plcDataAll: PLCData[]
  answerPLCData: any

  constructor(private plcService: AppPlcServiceService) {
    this.plcDataL = new PLCData()
  }

  ngOnInit() {
    this.plcService.onAllPLCData().subscribe(plcs => this.plcDataAll = plcs)
  }


  plcSubmit(plcForm: NgForm) {
    console.log(plcForm.value)

    this.plcService.onAddNewPLC(this.plcDataL).subscribe(plcs => this.plcDataAll=plcs)

  }


  onDeletePLC(id: number) {
    this.plcService.onDeletePLCData(id).subscribe(plcs => this.plcDataAll=plcs)

  }
}
