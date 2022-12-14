import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { car_list } from './car-list.const';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  searchInfo$ = new Subject();
  carList = car_list.CarItineraries;

  constructor() {}

  setSearchInfo(searchInfo: any) {
    this.searchInfo$.next(searchInfo);
  }

  getSerachInfo() {
    return this.searchInfo$;
  }

  filterList(sorting: string) {
    switch (sorting) {
      case 'highest':
        this.carList = this.carList.sort(
          (prev: any, next: any) =>
            next.fare.totalAmount - prev.fare.totalAmount
        );
        return this.carList;
      case 'rentalAscending':
        this.carList = this.carList.sort((prev: any, next: any) => {
          if (prev.vehicle.name < next.vehicle.name) {
            return -1;
          }
          if (prev.vehicle.name > next.vehicle.name) {
            return 1;
          }
          return 0;
        });
        return this.carList;
      case 'rentalDesc':
        this.carList = this.carList.sort((prev: any, next: any) => {
          if (prev.vehicle.name > next.vehicle.name) {
            return -1;
          }
          if (prev.vehicle.name < next.vehicle.name) {
            return 1;
          }
          return 0;
        });
        return this.carList;
      case 'typeAsc':
        this.carList = this.carList.sort((prev: any, next: any) => {
          if (prev.vehicle.type < next.vehicle.type) {
            return -1;
          }
          if (prev.vehicle.type > next.vehicle.type) {
            return 1;
          }
          return 0;
        });
        return this.carList;
      case 'typeDesc':
        this.carList = this.carList.sort((prev: any, next: any) => {
          if (prev.vehicle.type > next.vehicle.type) {
            return -1;
          }
          if (prev.vehicle.type < next.vehicle.type) {
            return 1;
          }
          return 0;
        });
        return this.carList;
      default:
        this.carList = this.carList.sort(
          (prev: any, next: any) =>
            prev.fare.totalAmount - next.fare.totalAmount
        );
        return this.carList;
    }
  }
}
