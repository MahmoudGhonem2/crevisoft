import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelsServiceService } from '../services/hotels-service.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {

  constructor(private hotelsService: HotelsServiceService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
  }

}
