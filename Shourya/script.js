var data = [{
	"name": "Apple",
	"color": "red",
	"count": 3,
	"expiry": "2-02-2020"
},
{
	"name": "Mango",
	"color": "yellow",
	"count": 3,
	"expiry": "2-02-2020"
},
{
	"name": "Orange",
	"color": "orange",
	"count": 3,
	"expiry": "2-02-2020"
}]
function func1() {
    document.getElementById('yok').style.backgroundColor = "red";
}

function func2() {
    document.getElementById('yok').style.backgroundColor = "black";
}

function func() {
    document.getElementById("y").style.backgroundColor = "yellow";
}
function start()
{
		for(var x=0;x<6;x++)
		{
		if(data[x]==undefined)
		{
			document.querySelector("#demo"+x).innerHTML = "Empty";
		 txt = "<b>Color: </b>"+"Empty"+"<br><b>Count: </b>"+"Empty"+"<br><b>Expiry: </b>"+"Empty";
		 document.querySelector("#details"+x).innerHTML = txt;
		}
		else
		{
		 document.querySelector("#demo"+x).innerHTML = data[x].name;
		 txt = "<b>Color: </b>"+data[x].color+"<br><b>Count: </b>"+data[x].count+"<br><b>Expiry: </b>"+data[x].expiry
		 document.querySelector("#details"+x).innerHTML = txt;
		}
		}
}
function add()
{
		var w = String(document.getElementById('name').value);
		var x = String(document.getElementById('color').value);
		var y = String(document.getElementById('count').value);
		var z = String(document.getElementById('date').value);
		console.log(w+x+y+z);
		if(w==undefined)
			w="Not provided";
		if(x==undefined)
			w="Not provided";
		if(y==undefined)
			y="Not provided";
		if(z==undefined)
			z="Not provided";
		let s = '{ "name": "'+w+'","color": "'+x+'","count": "'+y+'","expiry": "'+z+'"}';
		obj = JSON.parse(s);
		data.push(obj);
		setTimeout(start(),10000);
		
}
function del(x)
{
	data.splice(x,1);
	console.log(data);
	setTimeout(start(),10000);
}