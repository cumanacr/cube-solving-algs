! function() {
    // data += "&key=" + value;
    $.ajax({
        // beforeSend is a pre-request callback function that can be used to modify the jqXHR.
        beforeSend: function(jqXHR, settings) {
            console.log("beforeSend callback:", settings.url);
            console.groupEnd();
        }, //end beforeSend
        url: 'algs.json',
        type: 'GET',
        // data: data,
        // success is a function to be called if the request succeeds.
        success: function(data, status, jqXHR) {
            console.log("success callback:", status);
            console.log("data:", data);
            // $('#sales_stage').fillSelect($.parseJSON(data));
        }, // end success
        // error is a function to be called if the request fails.
        error: function(jqXHR, status, error) {
            console.log("error callback:", status);
            console.log("Function getLxSalesStageDropdown error:", error);
        }, // end error
        // complete is a function to be called when the request finishes (after success and error callbacks are executed).
        complete: function(jqXHR, status) {
            console.log("complete callback:", status);
        }, // end complete
        datatype: "text"
    }); // end ajax
}();
