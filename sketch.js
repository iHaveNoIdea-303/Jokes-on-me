var ball
var counter=0
var count=0
var ct=0
var cOuNt=0
var database,position,location
function setup() {
    createCanvas(400,400)
    database=firebase.database()

   position= database.ref("a joke about something/position")
    position.on("value",readposition,showerror)
    ball=createSprite(200,200,20,20)
}
function draw(){
    background(255,255,255)
    drawSprites()
    if(counter==0){
    if(keyCode==UP_ARROW){
        writeposition(0,-10)
        counter=counter+1
    }
}
    if(count==0){
    if(keyCode==LEFT_ARROW){
        writeposition(-10,0)
        count=count+1
    }
}
   if(ct==0){
    if(keyCode==RIGHT_ARROW){
        writeposition(10,0)
        ct=ct+1
    }
   }
   if(cOuNt==0){
    if(keyCode==DOWN_ARROW){
        writeposition(0,10)
        cOuNt=cOuNt+1
    }
}
}
//function changePosition(x,y){
    //ball.x=ball.x+x
    //ball.y=ball.y+y
//}
function readposition(data){
    location=data.val()
        console.log(location.x)
        ball.x=location.x
        ball.y=location.y
}
function writeposition(x,y){
    database.ref("a joke about something/position").set({
        x:location.x+x,
        y:location.y+y
    }
    )
}
function showerror(){
    console.log("Logging in Console. If found, this is an error")
}