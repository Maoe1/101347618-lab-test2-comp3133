import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css'],
  
})
export class MissionListComponent implements OnInit {

  launches: any[] = [];
  launchYears: number[] = [];
  yearFilter: number = 2023;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}


  filterByYear(year: number) {
    this.yearFilter = year;
  }

  getDetails(launch: any) {
    this.router.navigate(['/details'], { queryParams: { flight_number: launch.flight_number }});
  }


  ngOnInit(): void {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(
      (data) => {
        this.launches = data;
        this.launchYears = [...new Set(data.map(launch => new Date(launch.launch_date_local).getFullYear()))];
      },
      (error) => {
        console.log(error);
      }
    );
  }


  
}

