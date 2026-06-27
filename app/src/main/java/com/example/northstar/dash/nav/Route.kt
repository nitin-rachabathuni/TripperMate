package com.example.northstar.dash.nav

/** Maneuver glyphs the Tripper dash understands (best-effort map from OSRM → dash bytes).
 *  0x0B (continue) and 0x3C (roundabout) are confirmed from protocol captures; others
 *  follow the RE navigation resource table and may need on-bike tuning per firmware. */
enum class ManeuverType { CONTINUE, TURN_LEFT, TURN_RIGHT, SLIGHT_LEFT, SLIGHT_RIGHT,
    SHARP_LEFT, SHARP_RIGHT, UTURN, ROUNDABOUT, DEPART, ARRIVE;

    companion object {
        /** Map an OSRM step maneuver (type + modifier) to our enum. */
        fun fromOsrm(type: String?, modifier: String?): ManeuverType = when (type) {
            "depart"   -> DEPART
            "arrive"   -> ARRIVE
            "roundabout", "rotary" -> ROUNDABOUT
            "fork", "end of road", "turn", "new name", "continue", "merge", "on ramp", "off ramp" ->
                when (modifier) {
                    "left"         -> TURN_LEFT
                    "right"        -> TURN_RIGHT
                    "slight left"  -> SLIGHT_LEFT
                    "slight right" -> SLIGHT_RIGHT
                    "sharp left"   -> SHARP_LEFT
                    "sharp right"  -> SHARP_RIGHT
                    "uturn"        -> UTURN
                    else           -> CONTINUE
                }
            else -> CONTINUE
        }
    }

    /** Dash maneuver glyph byte for this turn type. */
    fun dashGlyph(): Int = when (this) {
        TURN_LEFT    -> 0x01
        TURN_RIGHT   -> 0x02
        SLIGHT_LEFT  -> 0x03
        SLIGHT_RIGHT -> 0x04
        SHARP_LEFT   -> 0x05
        SHARP_RIGHT  -> 0x06
        UTURN        -> 0x07
        ARRIVE       -> 0x08
        ROUNDABOUT   -> 0x3C   // confirmed in nav route-card capture
        DEPART, CONTINUE -> 0x0B  // continue / straight — hardware-verified
    }
}

/** One routing instruction located at a point along the geometry. */
data class Maneuver(
    val type: ManeuverType,
    val instruction: String,
    val location: GeoPoint,
    /** Cumulative distance (m) from the route start to this maneuver's location. */
    val cumulativeMeters: Double,
) {
    val dashCode: Int get() = type.dashGlyph()
}

/** A computed road route from origin to destination. */
data class Route(
    val geometry: List<GeoPoint>,
    val maneuvers: List<Maneuver>,
    val totalMeters: Double,
    val totalSeconds: Double,
    /** Cumulative distance (m) at each geometry vertex — same length as [geometry]. */
    val cumulative: DoubleArray,
) {
    val destination: GeoPoint? get() = geometry.lastOrNull()
}
