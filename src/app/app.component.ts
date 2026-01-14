import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { fetchProjectMetrics, ProjectMetric } from '../api';
import { GraficoDeBarrasComponent } from './components/grafico-de-barras/grafico-de-barras.component';
import { GraficoDeLineasComponent } from './components/grafico-de-lineas/grafico-de-lineas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GraficoDeBarrasComponent, GraficoDeLineasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'Dashboard de Proyectos';

  // 1) Estado para almacenar las métricas de los proyectos.
  projectMetrics: ProjectMetric[] = [];

  // Datos para gráficos
  barDatos: { label: string; value: number }[] = [];
  lineDatos: { label: string; value: number }[] = [];

  // 2) ngOnInit -> carga métricas
  async ngOnInit(): Promise<void> {
    this.projectMetrics = await fetchProjectMetrics();

    this.barDatos = this.projectMetrics.map(p => ({
      label: p.nombre,
      value: p.tareasCompletadas,
    }));

    this.lineDatos = this.projectMetrics.map(p => ({
      label: p.nombre,
      value: p.bugsReportados,
    }));
  }
}
