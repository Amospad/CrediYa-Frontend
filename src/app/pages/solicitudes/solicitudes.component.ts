import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'ngx-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {
  solicitudes: any[] = [];
  documentoIdentidad: string = '';
  monto: number = 0;
  plazo: number = 0;
  tipoPrestamo: string = 'LIBRE_INVERSION';
  loading: boolean = false;
  error: string = '';
  success: string = '';

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit() {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.solicitudService.listarSolicitudes().subscribe({
      next: (data) => this.solicitudes = data,
      error: (err) => console.error(err)
    });
  }

  crearSolicitud() {
    this.loading = true;
    this.error = '';
    this.success = '';

    const nuevaSolicitud = {
      documentoIdentidad: this.documentoIdentidad,
      monto: this.monto,
      plazo: this.plazo,
      tipoPrestamo: this.tipoPrestamo
    };

    this.solicitudService.crearSolicitud(nuevaSolicitud).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Solicitud creada exitosamente';
        this.cargarSolicitudes();
        this.documentoIdentidad = '';
        this.monto = 0;
        this.plazo = 0;
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Error al crear la solicitud';
      }
    });
  }

  cambiarEstado(id: number, estado: string) {
    this.solicitudService.cambiarEstado(id, estado).subscribe({
      next: () => this.cargarSolicitudes(),
      error: (err) => console.error(err)
    });
  }
}