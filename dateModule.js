

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
                        // console.log(JSON.parse(response));
                        console.log(response);
                  }
            });
      })
})