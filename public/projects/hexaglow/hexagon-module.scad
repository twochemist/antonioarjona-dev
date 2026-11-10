// HexaGlow concept geometry. Dimensions are in millimetres.
// Set part to "housing", "diffuser" or "assembly".
part = "assembly";
outer_width = 145; // Flat-to-flat across the hexagon.
housing_depth = 22;
wall = 2.4;
back = 2.4;
diffuser_thickness = 2;
diffuser_clearance = 0.35; // Per side.
led_to_diffuser = 16; // Planned optical test distances: 12 and 16 mm.

module hex_prism(width, height) {
    cylinder(h = height, r = width / sqrt(3), $fn = 6);
}

rim_width = outer_width - 2 * wall;
opening_width = rim_width - 2 * wall;
diffuser_seat = back + led_to_diffuser;

assert(diffuser_seat + diffuser_thickness <= housing_depth);
assert(opening_width > 0 && diffuser_clearance < wall);

module housing() {
    difference() {
        hex_prism(outer_width, housing_depth);
        translate([0, 0, back])
            hex_prism(opening_width, housing_depth);
        translate([0, 0, diffuser_seat])
            hex_prism(rim_width, housing_depth);
        translate([-4, -outer_width / 2 - 1, -1])
            cube([8, wall * 3 + 1, back + 5]);
    }
}

module diffuser() {
    hex_prism(rim_width - 2 * diffuser_clearance, diffuser_thickness);
}

if (part == "housing" || part == "assembly")
    color("#32353a") housing();

if (part == "diffuser")
    diffuser();

if (part == "assembly")
    translate([0, 0, diffuser_seat])
        color("#f2eee3", 0.75) diffuser();
