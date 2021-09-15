/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {templates} from 'js/settings.js';

class General {
  constructor(element){
    const thisGeneral = this;

    thisGeneral.render(element);
    thisGeneral.initChart();
  }

  render(element){
    const thisGeneral = this;

    const generatedHTML = templates.pageGeneralWidget();

    thisGeneral.dom = {};

    thisGeneral.dom.wrapper = element;

    thisGeneral.dom.wrapper.innerHTML = generatedHTML;
  }

  initChart(){
    const ctx = document.getElementById('myChart').getContext('2d');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [{
          label: 'Signups',
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          hidden: true,
        }]
      },
      options: { //https://www.chartjs.org/docs/latest/configuration/legend.html
        plugins: {
          legend: {
            display: true,
            labels: {
              pointStyle: 'circle',
            },
            title: {
              text: 'fsdafdsafsd',
            }
          }
        }
      }
    });
  }
}

export default General;