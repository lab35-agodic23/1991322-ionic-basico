import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient ) { }

  getProductos(){
    return this.http.get('https://fakestoreapi.com/products')
  }

}
