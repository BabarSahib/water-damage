export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
  tagline: string;
  benefits: string[];
  image: string;
}

export interface StateData {
  name: string;
  slug: string;
  abbr: string;
  metaDesc?: string;
}

export interface CityData {
  name: string;
  slug: string;
  county: string;
  stateSlug: string;
  stateAbbr: string;
  stateName: string;
  zipCodes: string[];
  neighborhoods: string[];
  landmarks: string[];
  climateNote: string;
  commonProblems: string[];
  nearbyCities: { name: string; slug: string }[];
}

export const BUSINESS_INFO = {
  name: "Rapid Water Rescue Pros",
  legalName: "Rapid Water Rescue Pros LLC",
  primaryKeyword: "Emergency Water Extraction",
  phone: "+18667519896",
  phoneFormatted: "(866) 751-9896",
  phoneTel: "tel:8667519896",
  email: "dispatch@rapidwaterrescuepros.com",
  url: "https://rapidwaterrescuepros.com",
  domain: "rapidwaterrescuepros.com",
  address: {
    street: "100 Pine Street, Suite 1250",
    city: "San Francisco",
    state: "CA",
    stateFull: "California",
    zip: "94111",
    country: "US"
  },
  hours: "24/7/365 Emergency Service",
  rating: {
    value: "4.9",
    count: "482",
    best: "5.0"
  }
};

export const SERVICES: Service[] = [
  {
    slug: "emergency-water-extraction",
    name: "Emergency Water Extraction",
    shortDesc: "Rapid-response truck-mounted water extraction to remove standing floodwater, burst pipe floods, and appliance overflows in under 60 minutes.",
    icon: "water-flash",
    tagline: "Round-the-clock emergency water removal to prevent structural ruin and toxic mold.",
    image: "/images/services/emergency-water-extraction.jpg",
    benefits: [
      "Under-60-minute dispatch response day or night",
      "Industrial high-lift truck-mounted vacuum extractors",
      "Infrared thermal imaging to locate trapped hidden moisture",
      "EPA-registered antimicrobial treatments to prevent fungal blooms"
    ]
  },
  {
    slug: "24-7-water-extraction",
    name: "24/7 Water Extraction",
    shortDesc: "Continuous around-the-clock water removal for active leaks, severe storm flooding, and emergency residential inundation.",
    icon: "clock-flash",
    tagline: "24/7/365 live dispatch and rapid mobilization for urgent water disasters.",
    image: "/images/services/24-7-water-extraction.jpg",
    benefits: [
      "Immediate live operator dispatch with zero hold time",
      "Submersible trash pumps for deep pools and basements",
      "Heavy-duty weighted carpet and subfloor extractors",
      "Continuous daily moisture tracking and dry certification"
    ]
  },
  {
    slug: "flood-water-removal",
    name: "Flood Water Removal",
    shortDesc: "Complete Category 1, 2, and 3 flood water containment, sewage pump-outs, and thorough commercial-grade decontamination.",
    icon: "wave",
    tagline: "Thorough removal of storm surges, street runoff, and contaminated floodwaters.",
    image: "/images/services/flood-water-removal.jpg",
    benefits: [
      "Hazardous Category 3 biohazard extraction protocol",
      "Heavy-duty submersible trash pumps",
      "Hospital-grade sanitization and EPA-registered disinfectants",
      "Direct insurance claim documentation and billing support"
    ]
  },
  {
    slug: "basement-water-extraction",
    name: "Basement Water Extraction",
    shortDesc: "Specialized pump-out solutions for flooded basements, failed sump pumps, foundation seepage, and crawlspace water puddles.",
    icon: "house-flood",
    tagline: "Save your foundation, support beams, and stored valuables from basement flooding.",
    image: "/images/services/basement-water-extraction.jpg",
    benefits: [
      "Deep extraction for concrete slabs, footings, and crawlspaces",
      "Submersible sump pump replacement and emergency backup",
      "Commercial LGR dehumidifiers to stop foundation rot",
      "Moisture barrier installation and structural drying"
    ]
  },
  {
    slug: "standing-water-removal",
    name: "Standing Water Removal",
    shortDesc: "Eliminate pooling water under hardwood floors, inside walls, ceilings, and crawlspaces before structural wood rot sets in.",
    icon: "droplet-alert",
    tagline: "Fast pump-outs and targeted suction for stubborn stagnant pools inside any structure.",
    image: "/images/services/standing-water-removal.jpg",
    benefits: [
      "Rapid elimination of stagnant pools and odor sources",
      "Cavity wall injection drying systems",
      "Subfloor vacuum extraction panels",
      "Precision moisture meter readings at every step"
    ]
  },
  {
    slug: "water-damage-mitigation",
    name: "Water Damage Mitigation",
    shortDesc: "Full-scale damage mitigation including controlled demolition of wet drywall, structural drying, and moisture stabilization.",
    icon: "shield-check",
    tagline: "Stop water spread in its tracks and stabilize your property immediately.",
    image: "/images/services/water-damage-mitigation.jpg",
    benefits: [
      "IICRC-certified mitigation technicians on site",
      "Air scrubbers with HEPA filtration for air safety",
      "Detailed thermal moisture mapping reports",
      "Seamless handoff to insurance adjusters"
    ]
  },
  {
    slug: "emergency-flood-cleanup",
    name: "Emergency Flood Cleanup",
    shortDesc: "Comprehensive cleanup service for broken pipes, plumbing backups, storms, and ruptured appliances with total sanitation.",
    icon: "broom-sparkle",
    tagline: "From catastrophic inundation to clean, dry, sanitized living spaces.",
    image: "/images/services/emergency-flood-cleanup.jpg",
    benefits: [
      "Rapid debris removal and damaged drywall tear-outs",
      "Deodorization and industrial ozone / hydroxyl treatments",
      "Structural framing drying and stabilization",
      "Complete 100% moisture clearance guarantees"
    ]
  },
  {
    slug: "water-heater-removal",
    name: "Water Heater Removal & Replacement",
    shortDesc: "Safe disconnection, rapid tank draining, complete removal, and professional extraction of leaking or burst water heaters.",
    icon: "water-tank",
    tagline: "Immediate removal and flood containment for failed, leaking, or ruptured water heaters.",
    image: "/images/services/water-heater-removal.jpg",
    benefits: [
      "Immediate valve isolation and electrical/gas disconnection",
      "High-speed pump draining of contaminated tank sediment",
      "Safe extraction and certified appliance disposal",
      "Complete drying of subflooring, drywall, and baseboards"
    ]
  }
];

