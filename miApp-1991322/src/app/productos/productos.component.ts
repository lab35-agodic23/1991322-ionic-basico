import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  constructor(private consulta: ConsultasService) { }

  ngOnInit() {
    this.obtenerProductos()
  }


  productos: any[] = [];

  obtenerProductos(): void{
    this.consulta.getProductos()
    .subscribe((resp: Object) => {
      console.log(resp);
      this.productos = resp as any[];
    });
  }
}
