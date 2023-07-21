function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    var model = ml5.soundClassifier("model.json",modelReady)
}
function modelReady(){
    console.log("model is loaded");
}
model.classify(gotresults)

function gotresults(error , results){
    console.log(gotresults)
}