import { getData }  from "./lib/service.js";

getData(1).then(result => {
    console.log(result);
}).catch(error => {
    console.log("Error:", error);
});



