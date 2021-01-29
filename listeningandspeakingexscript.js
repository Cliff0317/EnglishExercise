var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = $('#textbox');

var Content = '';

recognition.continuous = true;
var Done = false;
document.getElementById("end-btn").addEventListener("click", function() {
  Done = true;
  document.getElementById("start-btn").disabled = false;
  document.getElementById("end-btn").disabled = true;
})

recognition.onresult = function(event) {
  if (!Done) {
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;
  
    Content += transcript;
    Textbox.val(Content);
  }
};

recognition.onstart = function() { 
}

recognition.onspeechend = function() {
}

recognition.onerror = function(event) {
}

$('#start-btn').on('click', function(e) {
  if (Content.length) {
    Content += ' ';
  }
  recognition.start();
  document.getElementById("start-btn").disabled = true;
  document.getElementById("end-btn").disabled = false;
});

Textbox.on('input', function() {
  Content = $(this).val();
})

function speakText0(){
  var text0 = document.getElementById('text0').value;
  responsiveVoice.speak(text0,"US English Female",{rate: 0.5});
}

