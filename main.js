var SpeechRecognition = window.webkitSpeechRecognition; /* Explicação: a variável SpeechRecognition contém a API webkitSpeechRecognition (API Web Speech) que é usado para reconhecer o que estamos falando e converter o que foi dito em texto. */

/* Da mesma forma que criamos um humano, crie um novo API */
var recognition = new SpeechRecognition();


var Textbox = document.getElementById("textbox");

function start() /* Chamar a função start */
{
    Textbox.innerHTML = ""; /* Explicação: sempre que o botão iniciar é pressionado, queremos que a área de texto fique vazia. */
    /* Chamar abaixo a função start() para API Web Speech que criamos */
    recognition.start();
}  

recognition.onresult = function(event) /* Chamar a função onresult. A função onresult contém todos os valores da fala convertidos em texto. */
{

    console.log(event); 
   
   var Content = event.results[0][0].transcript; /* Explicação: event.results[0][0].transcript é o local no console que tem nossa saída de voz para
   texto, portanto, vamos armazená-la dentro de uma variável e daremos o nome de Content */
   
       Textbox.innerHTML = Content; /* Chamar a variável Content */
       console.log(Content); /* Chamar a variável Content */

       if(Content == "take my selfie")
       {
        console.log("tirando sua selfie ...");
        speak();
       }

}  /* Fim da aula 98 */ 

function speak()
{
    var synth = window.speechSynthesis;
    speakData = "tirando sua selfie em 3 segundos"; 
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        takeSelfie();
        save();
    }, 3000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

function takeSelfie()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    });
}

function save()
{
    var link = document.getElementsById("link");
    var image = document.getElementsById("selfieImage").src ;
    link.href = image;
    link.click();
}