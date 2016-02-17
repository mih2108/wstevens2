

$("#topic").change(
  function() {
    var topic_input = $("#topic").val();
    var mood_input = $("#mood").val();
  
    if  (topic_input == 1) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=1>Inspiring</option><option> </option></select>')}
    else if (topic_input ==2) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=2>Humorous</option><option> </option></select>')};
});

$("#mood").change(
  function() {
  	var topic_input = $("#topic").val();
    var mood_input = $("#mood").val();
   
    if (mood_input == 1) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=1>Poetry</option></select>')}
    if (mood_input == 2) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=2>Work</option></select>')};
});



$("#button").click(function (event){
	event.preventDefault();
	var topic_input= parseInt($("#topic").val());
	var mood_input= parseInt($("#mood").val());
	var num = topic_input + mood_input;
	$("#quote").html(num);

});