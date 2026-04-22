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

//5. ternary operator
let theme3 = "dark";
let themecolor3 = theme3 === "dark" ? "black" : "white";
console.log(themecolor3);


//6. nested if statement
let theme4 = "dark";
let mode4 = "light";
let themecolor4;
if (theme4 === "dark") {
    if (mode4 === "light") {
        themecolor4 = "gray";
    } else {
        themecolor4 = "black";
    }
} else {
    themecolor4 = "white";
}
console.log(themecolor4);

