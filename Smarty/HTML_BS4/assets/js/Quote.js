/**	QUOTE FORM
 *************************************************** **/
//hide & show des field selon type de building

// This is the fonction for the commercial section
function commercialFunction() {


  $("input").change(function () {

    var numberOfElevators = $("#number-of-elevators-to-be-deployed").val();
    
    $("#input-elevator-amount").val(numberOfElevators)
   
    var commercialElevatorUnitPrice = $("#elevator-unit-price").val();
    
    var commercialTotalPrice = numberOfElevators * commercialElevatorUnitPrice;

    $("#elevator-total-price").val(commercialTotalPrice);

    if ($("#Standard").is(":checked")) {
      $("#elevator-unit-price").val(7565);
      var installationFees = 0.1;
      var totalFees = installationFees * commercialTotalPrice;
      $("#installation-fees").val(totalFees);
    }
    if ($("#Premium").is(":checked")) {
      $("#elevator-unit-price").val(12345);
      var installationFees = 0.13;
      var totalFees = installationFees * commercialTotalPrice;
      $("#installation-fees").val(totalFees);
    }
    if ($("#Excelium").is(":checked")) {
      $("#elevator-unit-price").val(15400);
      var installationFees = 0.16;
      var totalFees = installationFees * commercialTotalPrice;
      $("#installation-fees").val(totalFees);
      console.log("totalFees is " + totalFees);
        console.log("elevator-unit-price is" + $("#elevator-unit-price").val())
    }
    
    $("#final-price").val(+totalFees + +commercialTotalPrice)

  });
}

// This is the fonction for the commercial section
function residentialFunction() {
  var residentialElevatorUnitPrice = 0;
  
  $("input").change(function () {
    
    var apartmentsNumber = $("#number-total-of-apartments").val();

    var floorsNumber = $("#number-total-of-floors").val();
      // console.log(" apartmentsNumber is " + apartmentsNumber + " floorsNumber is " + floorsNumber);

    var elevatorColumnNumber = Math.ceil(floorsNumber / 20);
      // console.log("elevatorColumnNumber is " + elevatorColumnNumber)

    var residentialNumberOfElevators = Math.ceil(apartmentsNumber / floorsNumber / 6);
      // console.log("residentialNumberOfElevatorsr is " + residentialNumberOfElevators)

    var finalAmountOfResidentialElevators = residentialNumberOfElevators * elevatorColumnNumber;
    $("#input-elevator-amount").val(finalAmountOfResidentialElevators);

    residentialElevatorUnitPrice = $("#elevator-unit-price").val()
      // console.log("residentialElevatorUnitPrice is " + residentialElevatorUnitPrice)

    var residentialTotal = finalAmountOfResidentialElevators * residentialElevatorUnitPrice;
      // console.log("residentialTotal is " + residentialTotal)

    $("#elevator-total-price").val(residentialTotal);

      if ($("#Standard").is(":checked")) {
        $("#elevator-unit-price").val(7565);
        var installationFees = 0.1;
        var totalFees = installationFees * residentialTotal;
        $("#installation-fees").val(totalFees);
      }
      if ($("#Premium").is(":checked")) {
        $("#elevator-unit-price").val(12345);
        var installationFees = 0.13;
        var totalFees = installationFees * residentialTotal;
        $("#installation-fees").val(totalFees);
      }
      if ($("#Excelium").is(":checked")) {
        $("#elevator-unit-price").val(15400);
        var installationFees = 0.16;
        var totalFees = installationFees * residentialTotal;
        $("#installation-fees").val(totalFees);
          // console.log("totalFees is " + totalFees);
          // console.log("elevator-unit-price is" + $("#elevator-unit-price").val())
      }

    $("#final-price").val(+totalFees + +residentialTotal)
      
    });
  };

