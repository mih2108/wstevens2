
index_array = [302,304,305, 307, 308, 309, 306, 312, 314, 319, 323, 322, 328, 325, 331, 327, 326]
quote_array=["Old people are tremendous frauds", 
			"Death is the mother of Beauty",
			"I do not know which to perfer <br /> The beauty of inflections <br /> Or the beauty of innuendos, <br /> The blackbird whistling <br /> Or just after.",
			"The imagination loses vitality <br /> as it ceases to adhere to what is real",
			"The magnificent cause of being <br /> The imagination, the one reality <br /> In this imagine world",
			"God and the imagination are one",
			"Place honey on the altars and die, <br /> You lovers that are bitter at heart",
			"Perhaps the truth depends on a walk around a lake",
			"The great poems of heaven and hell have been written <br />and the great poem of earth remains to be written",
			"It is the human that is alien <br /> The human that has no cousin in the moon",
			"The soul, he said, is composed <br />Of the external world",
			"The world about us would be desolate <br /> except for the world within us",
			"The quiet was part of the meaning, part of the mind: <br /> The access of perfection to the page",
			"If some really acute observer made as much of egotiosm as Freud made of sex<br />people owuld forget a good deal about sex and find the explanation for everything in egotism",
			"Success as a result of industry is a peasant ideal",
			"It can never be satisfied, the mind, never",
			"It is only one's thought that fill a room with something more than furniture"]
source_array=["1907 Letter by Wallace Stevens",
			'Sunday Morning',
			'Thirteen Ways of Looking at a Blackbird',
			'The Necessary Angel: <br /> Essays on Reality and the Imagination',
			'Another Weeping Woman',
			'Final Soliloquy of the Interior Paramour',
			'The Man With the Blue Guitar',
			'Notes Towards a Supreme Fiction',
			'The Necessary Angel: <br /> Essays on Reality and the Imagination',
			'Transport to Summer',
			'Anecdote of Men by the Thousand',
			'The Necessary Angel: <br /> Essays on Reality and the Imagination',
			'The House Was Quiet And the World Was Calm',
			'1936 Letter by Wallace Stevens',
			'As quoted in "Ten Jack-Offs" in The Most Beautiful Woman in Town (1983) by Charles Bukowski',
			'The Well Dressed Man with a Beard',
			'1907 Letter by Wallace Stevens']
$("#topic").change(
  function() {
    var topic_input = $("#topic").val();
    var mood_input = $("#mood").val();
  
    if  (topic_input == 1) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=101>Humorous</option></select>')};
    if (topic_input ==2) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=102>Dark</option><option value=103>Whimsical</option></select>')};
    if (topic_input ==3) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=104>Critical</option><option value=105>Hopeful</option><option value=106>Spiritual</option></select>')};
    if  (topic_input == 4) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=102>Dark</option></select>')};
    if (topic_input ==5) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=107>Sentimental</option></select>')};
    if (topic_input ==6) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=108>Inspiring</option></select>')};	
    if (topic_input ==17) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=102>Dark</option><option value=105>Hopeful</option></option><option value=106>Spiritual</option></select>')};	
    if (topic_input ==19) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=109>Serene</option></select>')};		
    if (topic_input ==21) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=104>Critical</option><option value=110>Uppity</option></select>')};
    if (topic_input ==23) {
    	$("#mood").replaceWith('<select id="mood"><option>Choose One</option><option value=104>Critical</option><option value=103>Whimsical</option></select>')};	
});

$("#mood").change(
  function() {
  	var topic_input = $("#topic").val();
    var mood_input = $("#mood").val();
   
    if (mood_input == 101) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=1>Age</option><option value=5>Nature</option></select>')}
 	if (mood_input == 102) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=2>Beauty</option><option value=3>Love</option><option value=17>Self</option></select>')};
    if (mood_input == 103) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=2>Beauty</option><option value=23>Thought</option></select>')};
    if (mood_input == 104) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=3>Imagination</option><option value=21>Society</option><option value=23>Thought</option></select>')};	
    if (mood_input == 105) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=3>Imagination</option><option value=17>Self</option></select>')};
    if (mood_input == 106) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=3>Imagination</option><option value=17>Self</option></select>')};
    if (mood_input == 107) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=5>Nature</option></select>')};
    if (mood_input == 108) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=6>Poetry</option></select>')};	
    if (mood_input == 109) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=19>Meditative</option></select>')};	
   if (mood_input == 110) {
    	$("#topic").replaceWith('<select id="topic"><option>Choose One</option><option value=21>Society</option></select>')};	
}); 


$("#button").click(function (event){
	event.preventDefault();
	var topic_input= parseInt($("#topic").val());
	var mood_input= parseInt($("#mood").val());
	var num = topic_input + mood_input +200;
	
	var index = jQuery.inArray(num, index_array) 
	console.log(num);
	if (index==-1) {
		$("#source").html("<td id='sourcetd'> <em> Please Choose a Topic and Tone</em> </td>");
	}
	else {
	console.log(index);
	$("#quote").html('<td id="quotetd">' + quote_array[index] + "</td>");
	$("#source").html('<td id="sourcetd">' + "<em>" + "-" + source_array[index] + "</em>" + "</td>");
	};

		
});