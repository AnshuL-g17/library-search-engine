var options = [
  "Kiwi",
  "Watermelon",
  "Mango",
  "Apple",
  "Banana",
  "Cherry",
  "Cranberry",
  "Grape",
  "Orange",
];

$(window).load(function () {
  initialize();
});

function initialize() {
  initializeAlphabets();
  initializeSearch();
}

function initializeAlphabets() {
  $(".choice").click(function (e) {
    displayMessage(e.target.innerHTML);
  });
}

function initializeSearch() {
  initializeSearchItems();
  $("#box li a").click(function (e) {
    displayMessage(e.target.innerHTML);
  });
}

function initializeSearchItems() {
  for (var i = 0; i < options.length; i++) {
    $("#box").append(`
			<li class="ui-screen-hidden">
				<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">${options[i]}</a>
			</li>`);
  }
}

function displayMessage(message) {
  alert(`You clicked on ${message}`);
}