export const ALL_STATES: StateData[] = [
  { name: "Alabama", slug: "alabama", abbr: "AL" },
  { name: "Alaska", slug: "alaska", abbr: "AK" },
  { name: "Arizona", slug: "arizona", abbr: "AZ" },
  { name: "Arkansas", slug: "arkansas", abbr: "AR" },
  { name: "California", slug: "california", abbr: "CA" },
  { name: "Colorado", slug: "colorado", abbr: "CO" },
  { name: "Connecticut", slug: "connecticut", abbr: "CT" },
  { name: "Delaware", slug: "delaware", abbr: "DE" },
  { name: "District of Columbia", slug: "district-of-columbia", abbr: "DC" },
  { name: "Florida", slug: "florida", abbr: "FL" },
  { name: "Georgia", slug: "georgia", abbr: "GA" },
  { name: "Hawaii", slug: "hawaii", abbr: "HI" },
  { name: "Idaho", slug: "idaho", abbr: "ID" },
  { name: "Illinois", slug: "illinois", abbr: "IL" },
  { name: "Indiana", slug: "indiana", abbr: "IN" },
  { name: "Iowa", slug: "iowa", abbr: "IA" },
  { name: "Kansas", slug: "kansas", abbr: "KS" },
  { name: "Kentucky", slug: "kentucky", abbr: "KY" },
  { name: "Louisiana", slug: "louisiana", abbr: "LA" },
  { name: "Maine", slug: "maine", abbr: "ME" },
  { name: "Maryland", slug: "maryland", abbr: "MD" },
  { name: "Massachusetts", slug: "massachusetts", abbr: "MA" },
  { name: "Michigan", slug: "michigan", abbr: "MI" },
  { name: "Minnesota", slug: "minnesota", abbr: "MN" },
  { name: "Mississippi", slug: "mississippi", abbr: "MS" },
  { name: "Missouri", slug: "missouri", abbr: "MO" },
  { name: "Montana", slug: "montana", abbr: "MT" },
  { name: "Nebraska", slug: "nebraska", abbr: "NE" },
  { name: "Nevada", slug: "nevada", abbr: "NV" },
  { name: "New Hampshire", slug: "new-hampshire", abbr: "NH" },
  { name: "New Jersey", slug: "new-jersey", abbr: "NJ" },
  { name: "New Mexico", slug: "new-mexico", abbr: "NM" },
  { name: "New York", slug: "new-york", abbr: "NY" },
  { name: "North Carolina", slug: "north-carolina", abbr: "NC" },
  { name: "North Dakota", slug: "north-dakota", abbr: "ND" },
  { name: "Ohio", slug: "ohio", abbr: "OH" },
  { name: "Oklahoma", slug: "oklahoma", abbr: "OK" },
  { name: "Oregon", slug: "oregon", abbr: "OR" },
  { name: "Pennsylvania", slug: "pennsylvania", abbr: "PA" },
  { name: "Rhode Island", slug: "rhode-island", abbr: "RI" },
  { name: "South Carolina", slug: "south-carolina", abbr: "SC" },
  { name: "South Dakota", slug: "south-dakota", abbr: "SD" },
  { name: "Tennessee", slug: "tennessee", abbr: "TN" },
  { name: "Texas", slug: "texas", abbr: "TX" },
  { name: "Utah", slug: "utah", abbr: "UT" },
  { name: "Vermont", slug: "vermont", abbr: "VT" },
  { name: "Virginia", slug: "virginia", abbr: "VA" },
  { name: "Washington", slug: "washington", abbr: "WA" },
  { name: "West Virginia", slug: "west-virginia", abbr: "WV" },
  { name: "Wisconsin", slug: "wisconsin", abbr: "WI" },
  { name: "Wyoming", slug: "wyoming", abbr: "WY" }
];

