function doSomething (){
	// use inspector mode in the browser to see the client side console
	// under user messages, should print out "something"
	console.log("something"); 
}

// put all jQuery inside this function
window.onload = function() {
  $('#fadeText').click(function () {
  	doSomething();
    $('#fadeText').fadeOut();
});
}

