function timeConversion(s) {
    // Write your code here
     
let Hours24 = s.slice(0, 8);
let PM = s.slice(8,10);
let AM = s.slice(8,10);
let Hour = Number(s.slice(0,2));


if (PM == 'PM' && Hour != 12) {
    
    return Hours24.replace(s.slice(0,2), String(Hour + 12));
}
else if (AM == 'AM' && Hour == 12) {
    return Hours24.replace(s.slice(0,2), '00');
}

return Hours24

}