export const CALIFORNIA_CITIES: CityData[] = [
  {
    name: "Los Angeles",
    slug: "los-angeles",
    county: "Los Angeles County",
    stateSlug: "california",
    stateAbbr: "CA",
    stateName: "California",
    zipCodes: ["90001", "90012", "90024", "90028", "90036", "90045", "90049", "90068", "90077", "90210"],
    neighborhoods: ["Silver Lake", "Koreatown", "Brentwood", "Hollywood Hills", "Echo Park", "Downtown LA", "Westwood", "Venice", "Sherman Oaks", "Los Feliz"],
    landmarks: ["Griffith Observatory", "Dodger Stadium", "The Getty Center", "Union Station", "Crypto.com Arena", "Wilshire Boulevard"],
    climateNote: "Heavy seasonal winter atmospheric rivers clash with dry summer heat, while older multi-story plumbing and seismic tremors stress tank connections and pressure relief valves.",
    commonProblems: [
      "Severe internal tank rust triggered by municipal hard water mineral deposits in older Los Angeles bungalows",
      "Burst temperature and pressure relief valves dumping 50 to 80 gallons of scalding water into residential garages and finished basements",
      "Corroded galvanized inlet nipples failing after ground tremors, saturating subflooring across multi-unit apartment buildings",
      "Sudden bottom-pan ruptures flooding adjacent living rooms, hallways, and kitchen cabinetry"
    ],
    nearbyCities: [
      { name: "Long Beach", slug: "long-beach" },
      { name: "Anaheim", slug: "anaheim" },
      { name: "Bakersfield", slug: "bakersfield" }
    ]
  },
  {
    name: "San Diego",
    slug: "san-diego",
    county: "San Diego County",
    stateSlug: "california",
    stateAbbr: "CA",
    stateName: "California",
    zipCodes: ["92101", "92103", "92109", "92115", "92120", "92126", "92130", "92154"],
    neighborhoods: ["Pacific Beach", "North Park", "La Jolla", "Hillcrest", "Point Loma", "Clairemont", "Chula Vista Border", "Mission Valley", "Ocean Beach"],
    landmarks: ["Balboa Park", "USS Midway Museum", "Cabrillo National Monument", "Hotel del Coronado", "Gaslamp Quarter", "San Diego Bay"],
    climateNote: "Marine layer salt air accelerates exterior galvanic corrosion on water heater fittings, while high water pressure surges along coastal elevations split weakened internal glass linings.",
    commonProblems: [
      "Coastal salt fog accelerating electrolytic corrosion on water heater copper-to-galvanized transitions",
      "Unregulated city main pressure spikes blowing out thermal expansion tanks and bottom seals in Mission Valley townhomes",
      "Corroded bottom sediment tanks bursting in attic or closet enclosures, sending water cascading through ceiling drywall",
      "Standing floodwater spreading across slab foundations in La Jolla and Pacific Beach beach residences"
    ],
    nearbyCities: [
      { name: "Los Angeles", slug: "los-angeles" },
      { name: "Anaheim", slug: "anaheim" },
      { name: "Long Beach", slug: "long-beach" }
    ]
  },
  {
    name: "San Jose",
    slug: "san-jose",
    county: "Santa Clara County",
    stateSlug: "california",
    stateAbbr: "CA",
    stateName: "California",
    zipCodes: ["95110", "95112", "95120", "95123", "95125", "95129", "95132", "95136"],
    neighborhoods: ["Willow Glen", "Rose Garden", "Almaden Valley", "Downtown San Jose", "Silver Creek", "Cambrian Park", "Japan Town", "Berryessa"],
    landmarks: ["Winchester Mystery House", "SAP Center", "Plaza de César Chávez", "San Jose State University", "Santana Row"],
    climateNote: "Silicon Valley hard water creates thick calcium and magnesium scaling along bottom heating elements, trapping heat and causing steel tank thermal fatigue and sudden tank rupture.",
    commonProblems: [
      "Severe limestone and calcium carbonate sediment build-up insulating tank bottoms until the steel weld overheats and splits",
      "Slow hidden pinhole leaks in utility closets rotting perimeter sill plates and wall studs before detection",
      "Failed electric heating element gaskets releasing steady flows into carpeted family rooms",
      "High volume water heater drainage requirements in high-tech home offices and smart homes"
    ],
    nearbyCities: [
      { name: "San Francisco", slug: "san-francisco" },
      { name: "Oakland", slug: "oakland" },
      { name: "Fremont", slug: "fremont" }
    ]
  },
  {
    name: "San Francisco",
    slug: "san-francisco",
    county: "San Francisco County",
    stateSlug: "california",
    stateAbbr: "CA",
    stateName: "California",
    zipCodes: ["94102", "94107", "94109", "94110", "94114", "94118", "94121", "94122", "94133"],
    neighborhoods: ["Mission District", "Pacific Heights", "Marina District", "Sunset District", "Richmond District", "Noe Valley", "Nob Hill", "SOMA", "Castro"],
    landmarks: ["Golden Gate Bridge", "Alcatraz Island", "Coit Tower", "Palace of Fine Arts", "Ferry Building", "Lombard Street"],
    climateNote: "Century-old Victorian and Edwardian architecture with narrow stairwells, unvented basements, and aging supply lines creates severe flood damage when water heaters fail on upper floors.",
    commonProblems: [
      "Upper-floor water heater failure in multi-level Victorian homes pouring water through three stories of plaster and lath",
      "Seismic strap failures loosening rigid gas lines and copper pipes during minor tremors",
      "Cramped sub-grade crawlspace leaks remaining unnoticed until black mold permeates living spaces",
      "Submersible pump-outs required for subterranean garage flooding in low-elevation Marina and Sunset neighborhoods"
    ],
    nearbyCities: [
      { name: "Oakland", slug: "oakland" },
      { name: "San Jose", slug: "san-jose" },
      { name: "Sacramento", slug: "sacramento" }
    ]
  },
  {
    name: "Fresno",
    slug: "fresno",
    county: "Fresno County",
    stateSlug: "california",
    stateAbbr: "CA",
    stateName: "California",
    zipCodes: ["93701", "93704", "93710", "93720", "93722", "93726", "93727"],
    neighborhoods: ["Tower District", "Woodward Park", "Fig Garden", "Sunnyside", "West Fresno", "Roosevelt", "Bullard", "Huntington Park"],
    landmarks: ["Fresno Chaffee Zoo", "Forestiere Underground Gardens", "Tower Theatre", "Save Mart Center", "Kearney Mansion"],
    climateNote: "Extreme Central Valley summer heat waves push attic and garage ambient temperatures above 120°F, creating hyper-pressurized tank conditions that burst aging relief valves.",
    commonProblems: [
      "Garage-installed water heater splits under combined ambient heat and high internal steam pressure",
      "Agricultural groundwater mineral hardness chewing through sacrificial anode rods in under 3 years",
      "Sub-floor pooling in single-story slab properties destroying laminate and engineered wood flooring",
      "Overflowing drip pans with clogged drain lines causing structural dry rot in utility rooms"
    ],
    nearbyCities: [
      { name: "Bakersfield", slug: "bakersfield" },
      { name: "Sacramento", slug: "sacramento" },
      { name: "San Jose", slug: "san-jose" }
    ]
  },
  {
    name: "Sacramento",
    slug: "sacramento",
    county: "Sacramento County",
    stateSlug: "california",
    stateAbbr: "CA",
    stateName: "California",
    zipCodes: ["95814", "95816", "95819", "95822", "95825", "95831", "95835", "95842"],
    neighborhoods: ["Midtown", "East Sacramento", "Land Park", "Natomas", "Pocket-Greenhaven", "Tahoe Park", "Oak Park", "Curtis Park"],
    landmarks: ["California State Capitol", "Tower Bridge", "Old Sacramento Waterfront", "Golden 1 Center", "Crocker Art Museum"],
    climateNote: "Sacramento River delta moisture and winter flood basins raise groundwater tables, while aging bungalow plumbing systems frequently suffer catastrophic backflow and burst water heaters.",
    commonProblems: [
      "Delta moisture and high water table exacerbating basement seepage when water heaters leak into subterranean spaces",
      "Tree root intrusion on discharge drains causing water heater emergency overflow pans to back up inside homes",
      "Ruptured commercial and residential tank seams saturating plaster walls in historic Midtown properties",
      "Immediate moisture extraction needed for hardwood floors in Land Park and East Sacramento estates"
    ],
    nearbyCities: [
      { name: "San Francisco", slug: "san-francisco" },
      { name: "Oakland", slug: "oakland" },
      { name: "Fresno", slug: "fresno" }
    ]
  },
  {
    name: "Long Beach",
    slug: "long-beach",
    county: "Los Angeles County",
    stateSlug: "california",
    stateAbbr: "CA",
    stateName: "California",
    zipCodes: ["90802", "90803", "90804", "90807", "90808", "90814", "90815"],
    neighborhoods: ["Belmont Shore", "Bixby Knolls", "Naples Island", "Downtown Long Beach", "Cal Heights", "Alamitos Beach", "Park Estates"],
    landmarks: ["The Queen Mary", "Aquarium of the Pacific", "Long Beach Waterfront", "Pike Outlets", "Naples Canals"],
    climateNote: "Harbor moisture and heavy coastal humidity cause aggressive oxidation on water heater casing, pilot assemblies, and cold water intake lines throughout canal and shoreline homes.",
    commonProblems: [
      "Marine air rust compromising water heater bottom seams in Naples Island and Belmont Shore waterfront homes",
      "Slab leaks and burst tank water migrating underneath flooring across ground-level condos and duplexes",
      "Salt encrustation freezing emergency shutoff valves, preventing homeowners from stopping the torrent of water",
      "Emergency pump-out and industrial extraction required across beach-adjacent subterranean parking garages"
    ],
    nearbyCities: [
      { name: "Los Angeles", slug: "los-angeles" },
      { name: "Anaheim", slug: "anaheim" },
      { name: "San Diego", slug: "san-diego" }
    ]
  },
  {
    name: "Oakland",
    slug: "oakland",
    county: "Alameda County",
    stateSlug: "california",
    stateAbbr: "CA",
    stateName: "California",
    zipCodes: ["94601", "94602", "94607", "94609", "94611", "94618", "94619"],
    neighborhoods: ["Rockridge", "Grand Lake", "Montclair", "Piedmont Avenue", "Temescal", "Fruitvale", "Oakland Hills", "Adams Point"],
    landmarks: ["Lake Merritt", "Jack London Square", "Oakland Museum of California", "Redwood Regional Park", "Fox Theater"],
    climateNote: "Oakland Hills topography and Hayward fault seismic activity place constant shifting stress on rigid water heater connectors, while Bay humidity fosters rapid mold growth after any leak.",
    commonProblems: [
      "Seismic movement in hillside foundations shearing unbraced water heater supply lines and venting pipes",
      "Attic tank ruptures draining into multiple levels of multi-family residences around Lake Merritt",
      "Aggressive mold colonization on drywall within 24 hours due to persistent East Bay dampness",
      "Heavy sediment accumulation inside aging gas units causing bottom burnouts and structural fires/floods"
    ],
    nearbyCities: [
      { name: "San Francisco", slug: "san-francisco" },
      { name: "San Jose", slug: "san-jose" },
      { name: "Sacramento", slug: "sacramento" }
    ]
  },
  {
    name: "Bakersfield",
    slug: "bakersfield",
    county: "Kern County",
    stateSlug: "california",
    stateAbbr: "CA",
    stateName: "California",
    zipCodes: ["93301", "93306", "93309", "93311", "93312", "93313"],
    neighborhoods: ["Seven Oaks", "Downtown Bakersfield", "Riverlakes", "Stockdale", "Rosedale", "Westchester", "Oildale"],
    landmarks: ["Buck Owens' Crystal Palace", "Kern County Museum", "Fox Theater Bakersfield", "The Park at River Walk"],
    climateNote: "Intense arid heat and high mineral content in Kern River and groundwater sources cause massive sediment encrustation, leading to overheated bottom plates and sudden catastrophic tank tears.",
    commonProblems: [
      "Heavy mineral calcification filling bottom thirds of residential water heaters, burning out elements and bursting tanks",
      "Garage water heater leaks in 105°F summer heat rapidly creating humid microclimates that warp adjacent interior walls",
      "Broken temperature pressure valves flooding unfinished crawlspaces and concrete foundations",
      "Rapid water extraction required to save custom hardwood and tile installations in Seven Oaks estates"
    ],
    nearbyCities: [
      { name: "Fresno", slug: "fresno" },
      { name: "Los Angeles", slug: "los-angeles" },
      { name: "Long Beach", slug: "long-beach" }
    ]
  },
  {
    name: "Anaheim",
    slug: "anaheim",
    county: "Orange County",
    stateSlug: "california",
    stateAbbr: "CA",
    stateName: "California",
    zipCodes: ["92801", "92802", "92804", "92805", "92806", "92807", "92808"],
    neighborhoods: ["Anaheim Hills", "Anaheim Resort", "West Anaheim", "Platinum Triangle", "The Colony", "Southeast Anaheim"],
    landmarks: ["Disneyland Resort", "Angel Stadium", "Honda Center", "Anaheim Convention Center", "Founder's Park"],
    climateNote: "Santa Ana dry winds alternating with seasonal rain cycles, paired with high Orange County municipal water pressure, trigger relief valve failures and ruptured tank seams.",
    commonProblems: [
      "Water pressure surges cracking aging commercial and residential water heater tank linings in Anaheim Resort and Platinum Triangle",
      "Attic-mounted water heater collapses soaking insulation, drywall ceilings, and electrical wiring",
      "Hot water heater tank fractures saturating commercial kitchen and retail carpet spaces",
      "Severe baseboard water damage in Anaheim Hills luxury homes requiring immediate extraction and drying"
    ],
    nearbyCities: [
      { name: "Long Beach", slug: "long-beach" },
      { name: "Los Angeles", slug: "los-angeles" },
      { name: "San Diego", slug: "san-diego" }
    ]
  }
];

