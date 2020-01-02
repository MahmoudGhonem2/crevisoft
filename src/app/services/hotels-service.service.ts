import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { hotelModel } from '../model/hotelModel'

@Injectable({
  providedIn: 'root'
})
export class HotelsServiceService {

  constructor(private http: HttpClient) { }

  GetAllHotel(){
    return this.http.get<hotelModel[]>("https://api.myjson.com/bins/tl0bp");
  }
}
