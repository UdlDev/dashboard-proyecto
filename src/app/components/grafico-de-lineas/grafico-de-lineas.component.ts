import { Component, Input, OnChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

export type GraficoDato = { label: string; value: number };


@Component({
  selector: 'app-grafico-de-lineas',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './grafico-de-lineas.component.html',
  styleUrls: ['./grafico-de-lineas.component.css'],
})
export class GraficoDeLineasComponent implements OnChanges {

  @Input() titulo: string = '';
  @Input() datos: GraficoDato[] = [];

  lineChartData: ChartData<'line'> = { labels: [], datasets: [] };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  ngOnChanges(): void {
    this.lineChartData = {
      labels: this.datos.map(d => d.label),
      datasets: [
        {
          data: this.datos.map(d => d.value),
          label: this.titulo,
          tension: 0.3,
        },
      ],
    };
  }
}
