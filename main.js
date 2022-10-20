function preload(){

}
function setup(){
    function setup(){
        canvas=createCanvas(640,480);
        canvas.position(110,300);
        video=createCapture(VIDEO);
        video.hide();
}
function draw(){
circle(30,30,20);
circle(50,30,20);
circle(30,50,20);
circle(50,50,20);

rectangle(20,5,30,30);
rectangle(20,5,50,50);
rectangle(20,5,30,50);
rectangle(20,5,50,30);
}
function take_snap(){
save("project.png");
}