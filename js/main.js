$(function() {
	'use strict';

	
  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

});

function callBioCatchAPI( customerId, action, customerSessionId, activityType, uuid, brand, solution, iam )
{
	fetch('https://hooks.zapier.com/hooks/catch/1888053/bgwofce/', {
		method: 'POST',
		body: JSON.stringify({
			customerId: customerId,
			action: action,
			customerSessionId: customerSessionId,
			activityType: activityType,
			uuid: uuid,
			brand: brand,
			solution: solution,
			iam: iam
		})
	}).then(response => {
		if (response.ok) {
			console.log("The API init request succeeded", response.status);
			if (action == "init") {
				window.location.href = "account.html";
			}
			if (action == "getScore") {
				window.alert("Payment was realized with sucess! You will be logout and redirected to the login page.");
				window.location.href = "index.html";
			}
			
		} else {
			console.log("The API init request failed", response.status);
		}
	}).catch(error => console.error('Error:', error));
};
