console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   // my server that we created
   success: handleSuccess,
   error: handleError
 });

 function handleSuccess(json) {
 	json.forEach(function(eachAlbum){

 	console.log(eachAlbum);	
 	$('.container').append(`<p> ${eachAlbum.title} - ${eachAlbum.artist} </p> `)
 	})
 	
   console.log(json);
 }

 // **************************************

 $.ajax({
  method: 'GET',
  url: '/api/taquerias',
  success: handleResponse
  // success has to be different for each route
  // has to match the function
});

 function handleResponse(json) {
 	json.forEach(function(eachTaquerias){

 	console.log(eachTaquerias);	
 	$('.container').append(`<p> ${eachTaquerias.name}</p> `)
 	})
 	
   console.log(json);
 }

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }
  // code in here

});
