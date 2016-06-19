      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'San Francisco', 'Los Angeles', 'New York'],
          ['2014', 250, 375, 355],
          ['2015', 310, 460, 500],
          ['2016', 450, 510, 550],
          ['2017', 580, 670, 650]
        ]);

        var options = {
          chart: {
            title: 'EdCamps Enrollment Statistics',
            subtitle: 'San Francisco, Los Angeles, and New York Attendies: 2014-2017',
          },
          bars: 'vertical',
          hAxis: {format: 'decimal'},
          height: 500,
          colors: ['#f1c40f', '#2980b9', '#e74c3c']
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
       }

       
      