song1 = "";
song2 = "";
right_x=0;
right_y=0;
left_x=0;
left_y=0;

function preload(){
    song1.loadSound("song_1.mp3");
    song2.loadSound("song_2.mp3");
}

function setup(){
    canvas=createCanvas(370,350);
    canvas.position(500,200);
    video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("posenet is loaded");
}

function draw(){
    image(video,0,0,370,350);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        left_x=results[0].pose.leftWrist.x;
        left_y=results[0].pose.leftWrist.y;

        right_x=results[0].pose.rightWrist.x;
        right_y=results[0].pose.rightWrist.y;
    }
}

function play(){
    
}