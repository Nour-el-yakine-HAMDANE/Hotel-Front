import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification.model';

const baseUrl = 'http://localhost:8080/api/notifications';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Notification[]> {
    return this.http.get<Notification[]>(baseUrl);
  }

  getHotelNotifications(hotelId: any): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${baseUrl}/hotel/${hotelId}`);
  }

  get(id: any): Observable<Notification> {
    return this.http.get<Notification>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  getPerformanceOverPeriode(id: any, dateDebut: Date, dateFin: Date): Observable<any> {
    let params = new HttpParams()
      .set('startDate', dateDebut.toISOString())
      .set('endDate', dateFin.toISOString());
    return this.http.get<any>(`${baseUrl}/performance/${id}`, { params });
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
