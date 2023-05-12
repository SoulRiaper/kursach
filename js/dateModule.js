

$(function() {
      $('#submitDate').on('click', function () {
            let result ={
                  start_date: $('#startDate').val(),
                  stop_date: $('#stopDate').val(),

            };

            $.ajax({
                  type: "POST",
                  url: "/app.php?action=getByDate",
                  data: {data: result},
                  success: function (response) {
                        let json = JSON.parse(response);
                        json = json.reverse();
                        console.log(json);
                        createChart(json);
                        // console.log(response);
                  }
            });
      })
})