export const TRUST_POINTS = [
  {
    icon: "shield-check",
    title: "Licensed & Insured Pros",
    desc: "Fully certified extraction and plumbing technicians"
  },
  {
    icon: "clock-countdown",
    title: "Under 60-Min Response",
    desc: "Immediate emergency dispatch 24/7/365"
  },
  {
    icon: "receipt",
    title: "Direct Insurance Billing",
    desc: "We work directly with all major home insurance carriers"
  },
  {
    icon: "thumbs-up",
    title: "100% Satisfaction Guarantee",
    desc: "Written flat-rate pricing with zero surprise fees"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Immediate 24/7 Dispatch",
    desc: "Call (866) 751-9896. Our live emergency coordination team immediately isolates your leak over the phone and dispatches the nearest certified technician vehicle."
  },
  {
    step: "02",
    title: "Rapid Water Extraction",
    desc: "Technicians arrive in under 60 minutes with truck-mounted vacuum extractors to drain the ruptured water heater tank and suck standing water out of carpets and subfloors."
  },
  {
    step: "03",
    title: "Safe Disconnection & Removal",
    desc: "We safely disconnect the gas or high-voltage electrical lines, cap water supplies, detach venting, and haul away the failed, leaking water heater unit for eco-friendly recycling."
  },
  {
    step: "04",
    title: "Structural Drying & Sanitization",
    desc: "We place industrial LGR dehumidifiers and high-velocity air movers to bring framing to dry standards, apply antimicrobials, and document moisture readings for insurance."
  }
];

