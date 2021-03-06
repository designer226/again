$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

/*The preceding code replaces the following:
// Check off specific todos by clicking
$("li").click(function(){
	//if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it black
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	} 
	//else
	else {
		//turn it gray
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}
})
*/

//Click on an X to delete a Todo
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
			$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
