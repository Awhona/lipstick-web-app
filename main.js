noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/YSkFfhNz/lippiesticiie.webp');
}

function setup() {
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function draw() {
    image(video, 0, 0, 350, 350);
    fill(255,0,0);
    stroke(255,0,0);
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('uma.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -35;
        noseY = results[0].pose.nose.y -5;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y + " + results[0].pose.nose.y);
    }
}