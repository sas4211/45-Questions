"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ["ali", "amir", "asma", "sara", "raza"];
//for(let i=0; i<guest_list.length; i++){
//console.log("RESPECTED SIR/MADAME " + guest_list[i] + ".\nYOU ARE INVITED FOR GRAND DINNER.\nTHANK YOU.\n")};
// guest not coming and new guest
let not_coming = "asma";
let new_guest = "maria";
guest_list[2] = new_guest;
//for(let i=0; i<guest_list.length;i++){
// console.log("RESPECTED SIR/MADAME " + guest_list[i] + ".\nYOU ARE INVITED FOR GRAND DINNER.\nTHANK YOU.\n")};
console.log(`MISS. ${not_coming} WILL NOT BE COMING`);
// add new guest
guest_list.unshift("mustafa", "ahmed", "fatima");
for (let i = 0; i < guest_list.length; i++) {
    console.log("RESPECTED SIR/MADAME " + guest_list[i] + ".\nYOU ARE INVITED FOR GRAND DINNER AS WE HAVE GOT A BIGGER TABLE.\nTHANK YOU.\n");
}
;