export const GENERAL_FAQS = [
  {
    q: "What should I do immediately when my water heater bursts or leaks?",
    a: "Immediately locate the cold water shut-off valve on the pipe entering the top of your water heater and turn it clockwise (or perpendicular for ball valves). Next, turn off the circuit breaker for electric heaters, or rotate the gas control knob to 'OFF' for gas units. Then call Rapid Water Rescue Pros right away at (866) 751-9896 so our emergency extraction crew can be dispatched before water ruins your flooring and drywall."
  },
  {
    q: "How fast can your team arrive to remove the water heater and extract water?",
    a: "Our dispatch teams are stationed regionally and arrive on site in 60 minutes or less, 24 hours a day, 7 days a week, 365 days a year. Because water starts causing irreversible structural damage and mold within 24 to 48 hours, emergency response time is our highest priority."
  },
  {
    q: "Does homeowners insurance cover water heater leaks and water damage extraction?",
    a: "In most cases, yes. Standard homeowners insurance policies typically cover the sudden and accidental water damage caused by a ruptured water heater, including emergency water extraction, structural drying, and drywall or flooring repairs. While insurance usually does not pay for the old water heater tank itself, it covers the resulting thousands of dollars in water mitigation. We document all moisture readings and submit claims directly to your carrier."
  },
  {
    q: "Do you haul away and dispose of the old water heater?",
    a: "Yes. Our team handles complete water heater removal, from disconnecting gas and electrical lines to draining contaminated tank sediment, unbolting seismic strapping, carrying the unit out of your home, and hauling it to a certified appliance recycling facility."
  },
  {
    q: "How do you ensure no hidden moisture is trapped beneath floors or inside walls?",
    a: "We do not guess. Our certified technicians utilize FLIR infrared thermal imaging cameras and non-invasive digital moisture meters to trace every path water traveled. We map the moisture boundary behind baseboards, under hardwood, and beneath tile to guarantee your property reaches certified dry standard."
  },
  {
    q: "What are the early warning signs that a water heater is about to fail or rupture?",
    a: "Warning signs include water pooling around the bottom pan, rust-colored or metallic-smelling hot water, loud popping or rumbling sounds caused by boiling sediment at the bottom of the tank, moisture or corrosion along fittings, and any water heater that is more than 8 to 12 years old."
  }
];
