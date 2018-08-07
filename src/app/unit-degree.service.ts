import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitDegreeService {
  private unitDegree= new BehaviorSubject<string>("C");
  currentUnit=this.unitDegree.asObservable();

  constructor() { }

  changeUnitDegree(unitDegree: string){
    this.unitDegree.next(unitDegree);
  }
}
