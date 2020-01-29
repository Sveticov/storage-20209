import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PLCData} from "../model/PLCData";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppPlcServiceService {
  private plc: PLCData
  private readonly host:string

  constructor(private http: HttpClient) {
    this.host = 'http://localhost:8080/app/plc/'
  }

  onAddNewPLC(plc:PLCData):Observable<any>{
    return this.http.post<PLCData>(this.host+'newplc',plc)
  }
  onAllPLCData():Observable<any>{
    console.log("call all plc_s")
    return this.http.get(this.host+"all")
  }
  onDeletePLCData(id:number):Observable<any>{
    return this.http.get(this.host+'delete/'+id)
  }


}
