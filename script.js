//conditional statements
//1. if statement
let mode = "dark";
let color;
if (mode ==="dark"){
    color="black"
};
if (mode==="light"){
    color="white"
}
console.log(color);
//2. if-else statement
let theme = "dark";
let themecolor;
if (theme ==="dark"){
   themecolor="black"
}else{
     themecolor="white"
};
console.log(themecolor)
//3. else-if statement
let theme1 = "dark";
let themecolor1;
if (theme1 ==="dark"){
    themecolor1="black"
}else if(theme1==="light"){
    themecolor1="white"
}else{
    themecolor1="gray"
}
console.log(themecolor1);

//4. switch statement   
let theme2 = "dark";
let themecolor2;
switch (theme2) {
    case "dark":
        themecolor2 = "black";
        break;
    case "light":
        themecolor2 = "white";
        break;
    default:
        themecolor2 = "gray";
}
console.log(themecolor2);

