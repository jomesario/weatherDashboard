import { ObregonComponent } from './obregon/obregon.component';
import { HermosilloComponent } from './hermosillo/hermosillo.component';
import { UnitDegreeService } from './unit-degree.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current_date = new Date();
  city: string='ob';
  constructor(private router: Router, private data: UnitDegreeService) { 
  }

  /**
   * Redirects and load the selected component
   * @param deviceValue 
   */
  onChange(deviceValue) {
    if (deviceValue == 'ob') { this.city = deviceValue; this.router.navigate(['/obregon']) }
    if (deviceValue == 'he') { this.city = deviceValue; this.router.navigate(['/hermosillo']) }
    if (deviceValue == 'na') { this.city = deviceValue; this.router.navigate(['/navojoa']) }
    if (deviceValue == 'no') { this.city = deviceValue; this.router.navigate(['/nogales']) }
    console.log(deviceValue);
  }
  /**
   * Calls the unit-degree service and updates the unitDegree, and redirects to the
   * selected component
   * @param deviceValue 
   */
  onChangeDegree(deviceValue) {
    this.data.changeUnitDegree(deviceValue);
    console.log('Ciudad selecciona'+this.city);
    switch (this.city) {
      case 'ob':  
        this.router.navigate(['/obregon']);
        break;
        case 'he':
        this.router.navigate(['/hermosillo']);
        break;
        case 'na':
        this.router.navigate(['/navojoa']);
        break;
        case 'no':
        this.router.navigate(['/nogales']);
        break;

    }

    console.log(deviceValue);
  }

  title = 'weatherDashboard';


}
