const http = require('http');
const url = require('url');



http.createServer((req, res) => {

let pathName = url.parse(req.url, true).pathname;
if(pathName === '/metrics'){

let userValue = url.parse(req.url, true).query

if(userValue.object === 'circle' && userValue.metric === 'area' && userValue.radius ){

let area = Math.PI *  Math.pow(`${userValue.radius}`, 2)

let final_Area = area.toFixed(2);

res.end(`Area of circle is ${final_Area}`)

}else if(userValue.object === 'sphere' && userValue.metric === 'surfaceArea' &&  userValue.radius){

    let surface_Area = 4 * Math.PI * Math.pow(`${userValue.radius}`, 2)

    let final_surfaceArea = surface_Area.toFixed(2);

    res.end(`Surface area of sphere is ${final_surfaceArea}`)

}else if(userValue.object === 'sphere' && userValue.metric === 'volume' &&  userValue.radius){

    let volume = 4/3 * Math.PI * Math.pow(`${userValue.radius}`, 3)
    
    let final_Volume = volume.toFixed(2)

    res.end(`Volume of sphere is ${final_Volume}`)

}


else{

    res.end('Check object, metric and radius')
}

}else{

    res.end('Url is invalid')
}
   
}).listen(8080, () => 
console.log('Server is running'));