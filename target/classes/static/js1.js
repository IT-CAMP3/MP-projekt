//var client = null;
//var color;
//
//function connect1() {
//    client = Stomp.client('ws://http://77.55.209.26/:8080/image1');
//    client.connect({}, function (frame) {
//        client.subscribe("/topic1/images1", function(message){
//            displayRandomImages1()
//        });
//    })
//}
//
//
//function sendImage1() {
//    var imageToSend1 = document.getElementById('imageToSend1').value;
//    var user1 = document.getElementById('user1').value;
//    client.send("/app/image", {}, JSON.stringify({'value1': imageToSend1, 'user1': user1}) );
//    document.getElementById('imageToSend1').value = "";
//}
//
//function displayRandomImages1()
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