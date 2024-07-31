import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor(private http: HttpClient) { }
  
    api_url = `http://localhost:5000/topics/api/search`;

    getNotifications(): Observable<ResponseMessage> {
        return this.http.get<ResponseMessage>(this.api_url);
        //this.messageService.add('SupplierService: fetched suppliers');
        //return this.http
            //.get<Supplier[]>(this.suppliersApiUrl)
            //.pipe(
                //tap(_ => this.log('fetched suppliers')),
                //catchError(this.handleError<Supplier[]>('getSuppliers', []))
            //);
    }
}

interface ResponseMessage {
    is_success : boolean;
    message: string;
}
