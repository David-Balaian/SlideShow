arrimages = [
    "https://images.unsplash.com/photo-1505699261378-c372af38134c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&w=1000&q=80",
    "https://wallpapercave.com/wp/8qSJvU2.jpg",
    "https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://wallpaperplay.com/walls/full/3/d/0/296309.jpg",
];

let all = document.getElementById("allimages");
let len = arrimages.length;
let addwindow;


for(let i=0; i<len; i++){
    let newimg = document.createElement("img");
    newimg.setAttribute("src",arrimages[i]);
    newimg.setAttribute("height","50px");
    newimg.setAttribute("width","70px");
    newimg.style.padding = "10px 10px";
    all.appendChild(newimg);
}

let newi = document.createElement("i");
    newi.className = "far fa-plus-square fa-4x";
    newi.setAttribute("id","add")
    all.appendChild(newi);
    newi.addEventListener("click",addimage)


let idinterval;
let playbutton = document.getElementsByTagName("i");


function play() {
    if (playbutton[1].className == "fas fa-play") {
        playbutton[1].className = "fas fa-pause";
        image = document.getElementById("pic");
        let i = arrimages.indexOf(image.src);
        idinterval = setInterval(function () {
            i++;
            if (i == len) {
                i = 0;
            }
            image.setAttribute("src",arrimages[i]);
            let p = (i == 0) ? len-1 : (i == len) ? 0 : i-1; 
            minimised(i,p);
        }, 1000);

    } else {
        playbutton[1].className = "fas fa-play";
        clearInterval(idinterval);
    }
}


function next(){
    if(idinterval){        
        playbutton[1].className = "fas fa-play";
        clearInterval(idinterval);
    }
    image = document.getElementById("pic");
        let i = arrimages.indexOf(image.src);
        i=(i==len-1) ? 0 : i+1;
        image.setAttribute("src",arrimages[i]);

        let p = (i == 0) ? len-1 : i-1; 
        minimised(i,p);
    }


function pervious(){
    if(idinterval){        
        playbutton[1].className = "fas fa-play";
        clearInterval(idinterval);
    }
    image = document.getElementById("pic");
        let i = arrimages.indexOf(image.src);
        i=(i==0) ? len-1 : i-1;
        image.setAttribute("src",arrimages[i]);
        let p = (i==len-1) ? 0 :  i+1;
        minimised(i,p); 
}


function minimised(index, perviousindex){
    let allmins = document.querySelectorAll("#allimages>img");
    allmins[index].style.border = "2px solid black";
    allmins[perviousindex].style.border = "none";
}


function addimage(){
    if(!addwindow){
    document.getElementsByTagName("body")[0].style.transitionDuration = "0.2s";
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgba(165, 42, 42, 0.383)";
    document.getElementById("slidecontent").style.opacity = 0.2;
    document.getElementsByTagName("body")[0].style.position = "relative";
    addwindow = document.createElement("div");
    addwindow.setAttribute("id","filewindow");
    Object.assign(addwindow.style,{
        position:"absolute",
        right:"center",
        bottom: "200px",
        width:"60%",
        height:"60vh",
        backgroundColor:"wheat",
        borderRadius:"50px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    });
    document.getElementsByTagName("body")[0].appendChild(addwindow);
    let urltext = document.createElement("h4");
    urltext.appendChild(document.createTextNode("Enter a valid URL of image: "));
    
    let urltext1 = document.createElement("h4");
    urltext1.style.margin = "0 10px 0 10px";
    let url = document.createElement("input");
    url.setAttribute("id","fileurl");
    url.style.marginLeft="10px";
    let close = document.createElement("button");
    let closeicon = document.createElement("i");
 
    closeicon.className = "far fa-times-circle fa-2x";
    close.style.position = "absolute";
    close.style.top = 0;
    close.style.right = 0;
    close.appendChild(closeicon);
    addwindow.appendChild(close);
    addwindow.appendChild(urltext);
    addwindow.appendChild(url);
    addwindow.appendChild(urltext1);
    Addurl = document.createElement("button");
    Addurl.innerHTML = "ADD";
    Addurl.style.position="absolute";
    Addurl.style.bottom="50px";
    Addurl.style.right="center";    
    Addurl.style.fontSize = "20px";
    Addurl.style.padding="5px 40px 5px 40px";
    addwindow.appendChild(Addurl);
    close.addEventListener("click",closing);
    Addurl.addEventListener("click",addingurl);

}else{
    document.getElementById("filewindow").style.display = "flex";
    document.getElementsByTagName("body")[0].style.transitionDuration = "0.5s";
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgba(165, 42, 42, 0.383)";
    document.getElementById("slidecontent").style.opacity = 0.2;
    document.getElementsByTagName("body")[0].style.position = "relative";
    }
}

function closing(){
    document.getElementById("filewindow").style.display = "none";
    document.getElementsByTagName("body")[0].style.transitionDuration = "0.5s";
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgba(165, 42, 42)";
    document.getElementById("slidecontent").style.opacity = 1;
}

function addingurl(){
    let file = document.getElementById("fileurl")
    let bool = (/\.(jpg|jpeg|png)$/i).test(file.value.trim());
    let invalid = document.querySelector("#filewindow>h4");
    if(bool){
        file.style.border = "none";
        invalid.style.color="black";
        arrimages.push(file.value.trim());
        closing();
        updateimg();
    }else{
        invalid.style.color="red"
        file.style.border = "3px  solid red";
    }
}

function updateimg(){
    let allimg = document.querySelectorAll("#allimages>img");
    allimg1 = Array.from(allimg);
    allimg1 = allimg1.map(item => {return item.src;})
    for(let i=0; i<arrimages.length; i++){
        if(!allimg1.includes(arrimages[i])){
            let newimg = document.createElement("img");
            newimg.setAttribute("src",arrimages[i]);
            newimg.setAttribute("height","50px");
            newimg.setAttribute("width","70px");
            newimg.style.padding = "10px 10px";
            all.insertBefore(newimg,document.querySelector("#allimages i"));
        }
    }
    len = arrimages.length;
}

function isURLimage(str){
    return (/\.(gif|jpg|jpeg|tiff|png)$/i).test(str)
    
}