/**	QUOTE FORM
 *************************************************** **/
//hide & show des field selon type de building
$(function () {
  $("input[name='building-type']").click(function () {
    if ($("#residential").is(":checked")) {
      $("#number-of-apartments").show();
      $("#number-of-floors").show();
      $("#number-of-basements").show();
      $("#number-of-companies").hide();
      $("#number-of-parking-spots").hide();
      $("#number-of-elevators").hide();
      $("#number-of-corporations").hide();
      $("#maximum-occupancy").hide();
      $("#buisness-hours").hide();
    }
    if ($("#commercial").is(":checked")) {
      $("#number-of-apartments").hide();
      $("#number-of-floors").show();
      $("#number-of-basements").show();
      $("#number-of-companies").show();
      $("#number-of-parking-spots").show();
      $("#number-of-elevators").show();
      $("#number-of-corporations").hide();
      $("#maximum-occupancy").hide();
      $("#buisness-hours").hide();
    }
    if ($("#corporate").is(":checked")) {
      $("#number-of-apartments").hide();
      $("#number-of-floors").show();
      $("#number-of-basements").show();
      $("#number-of-companies").hide();
      $("#number-of-parking-spots").show();
      $("#number-of-elevators").hide();
      $("#number-of-corporations").show();
      $("#maximum-occupancy").show();
      $("#buisness-hours").hide();
    }
    if ($("#hybrid").is(":checked")) {
      $("#number-of-apartments").hide();
      $("#number-of-floors").show();
      $("#number-of-basements").show();
      $("#number-of-companies").show();
      $("#number-of-parking-spots").show();
      $("#number-of-elevators").hide();
      $("#number-of-corporations").hide();
      $("#maximum-occupancy").show();
      $("#buisness-hours").show();
    }
  });

  $("#number-of-elevators-to-be-deployed").change(function () {
    var numberOfElevators = $("#number-of-elevators-to-be-deployed").val();
    var totalElevators = $("#input-elevator-amount");
    console.log("numberOfElevator is :", numberOfElevators);

    totalElevators.val(numberOfElevators);

    console.log(
      "input-elevator-amount is" +
        totalElevators +
        "number-of-elevators-to-be-deployed is" +
        numberOfElevators
    );
    $("#input-elevator-amount").val();
  });
});

$("#number-of-elevators-to-be-deployed").keypress(function () {
  // $("#elevator-total-price").html('');
  var elevatorAmount = $("#input-elevator-amount").val();
  var elevatorUnitPrice = $("#elevator-unit-price").val();
  console.log(
    "input-elevator-amount is" +
      elevatorAmount +
      "and elevatorUnitPrice is" +
      elevatorUnitPrice
  );
  var total = elevatorAmount * elevatorUnitPrice;

  $("#elevator-total-price").val(Math.round(total));
});

// can't write letter in the fields
$(
  "#number-of-apartments, #number-of-floors, #number-of-basements, #number-of-companies, #number-of-parking-spots, #number-of-elevators, #number-of-corporations, #maximum-occupancy, #buisness-hours"
).keypress(function (e) {
  //if not numeric, then it don't let you type
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    //display error message
    return false;
  }
});

$("#Standard").click(function () {
  $("#elevator-unit-price").val(7565);
});
$("#Premium").click(function () {
  $("#elevator-unit-price").val(12345);
});
$("#Excelium").click(function () {
  $("#elevator-unit-price").val(15400);
});

// $("#input-elevator-amount").change(function () {
//   $("#elevator-total-price").val().change();
// });

$("#elevator-total-price").change(function () {
  $("#installation-fees").val().change();
});

$("#installation-fees").change(function () {
  $("final-price").val();
});
