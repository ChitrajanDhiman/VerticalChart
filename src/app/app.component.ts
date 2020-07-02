import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  view: any[] = [0, 300];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = 'GDP';
  barPadding = 8;
  colorScheme = {
    domain: ['#777', '#fca402', '#35a7e0', '#4c49d8', '#fa1000', '#2cb713']
  };

  graphData: any = [];

  constructor() {
    this.populateGraphData();
  }

  private populateGraphData() {
    for (let i = 0; i < 8; i++) {

      if (i === 0) {
        this.graphData.push(
          {
            name: 'Germany',
            series: [
              {
                name: '2010',
                value: 40632
              },
              {
                name: '2000',
                value: 36953
              },
              {
                name: '1990',
                value: 31476
              }
            ]
          }
        );
      } else if (i === 1) {
        this.graphData.push(
          {
            name: 'United States',
            series: [
              {
                name: '2010',
                value: 0
              },
              {
                name: '2000',
                value: 45986
              },
              {
                name: '1990',
                value: 37060
              }
            ]
          }
        );
      } else {

        // Add empty spaces as name to avoid displaying index in x-axis
        let name = '';
        for (let index = 0; index < i; index++) {
            name = name + ' ';
        }
        this.graphData.push(
          {
            name: (name),
            series: [
              { name: ('2010'), value: (0) },
              { name: ('2000'), value: (0) },
              { name: ('1990'), value: (0) }
            ]
          });
        }
    }

  }
}
