// this is the planet yo
var density = 10;

var Planet = function( pos_x, pos_y, pos_z, rad, velx, vely, velz )
{
	this.x_ = pos_x;
	this.y_ = pos_y;
	this.z_ = pos_z;
	this.r_ = rad;
	this.m_ = density * 4 * Math.PI / 3 * rad * rad * rad;


	this.vx_ = velx;
	this.vy_ = vely;
	this.vz_ = velz;

	this.ax_ = 0;
	this.ay_ = 0;
	this.az_ = 0;

};


Planet.prototype.Opdate = function( dt ) {
	//console.log("AFTER:  vx: " + this.vx_ + "  vy: " + this.vy_ + "  vz: " + this.vz_ );
	this.vx_ += this.ax_ * dt;
	this.vy_ += this.ay_ * dt;
	this.vz_ += this.az_ * dt;
	//console.log("AFTER:  vx: " + this.vx_ + "  vy: " + this.vy_ + "  vz: " + this.vz_ );
	this.x_ += this.vx_ * dt;
	this.y_ += this.vy_ * dt;
	this.z_ += this.vz_ * dt;
};


Planet.prototype.SetAcceleration = function(a, b, c)
{
	this.ax_ = a;
	this.ay_ = b;
	this.az_ = c;
}


Planet.prototype.AddMass = function( mass )
{
	this.m_ += mass;
	console.log("my r before is " + this.r_);
	this.r_ = Math.cbrt(this.m_ * 3 / 4 / Math.PI / density) ;
	console.log("my r after is " + this.r_);
}