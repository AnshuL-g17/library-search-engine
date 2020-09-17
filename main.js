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

var template = Handlebars.compile(`
    <li class="ui-screen-hidden">
      <a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><h1> {{option}} </h1></a>
    </li>`);


$(window).ready(function () {
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
    this.style.color = "#ff0000";
  });
}

function initializeSearchItems() {
  for (var i = 0; i < options.length; i++) {
    $("#box").append(template({option : options[i]}));
  }
}

function displayMessage(message) {
  alert(`You clicked on ${message}`);
}
