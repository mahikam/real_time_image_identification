function preload(){}

function setup(){
    canvas= createCanvas(275,275);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WsbpIjc33/model.json',modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
    image(video,0,0,275,275);
    classifier.classify(video, gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}