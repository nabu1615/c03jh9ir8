$(function () {
    $("input[class='alive']").change(function () {
       if (this.value === "not") {
       		$('.alive-options').show();
       }
		else {
			$('.alive-options').hide();
		}
    });
});