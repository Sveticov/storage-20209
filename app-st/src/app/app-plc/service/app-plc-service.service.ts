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
    this.host = 'http://localhost:8080/app/'
  }

  onAddNewPLC(plc:PLCData):Observable<any>{
    return this.http.post<PLCData>(this.host+'/plc/newplc',plc)
  }


}
