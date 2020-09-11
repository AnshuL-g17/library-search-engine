const alphabets = document.querySelectorAll('.choice')


alphabets.forEach(choice => choice.addEventListener('click', function (){
	alert(`you clicked on ${choice.id}`);
}));



$(window).load(function(){
	var options = ["Kiwi" , "Watermelon" , "Mango" , "Apple" , "Banana" , "Cherry" , "Cranberry" , "Grape" , "Orange"];
	const ul = document.getElementById("box");
	
	for (var i = 0; i <options.length; i++){
	var option = options[i];
	
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(option));
    li.className = "ui-screen-hidden";
    li.innerHTML = `<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r"> ${option} </a>`;

	ul.appendChild(li);}
	const list = document.querySelectorAll("a");

    list.forEach(a => a.addEventListener('click' , function(){
	alert (`you cicked on ${a.text}`);
}));
	
	const clear = document.querySelectorAll("ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all ui-input-clear-hidden");;

    clear.EventListener('click' , function(){
	alert (`you cicked on ${a.text}`);
});
});