// This fonction is for coporate and hybrid section
function hybridAndCorporate(){

  $("input").change(function () {

  var numberOfFloors = $("#number-total-of-floors").val();
    console.log("numberOfFloors is " + numberOfFloors);

  var numberOfBasements = $("#number-total-of-basements").val();
    console.log("numberOfBasements is " + numberOfBasements)

  var numberOfOccupantsPerFloor = $("#Number-Of-occupants-per-floor").val();
    console.log("numberOfoccupantsPerFloor is " + numberOfOccupantsPerFloor)

  var numberTotalOfFloors = +numberOfFloors + +numberOfBasements;
    console.log("numberTotalOfFloors is " + numberTotalOfFloors)

  var numberTotalOfOccupants = numberOfOccupantsPerFloor * numberTotalOfFloors;
    console.log("numberTotalOfOccupants is " + numberTotalOfOccupants)

  var numberOfElevatorsRequired = numberTotalOfOccupants / 1000;
    console.log("numberOfElevatorsRequired is " + numberOfElevatorsRequired)

  var numberOfElevatorColumns = Math.ceil(numberTotalOfFloors / 20);
    console.log("numberOfElevatorColumns is " + numberOfElevatorColumns)

  var numberOfElevatorsPerColumn = Math.ceil(numberOfElevatorsRequired / numberOfElevatorColumns);
    console.log("numberOfElevatorsPerColumn is " + numberOfElevatorsPerColumn)

  var numberTotalOfElevator = numberOfElevatorsPerColumn / numberOfElevatorsRequired;
    console.log("numberTotalOfElevator is " + numberTotalOfElevator)

  $("#input-elevator-amount").val(numberTotalOfElevator);

  var CorporateAndHybridUnitPrice = $("#elevator-unit-price").val();

  var coporateAndHybridTotalPrice = CorporateAndHybridUnitPrice * numberTotalOfElevator
  $("#elevator-total-price").val(coporateAndHybridTotalPrice);

  if ($("#Standard").is(":checked")) {
    $("#elevator-unit-price").val(7565);
    var installationFees = 0.1;
    var totalFees = installationFees * coporateAndHybridTotalPrice;
    $("#installation-fees").val(totalFees);
  }
  if ($("#Premium").is(":checked")) {
    $("#elevator-unit-price").val(12345);
    var installationFees = 0.13;
    var totalFees = installationFees * coporateAndHybridTotalPrice;
    $("#installation-fees").val(totalFees);
  }
  if ($("#Excelium").is(":checked")) {
    $("#elevator-unit-price").val(15400);
    var installationFees = 0.16;
    var totalFees = installationFees * coporateAndHybridTotalPrice;
    $("#installation-fees").val(totalFees);
    console.log("totalFees is " + totalFees);
      console.log("elevator-unit-price is" + $("#elevator-unit-price").val())
  }

  $("#final-price").val(+totalFees + +coporateAndHybridTotalPrice)
  


});
};






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
      residentialFunction();
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
      commercialFunction();
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
      hybridAndCorporate();
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
      hybridAndCorporate();
    }
  });

  // $("input[name='quality-of-elevator']").click(function () {
  //   if ($("#Standard").is(":checked")) {
  //     $("#elevator-unit-price").val(7565);
  //     var installationFees = 0.1;
  //     var totalFees = installationFees * $("#elevator-total-price").val();
  //     $("#installation-fees").val(totalFees);
  //   }
  //   if ($("#Premium").is(":checked")) {
  //     $("#elevator-unit-price").val(12345);
  //     var installationFees = 0.13;
  //     var totalFees = installationFees * $("#elevator-total-price").val();
  //     $("#installation-fees").val(totalFees);
  //   }
  //   if ($("#Excelium").is(":checked")) {
  //     $("#elevator-unit-price").val(15400);
  //     var installationFees = 0.16;
  //     var totalFees = installationFees * $("#elevator-total-price").val();
  //     $("#installation-fees").val(totalFees);
  //       console.log("elevator-unit-price is" + $("#elevator-unit-price").val())
  //   }
  // });
  


  $(
    "#number-of-apartments, #number-of-floors, #number-of-basements, #number-of-companies, #number-of-parking-spots, #number-of-elevators, #number-of-corporations, #maximum-occupancy, #buisness-hours"
  ).keypress(function (e) {
    //if not numeric, then it don't let you type
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      //display error message
      return false;
    }
  });
});
