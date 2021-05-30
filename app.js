

var keyData  = {
    a: {
      color: 'rgb(0,0,180)',
      sound: new Howl({
        src: ['a.mp3']
      })
    },
    b: {
      color: 'rgb(175,13,102)',
      sound: new Howl({
        src: ['b.mp3']
      })
    },
    c: {
      color: 'rgb(146,248,70)',
      sound: new Howl({
        src: ['c.mp3']
      })
    },
    d: {
      color: 'rgb(255,200,47)',
      sound: new Howl({
        src: ['d.mp3']
      })
    },
    e: {
      color: 'rgb(255,118,0)',
      sound: new Howl({
        src: ['e.mp3']
      })
    },
    f: {
      color: 'rgb(185,185,185)',
      sound: new Howl({
        src: ['f.mp3']
      })
    },
    g: {
      color: 'rgb(235,235,222)',
      sound: new Howl({
        src: ['g.mp3']
      })
    },
    h: {
      color: 'rgb(100,100,100)',
      sound: new Howl({
        src: ['h.mp3']
      })
    },
    i: {
      color: 'rgb(255,255,0)',
      sound: new Howl({
        src: ['i.mp3']
      })
    },
    j: {
      color: 'rgb(55,19,112)',
      sound: new Howl({
        src: ['j.mp3']
      })
    },
    k: {
      color: 'rgb(255,255,150)',
      sound: new Howl({
        src: ['k.mp3']
      })
    },
    l: {
      color: 'rgb(202,62,94)',
      sound: new Howl({
        src: ['l.mp3']
      })
    },
    m: {
      color: 'rgb(205,145,63)',
      sound: new Howl({
        src: ['m.mp3']
      })
    },
    n: {
      color: 'rgb(12,75,100)',
      sound: new Howl({
        src: ['n.mp3']
      })
    },
    o: {
      color: 'rgb(255,0,0)',
      sound: new Howl({
        src: ['o.mp3']
      })
    },
    p: {
      color: 'rgb(175,155,50)',
      sound: new Howl({
        src: ['p.mp3']
      })
    },
    q: {
      color: 'rgb(10,235,130)',
      sound: new Howl({
        src: ['q.mp3']
      })
    },
    r: {
      color: 'rgb(37,70,25)',
      sound: new Howl({
        src: ['r.mp3']
      })
    },
    s: {
      color: 'rgb(121,33,135)',
      sound: new Howl({
        src: ['s.mp3']
      })
    },
    t: {
      color: 'rgb(83,140,208)',
      sound: new Howl({
        src: ['t.mp3']
      })
    },
    u: {
      color: 'rgb(0,154,37)',
      sound: new Howl({
        src: ['u.mp3']
      })
    },
    v: {
      color: 'rgb(178,220,205)',
      sound: new Howl({
        src: ['v.mp3']
      })
    },
    w: {
      color: 'rgb(255,152,213)',
      sound: new Howl({
        src: ['w.mp3']
      })
    },
    x: {
      color: 'rgb(0,0,74)',
      sound: new Howl({
        src: ['x.mp3']
      })
    },
    y: {
      color: 'rgb(175,200,74)',
      sound: new Howl({
        src: ['y.mp3']
      })
    },
    z: {
      color: 'rgb(63,25,1)',
      sound: new Howl({
        src: ['z.mp3']
      })
    },

}


var shape=[];
var canvas=document.querySelector('canvas');
function circleShape(key,point){
    var newCircle=new Path.Circle(point,500);
    newCircle.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(newCircle);
}
function triangleShape(key,point){
    var triangle=new Path.RegularPolygon(point,3,300);
    triangle.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(triangle);
}
function fourShape(key,point){
    var four=new Path.RegularPolygon(point,4,300);
    four.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(four);
}
function fiveShape(key,point){
    var five=new Path.RegularPolygon(point,5,300);
    five.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(five);
}
function sixShape(key,point){
    var six=new Path.RegularPolygon(point,6,300);
    six.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(six);
}
function sevShape(key,point){
    var sev=new Path.RegularPolygon(point,7,300);
    sev.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(sev);
}
function eitShape(key,point){
    var eit=new Path.RegularPolygon(point,8,300);
    eit.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(eit);
}
function nineShape(key,point){
    var nine=new Path.RegularPolygon(point,9,300);
    nine.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(nine);
}
function decagonShape(key,point){
    var decagon=new Path.RegularPolygon(point,10,400);
    decagon.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(decagon);
}
function starShape(key,point){
    var points=12;
    var radius1=250;
    var radius2=400;
    var star=new Path.Star(point,points,radius1,radius2);
    star.fillColor=keyData[key].color;
    keyData[key].sound.play();
    shape.push(star);
}


function onKeyDown(event){
    var key=event.key;
    document.querySelector(".welcome").style.display="none";

    
        var maxpoint=new Point(view.size.width,view.size.height)
        var randompoint=Point.random();
        var point=maxpoint*randompoint;

        if(key === "a"|| key ==="c"){
            triangleShape(key, point);
          }else if(key === "f"|| key ==="h" || key === "i"){
            circleShape(key, point);
          }else if(key === "k"|| key === "l" || key === "n"){
            starShape(key, point);
          }else if(key === "q" || key ==="r" || key === "t"){
            decagonShape(key, point);
          }else if(key === "u"|| key === "v" || key ==="w"){
            starShape(key, point);
          }else if(key === "p" || key === "d"){
            fourShape(key, point);
          }else if(key === "b" || key === "j"){
            fiveShape(key, point);
          }else if(key === "g" || key === "o"){
            sixShape(key, point);
          }else if(key === "m" || key === "x"){
            sevShape(key, point);
          }else if(key === "s" || key === "y"){
            eitShape(key, point);
          }else if(key === "z" || key === "e"){
            nineShape(key, point);
          }
}

function onFrame(event){
    for(var i=0;i<shape.length;i++)
    {
        shape[i].fillColor.hue+=1;
        shape[i].scale(0.9);
        if(shape[i].area<1){
            shape[i].remove();
            shape.splice(i,1);
            i--;
        }
    }
}