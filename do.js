$("#submit_button").click( function() {

    console.log("TEST");

    var v = "";
    var q = "";
    var h = "";

    console.log("TEST 2");
    console.log("v = " + v);
    console.log("q = " + q);
    console.log("h = " + h);

    $("#dynamic").removeClass("button");
    $("#dynamic").addClass("good-button");

    console.log("TEST 3");

    v = $("#form").val()
    q = $("#value_1").val()

    console.log("TEST 4");
    console.log("v = " + v);
    console.log("q = " + q);

    h = "https://u15.e62.myftpupload.com/form-test/?" + v + "=" + q;

    console.log("TEST 5");
    console.log("h = " + h);

    $("#dynamic").attr('href', h);
});