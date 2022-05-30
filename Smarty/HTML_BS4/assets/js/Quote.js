/**	QUOTE FORM
*************************************************** **/
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
	});
});