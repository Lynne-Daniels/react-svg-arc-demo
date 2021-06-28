// CONSTANTS


/** angle from top of gauge to min or max in degrees */
const DEGREES_IN_HALF_ARC = 120;

/** angle from the top clockwise to the minimum end stop in radians */
const ANGLE_START = -DEGREES_IN_HALF_ARC*Math.PI/180;

/** angle from the top clockwise to the maximum end stop in radians */
const ANGLE_END  = DEGREES_IN_HALF_ARC*Math.PI/180;

const ANGLE_RANGE = ANGLE_END-ANGLE_START; // radians

const DISK_RADIUS = 332/2;

const GROOVE_RADIUS = 318/2;

const HISTORY_BAND_RADIUS      = GROOVE_RADIUS;