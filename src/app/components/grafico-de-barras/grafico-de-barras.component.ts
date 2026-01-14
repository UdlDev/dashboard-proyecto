import { Component, Input, OnChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

export type GraficoDato = { label: string; value: number };
//continuar aqui..
@Component({
  selector: 'app-grafico-de-barras',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './grafico-de-barras.component.html',
  styleUrls: ['./grafico-de-barras.component.css'],
})
export class GraficoDeBarrasComponent implements OnChanges {

  @Input() titulo: string = '';
  @Input() datos: GraficoDato[] = [];

  barChartData: ChartData<'bar'> = { labels: [], datasets: [] };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  ngOnChanges(): void {
    this.barChartData = {
      labels: this.datos.map(d => d.label),
      datasets: [
        {
          data: this.datos.map(d => d.value),
          label: this.titulo,
        },
      ],
    };
  }
}
