// charging-station.service.ts
import { Injectable } from '@angular/core';
import { ChargingStation } from './charging-station.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChargingStationService {
  private chargingStations: ChargingStation[] = [
    { id: 1, name: 'Station 1', location: 'Mumbai, India' },
    { id: 2, name: 'Station 2', location: 'Delhi, India' },
    // Add more charging stations as needed
  ];

  getChargingStations(location: string): Observable<ChargingStation[]> {
    // For simplicity, let's filter the stations based on location
    const filteredStations = this.chargingStations.filter(
      (station) => station.location.toLowerCase().includes(location.toLowerCase())
    );

    return of(filteredStations);
  }
}
