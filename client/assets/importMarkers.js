
$(document).ready(function() {

	$('#import-markers-upload').click(function() {
		var markersData = $('#import-markers-json').val().replace(/\n|\r/g, '');
		var markersInJson = JSON.parse(markersData);
		markersInJson = JSON.stringify(markersInJson);
		console.log('markersInJson', markersInJson);

		$.ajax({
			method: 'POST',
			url: '/import',
			contentType: 'application/json',
			data: markersInJson
		}).done(function (data) {
			console.log('data', data);
		});

	});

});