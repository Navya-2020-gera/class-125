noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;



function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 450);
    canvas.position(600, 80);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose' , gotPoses);
}

function modelloaded(){
    console.log(' poseNet is intialised');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =  " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX =  results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);

        console.log("leftwristx = " + leftWristX + "rightWristX" + rightWristX + "difference = " + difference );


    }

}


function draw(){
    background('#4287f5');
    document.getElementById("square_sides").innerHTML = "width and height of a square will be =" +  diiference + "px";
    fill('#BF40BF');
    stroke('#BF40BF');
    square(noseX, noseY,  200);


}