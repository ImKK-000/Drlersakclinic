$('#select2').select2();

for (i = 1; i <= 20; i++) { 
	$('#select2-drug'+i).select2();
	$('#select2-brand'+i).select2();

	$('#select2-drug'+i).on('change', function() {
	  	// alert( this.value );
	  	<?php 
  			$sql = "SELECT brand FROM drug WHERE";
			$result = $conn->query($sql);
  			$row = $result->fetch_assoc();
  			$brand = $row['brand'];
  		?>	
	  	$('#select2-brand1').val('<?=$brand?>');
		$('#select2-select2-brand1-container').text('<?=$brand?>');
	}); 
}

	// $('#select2-drug1').on('change', function() {
	//   	// alert( this.value );
	//   	$('#select2-brand1').val('trek');
	// 	$('#select2-select2-brand1-container').text('trek');
	// }); 
 	
 // 	selectValues = {"1" : "Yok", "2" : "Prach"};


 // 	$("#select2-drug1 option[value!='']").each(function() {
	//     $(this).remove();
	// });

 // 	$.each(selectValues, function(key, value) {   
	//     $('#select2-drug1')
	//         .append($("<option></option>")
	//         .attr("value",key)
	//         .text(value)); 
	// });

