let data = {
    'name': ['1', '2', '3'],
    'id': ['1', '2', '3'],
    'demo': ['1', '2', '3']
};

if(data['name'] != undefined){
    console.log("name exist");
}
if(data['fuck'] == undefined){
    console.log("fuck not exist");
}

let xx = {};

xx['name'] = 20;
xx['name'] = 30;
console.log(xx);