import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent implements OnInit {

  flightNumber!: string;
  launchDetails: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.flightNumber = params['flight_number'];
      console.log("this is flight number " + this.flightNumber);
      this.fetchLaunchDetails();
    });
  }

  fetchLaunchDetails(): void {
    const apiUrl = `https://api.spacexdata.com/v3/launches/${this.flightNumber}`;
    this.http.get(apiUrl).subscribe(
      data => {
        this.launchDetails = data;
        console.log(this.launchDetails);
      },
      error => {
        console.error(error);
      }
    );
  }

}