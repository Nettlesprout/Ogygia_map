function Config() {}
var config = new Config();
config.size = 16;
config.step = 256;
config.x = 2288;
config.y = 1983;
config.mode = "3d";
config.showDeedBordersIn3dMode = false;
config.showDeedBordersInFlatMode = true;

function Deed(name, x, y, height, permanent, sx, sy, ex, ey) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.sx = sx;
	this.sy = sy;
	this.ex = ex;
	this.ey = ey;
	this.height = height;
	this.permanent = permanent;
}

var deeds = [];
deeds.push(new Deed('Esperia', 2288, 1983, 100, true, 2283, 1978, 2293, 1988));
deeds.push(new Deed('Monstrous Meadows', 2570, 1867, 69, false, 2560, 1856, 2580, 1877));
deeds.push(new Deed('Loon Lake', 2338, 1922, 5, false, 2333, 1917, 2343, 1930));
deeds.push(new Deed('Grande Maison', 1756, 2298, 45, false, 1751, 2293, 1761, 2303));
deeds.push(new Deed('Tanelorn', 1780, 2296, 3, false, 1772, 2291, 1790, 2308));
deeds.push(new Deed('Infinity Fortress', 2236, 1987, 149, false, 2231, 1982, 2241, 1992));
deeds.push(new Deed('Bakouna', 579, 3157, 29, false, 574, 3152, 584, 3162));
deeds.push(new Deed('Wodenwood', 1489, 3528, 13, false, 1470, 3523, 1494, 3542));
deeds.push(new Deed('Sanssouci', 2147, 2540, 181, false, 2142, 2535, 2152, 2545));
