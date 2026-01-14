export type ProjectMetric = {
  nombre: string;
  tareasCompletadas: number;
  bugsReportados: number;
  horasRegistradas: number;
};

export async function fetchProjectMetrics(): Promise<ProjectMetric[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { nombre: 'Proyecto A', tareasCompletadas: 34, bugsReportados: 12, horasRegistradas: 120 },
    { nombre: 'Proyecto B', tareasCompletadas: 22, bugsReportados: 6,  horasRegistradas: 95  },
    { nombre: 'Proyecto C', tareasCompletadas: 41, bugsReportados: 18, horasRegistradas: 150 },
    { nombre: 'Proyecto D', tareasCompletadas: 15, bugsReportados: 3,  horasRegistradas: 60  },
  ];
}
