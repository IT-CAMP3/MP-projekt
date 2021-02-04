//var client = null;
//var color;
//
//function showMessage(value, user, userColor) {
//    var newResponse = document.createElement('p');
//    newResponse.style.color = userColor;
//    newResponse.appendChild(document.createTextNode(user));
//    newResponse.appendChild(document.createTextNode(": "));
//    newResponse.appendChild(document.createTextNode(value));
//    var respone = document.getElementById('reponse');
//    respone.appendChild(newResponse);
//}
//
//function connect() {
//    client = Stomp.client('ws://localhost:8080/chat');
//    color = getRandomColor();
//    client.connect({}, function (frame) {
//        client.subscribe("/topic/messages", function(message){
//            displayRandomImages(JSON.parse(message.body).value, JSON.parse(message.body).user,JSON.parse(message.body).image),showMessage(JSON.parse(message.body).value, JSON.parse(message.body).user, JSON.parse(message.body).userColor)
//        });
//    })
//}
//
//function sendMessage() {
//    var messageToSend = document.getElementById('messageToSend').value;
//    var user = document.getElementById('user').value;
//    client.send("/app/chat", {}, JSON.stringify({'value': messageToSend, 'user': user, 'userColor': color}) );
//    document.getElementById('messageToSend').value = "";
//}
//
//function getRandomColor() {
//    var letters = '0123456789ABCDEF';
//    var color = '#';
//    for (var i = 0; i < 6; i++) {
//        color += letters[Math.floor(Math.random() * 16)];
//    }
//    return color;
//}
//
//function displayRandomImages()
//{
//   //array of images with image location, height, and width
//   var imageArray = [
//   {
//     //address URL of the image
//     src: "https://wi.wallpapertip.com/wsimgs/15-155208_desktop-puppy-wallpaper-hd.jpg",
//     //size for the image to be display on webpage
//     width: "280",
//     height: "200"
//   },
//   {
//     src: "https://wi.wallpapertip.com/wsimgs/156-1564365_golden-retriever-puppy-desktop-wallpaper-desktop-wallpaper-puppy.jpg",
//     width: "320",
//     height: "195"
//   },
//   {
//     src: "https://wi.wallpapertip.com/wsimgs/156-1564140_free-puppy-wallpapers-for-computer-wallpaper-cave-cute.jpg",
//     width: "320",
//     height: "195"
//   },
//   {
//     src: "https://wi.wallpapertip.com/wsimgs/156-1566650_cute-puppies-desktop-wallpaper-cute-puppies.jpg",
//     width: "350",
//     height: "250"
//    } ];
//
//    //find the length of the array of images
//    var arrayLength = imageArray.length;
//    var newArray = [];
//    for (var i = 0; i < arrayLength; i++) {
//        newArray[i] = new Image();
//        newArray[i].src = imageArray[i].src;
//        newArray[i].width = imageArray[i].width;
//        newArray[i].height = imageArray[i].height;
//    }
//
//  // create random image number
//  function getRandomNum(min, max)
//  {
//      // generate and return a random number for the image to be displayed
//      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
//      return newArray[imgNo];
//  }
//
//  // 0 is first image and (preBuffer.length - 1) is last image of the array
//  var newImage = getRandomNum(0, newArray.length - 1);
//
//  // remove the previous images
//  var images = document.getElementsByTagName('img');
//  var l = images.length;
//  for (var p = 0; p < l; p++) {
//     images[0].parentNode.removeChild(images[0]);
//  }
//  // display the new random image
//  document.body.appendChild(newImage);
//}
