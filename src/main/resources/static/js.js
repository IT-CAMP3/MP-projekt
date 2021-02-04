var client = null;
var color;

//łączenie z endpointem /image
//subskrypcja na kanał /topic/images
function connect() {
    client = Stomp.client('ws://localhost:8080/image');
    client.connect({}, function (frame) {
        client.subscribe("/topic/images", function(message){
            //jeśli przyjdzie jakaś wiadomosć na kanał pobieram z niej body zamieniam na obiekt JS i wyjmuję obiekt image
            //podaję go jako argument do metody showImage
            showImage(JSON.parse(message.body).image);
        });
    })
}

function sendImage() {
    //pobieram wartości dwóch inputów
    var user = document.getElementById('user').value;
    var imageToSend = document.getElementById('imageToSend').value;
    //tworzę JSONa z wartościami z inputów i wysyłam na broker app do mappingu image
    client.send("/app/image", {}, JSON.stringify({'message': imageToSend, 'user': user}));
}

function showImage(image) {
    //usuwanie wszystkich img ze strony
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }

    //tworzę sobie obiekt Image, taki obiekt moge wsadzić do HTML
    imageNode = new Image();
    imageNode.src = image.src;
    imageNode.width = image.width;
    imageNode.height = image.height;
    //wsadzam image do HTML
    document.body.appendChild(imageNode);
}
