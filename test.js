var cities = [{key:1, locaion:"Hyderabad - Banjara Hills"}, {key:2, locaion:"Hyderabad - Nampally"}, {key:3, locaion:"Hyderbad - Hitech City"}];
var key = cities.filter(x => x.key == abc);
$("select[name='menu-963'] option[value="+key[0].location+"]").prop("selected", true);
