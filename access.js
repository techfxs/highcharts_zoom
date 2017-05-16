var chart = Highcharts.chart('container', {
    series: [{
        data: [
            [Date.UTC(2010, 0, 1, 3, 45, 45), 29.9],
            [Date.UTC(2010, 0, 2, 2, 40, 03), 71.5],
            [Date.UTC(2010, 0, 3), 106.4],
            [Date.UTC(2010, 0, 6), 129.2],
            [Date.UTC(2010, 0, 7), 144.0],
            [Date.UTC(2010, 0, 8), 176.0],
            [Date.UTC(2010, 0, 9), 170.0],
            [Date.UTC(2010, 0, 10), 150],
            [Date.UTC(2010, 0, 11), 120],
            [Date.UTC(2010, 0, 12), 130],
            [Date.UTC(2010, 1, 1), 160]
        ]
    }],

    chart: {
      zoomType: 'xy'
    },

    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
      	millisecond: '%H:%M:%S.%L',
      	second: '%H:%M:%S',
      	minute: '%H:%M',
      	hour: '%H:%M',
      	day: '%e. %b',
        //day: '%H:%M:%S.%L',
        week: '%e. %b',
      	month: '%b \'%y',
      	year: '%Y'
      },
      labels: {
        // formatter: function () {
        //   console.log(this);
        //   console.log(this.axis.defaultLabelFormatter.call(this));
        //
        //   var date = new Date(this.value);
        //
        //   return date.
        //
        //   return this.value;
        // }
      },
      events: {
        setExtremes: function (event) {
          console.log(event);
        },
        afterSetExtremes: function (event) {
          console.log(event);
          //console.log(this.chart.series[0]);
          this.chart.series[0].setData([
            [Date.UTC(2010, 0, 2, 2, 40, 03, 100), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 101), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 102), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 103), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 104), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 105), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 106), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 107), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 108), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 109), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 110), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 111), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 112), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 113), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 114), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 115), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 116), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 200), 103],
            [Date.UTC(2010, 0, 2, 2, 40, 03, 500), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 04, 300), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 04, 500), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 04, 600), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 04, 900), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 05, 120), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 05, 230), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 05, 450), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 2, 2, 40, 06), 100],
            [Date.UTC(2010, 0, 3, 2, 40, 06), 100]

          ], false);
          this.setExtremes(event.min, event.max);
        }
      }
    },

});



console.log(chart.xAxis[0]);
