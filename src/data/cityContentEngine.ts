import { getRegionalProfile } from './regionalClimate';

export interface GeneratedCityContent {
  h1: string;
  title: string;
  metaDesc: string;
  openingText: string;
  environmentalDeepDive: string;
  housingAndSubfloorAnalysis: string;
  technicalDryingProtocol: string;
  insuranceAndComplianceNote: string;
  uniqueFaqs: { q: string; a: string }[];
  failurePills: string[];
  homeownerChecklist: { title: string; desc: string }[];
}

/**
 * Deterministic hash function to produce stable, seed-based variations per city
 */
function hashCity(citySlug: string, stateSlug: string): number {
  const combined = `${citySlug}::${stateSlug}`;
  let hash = 5381;
  for (let i = 0; i < combined.length; i++) {
    hash = ((hash << 5) + hash) + combined.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// -------------------------------------------------------------
// 1. H1 Phrasing (Consistent primary keyword + city)
// -------------------------------------------------------------
const H1_TEMPLATES = [
  (city: string, st: string) => `Emergency Water Extraction in ${city}, ${st}`
];

// -------------------------------------------------------------
// 2. Opening Paragraphs (8 distinct structural styles, 70-95 words)
// -------------------------------------------------------------
const OPENING_TEMPLATES = [
  (city: string, county: string, st: string, zip: string) =>
    `When pressurized water lines burst, a water heater tank ruptures, or flash flood runoff breaches your ${city} property, every passing minute allows moisture to migrate deeper into structural framing and floor assemblies. Rapid Water Rescue Pros deploys mobile extraction units across ${county} and the ${zip} area 24 hours a day. Our technicians arrive with truck-mounted high-lift vacuum pumps and industrial dehumidification equipment to pull standing water from your living spaces, prevent microbial growth, and protect your home's foundation.`,

  (city: string, county: string, st: string, zip: string) =>
    `Standing water inside a ${city} residence creates an immediate structural crisis. Within hours of a failed supply line, ruptured appliance, or storm surge, water wicks into baseboards, saturates subflooring, and softens drywall panels. Our 24/7 emergency dispatch team serves property owners across ${county} with rapid arrival times under 60 minutes. We extract standing pools, remove contaminated water, and initiate calibrated thermal drying to stabilize your structure before secondary mold damage takes hold.`,

  (city: string, county: string, st: string, zip: string) =>
    `A plumbing rupture or basement flooding incident in ${city} requires decisive action before moisture ruins your hardwood floors and foundation joists. Serving homes and commercial properties throughout ${county} and surrounding neighborhoods, Rapid Water Rescue Pros maintains round-the-clock emergency mobilization. Our IICRC-trained technicians arrive equipped with industrial water extractors, thermal imaging cameras, and antimicrobial washdowns to completely clear trapped moisture from your living areas.`,

  (city: string, county: string, st: string, zip: string) =>
    `Uncontrolled water intrusion inside a ${city} structure can cause thousands of dollars in hidden damage if not extracted immediately. Whether you are dealing with a ruptured 75-gallon water heater, an overflowing sewer line, or rainwater inundation, our emergency crews throughout ${county} are ready to dispatch. We bring commercial-grade vacuum units and low-grain refrigerant dehumidifiers directly to your address, extracting standing water and documenting moisture levels from the moment we arrive.`,

  (city: string, county: string, st: string, zip: string) =>
    `Sudden flooding inside a ${city} home leaves property owners facing difficult cleanup decisions under intense pressure. Rapid Water Rescue Pros provides clear, professional emergency water extraction across ${county} to remove standing water swiftly and safely. From isolated crawlspace puddles to multi-room basement floods, our team isolates active water sources, pumps out standing water, and deploys high-velocity air movers to return building materials to dry equilibrium.`,

  (city: string, county: string, st: string, zip: string) =>
    `From aging galvanized supply lines to sudden weather downpours, water emergencies in ${city} strike without warning. Rapid Water Rescue Pros operates mobile response vehicles across ${county} and nearby communities, maintaining 24/7 standby status with arrival times averaging under an hour. We extract standing water from carpets, concrete slabs, and crawlspaces, using precision moisture meters to track every stage of structural drying.`,

  (city: string, county: string, st: string, zip: string) =>
    `Property owners in ${city} know that water damage does not pause for regular business hours. When an 80-gallon water heater tank splits or a drain pipe backs up overnight, our emergency mitigation team responds immediately across ${county}. We pump out standing floodwater, detach ruined materials cleanly, and treat damp surfaces with EPA-registered antimicrobials to ensure your indoor living environment remains clean, safe, and mold-free.`,

  (city: string, county: string, st: string, zip: string) =>
    `Water extraction in ${city} requires specialized equipment capable of lifting moisture out of concrete pores, subfloor wood joints, and wall insulation. Serving residential and commercial clients across ${county}, Rapid Water Rescue Pros coordinates fast emergency pump-outs and full psychrometric drying protocols. Our certified team works directly with your property insurance carrier to document damage and restore safety to your home.`
];

// -------------------------------------------------------------
// 3. Section 1: Local Environmental & Hydrological Profile (~180-220 words)
// -------------------------------------------------------------
const ENVIRONMENTAL_ANGLES = [
  // Angle A: Precipitation, runoff, and soil saturation
  (city: string, county: string, stateName: string, climateTitle: string, climateDesc: string) => `
    <h3>Local Hydrological Pressures & Climate Factors in ${city}</h3>
    <p>Properties in ${city} face specific environmental challenges influenced by regional weather patterns across ${stateName}. ${climateDesc}</p>
    <p>In ${county}, sudden shifts in precipitation and seasonal runoff directly impact residential drainage systems. When regional rainfall or rapid thaw events saturate the surrounding topsoil, groundwater pressure mounts against subterranean foundation walls and perimeter footings. Unchecked hydrostatic force frequently pushes moisture through basement floor cracks, cold joints, and unsealed masonry blocks.</p>
    <p>Additionally, high indoor relative humidity during storm periods slows natural evaporation. If standing water from a burst pipe or appliance rupture is left unmanaged in ${city}, moisture cannot disperse on its own, saturating porous materials like drywall and framing lumber within 24 to 48 hours.</p>
  `,

  // Angle B: Soil composition, drainage beds, and foundation stress
  (city: string, county: string, stateName: string, climateTitle: string, climateDesc: string) => `
    <h3>Environmental Drainage & Ground Moisture Dynamics Around ${city}</h3>
    <p>Managing indoor water emergencies in ${city} requires an understanding of how local geological and seasonal factors interact with residential plumbing. ${climateDesc}</p>
    <p>Throughout ${county}, variations in soil permeability and seasonal moisture cycles affect how properties handle sudden water volume. Clay-heavy or compacted soils common in parts of ${stateName} drain slowly after major downpours, causing runoff to pool along foundation edges and crawlspace perimeters. When an internal plumbing failure occurs simultaneously—such as a split water heater or supply line break—water has nowhere to drain naturally.</p>
    <p>Our extraction crews assess these site-specific conditions upon arrival in ${city}, ensuring exterior moisture sources are identified alongside internal mechanical failures so the structure can be isolated and dried completely.</p>
  `,

  // Angle C: Water supply characteristics, mineral scaling, and pressure spikes
  (city: string, county: string, stateName: string, climateTitle: string, climateDesc: string) => `
    <h3>Regional Climate Stress & Water Infrastructure in ${county}</h3>
    <p>Environmental conditions across ${city} present unique mechanical demands on household plumbing and water heating systems. ${climateDesc}</p>
    <p>Municipal and well water supplies serving ${city} often carry dissolved minerals that contribute to scale accumulation inside water heaters, boilers, and copper transitions. Over years of thermal cycling, mineral sedimentation creates hot spots along tank bottoms, weakening the steel weld until a sudden seam rupture occurs. Compounding this, seasonal municipal pressure adjustments can place unexpected strain on aging pressure-relief valves and flexible supply lines.</p>
    <p>When an unexpected release happens in a ${city} home, our mobile units respond with industrial pump-out gear to capture and remove the volume before it causes structural framing wood rot.</p>
  `,

  // Angle D: Seasonal temperature extremes and freeze-thaw cycles
  (city: string, county: string, stateName: string, climateTitle: string, climateDesc: string) => `
    <h3>Seasonal Weather Fluctuations & Water Vulnerabilities in ${city}</h3>
    <p>The local climate profile of ${city} plays a direct role in how frequently plumbing failures and moisture intrusion events occur. ${climateDesc}</p>
    <p>Seasonal transitions across ${county} bring rapid temperature swings that stress residential plumbing infrastructure. Exterior hose bibbs, unheated crawlspace pipes, and attic water supply lines expand and contract under fluctuating temperatures, creating micro-fractures that eventually burst under continuous municipal pressure. When lines rupture, hundreds of gallons of pressurized water pour into finished spaces within hours.</p>
    <p>Rapid Water Rescue Pros maintains continuous dispatch availability in ${city} so that whenever seasonal weather compromises your property's plumbing, certified technicians arrive quickly to minimize property loss.</p>
  `
];

// -------------------------------------------------------------
// 4. Section 2: Housing Stock, Framing & Subfloor Analysis (~200-240 words)
// -------------------------------------------------------------
const HOUSING_ANGLES = [
  // Type 1: Older homes, tongue-and-groove, lath & plaster
  (city: string, county: string, stateName: string) => `
    <h3>Housing Architecture & Subfloor Vulnerabilities in ${city}</h3>
    <p>The residential landscape of ${city} features a mix of established neighborhoods and newer suburban developments. Many homes built in earlier decades across ${county} feature dimensional lumber framing, tongue-and-groove subflooring, and plaster-over-lath or early gypsum board partitions.</p>
    <p>When clean or gray water spreads across older subfloors in ${city}, dimensional wood planks absorb liquid quickly along their grain lines. Without immediate deep extraction, subfloor boards swell, warp, and cause overlying hardwood or tile to buckle. Plaster partitions also absorb water from floor level through capillary action, wicking moisture up wall cavities where it can remain hidden behind baseboards for weeks.</p>
    <p>Our technicians use digital moisture meters and FLIR thermal cameras to trace moisture paths through older building assemblies in ${city}, ensuring no damp pockets remain concealed beneath flooring or within wall cavities.</p>
  `,

  // Type 2: Concrete slab construction, engineered wood, and tile
  (city: string, county: string, stateName: string) => `
    <h3>Concrete Slab Dynamics & Modern Building Materials in ${city}</h3>
    <p>Modern residential construction throughout ${city} and across ${county} frequently utilizes poured concrete slab-on-grade foundations paired with engineered wood, luxury vinyl plank (LVP), and porcelain tile flooring.</p>
    <p>While concrete slabs do not rot, they are highly porous and act like a sponge when submerged under standing floodwater. Water migrates into the concrete capillaries, creating a moisture reservoir that releases vapor upward for months if not dried with commercial dehumidifiers. Furthermore, floating LVP and laminate floors trap water beneath their impermeable backing, creating an ideal breeding environment for microbial colonies directly over the damp concrete.</p>
    <p>In ${city}, our mitigation teams deploy weighted extraction wands and desiccant drying systems designed specifically to lift trapped water from concrete slabs and floating floor underlayments without unnecessary structural destruction.</p>
  `,

  // Type 3: Daylight basements, split-levels, and finished lower levels
  (city: string, county: string, stateName: string) => `
    <h3>Basement & Foundation Vulnerabilities in ${city} Properties</h3>
    <p>Many homes in ${city} and surrounding ${county} communities include full or partial basements, daylight lower levels, and subterranean utility rooms that house main water heaters, furnaces, and laundry appliances.</p>
    <p>When an 80-gallon water heater fails or a sump pump loses power during heavy rainfall, water naturally collects at the lowest elevation of the home. In finished basements with carpeting and drywall partitions, standing water quickly saturates carpet padding and wicks up wallboard framing. Because subterranean basements have limited natural air circulation, standing moisture cannot evaporate without mechanical assistance.</p>
    <p>Our emergency crews arrive in ${city} with high-capacity submersible trash pumps to clear deep basement flooding quickly, followed by industrial axial air movers to dry wall studs and concrete footings thoroughly.</p>
  `,

  // Type 4: Crawlspace construction, moisture barriers, and joists
  (city: string, county: string, stateName: string) => `
    <h3>Crawlspace Moisture Risks & Structural Framing in ${city}</h3>
    <p>A significant portion of single-family residences in ${city} are built over raised crawlspace foundations. While crawlspaces elevate living spaces above ground level, they present unique risks during internal plumbing leaks.</p>
    <p>When a pipe or appliance leaks on the main floor of a ${city} home, gravity pulls water downward through floor penetrations into the crawlspace below. Water pools on top of soil or vapor barriers, saturating floor joists, rim joists, and fiberglass batt insulation. Damp crawlspace insulation holds water against structural wood indefinitely, leading to wood rot and attracting pests if not removed promptly.</p>
    <p>Rapid Water Rescue Pros dispatches trained technicians in ${city} to inspect, extract, and dry crawlspace cavities, replacing wet insulation and ensuring structural foundation joists are completely restored to dry standards.</p>
  `
];

// -------------------------------------------------------------
// 5. Section 3: Engineered Extraction & Psychrometric Protocol (~220-250 words)
// -------------------------------------------------------------
const TECHNICAL_ANGLES = [
  (city: string, st: string) => `
    <h3>Our 4-Stage Extraction & Psychrometric Drying Protocol in ${city}</h3>
    <p>Effective water extraction requires an engineered, multi-step process to ensure all free-standing and bound moisture is eliminated. When our team arrives at your ${city} property, we execute a standardized restoration workflow:</p>
    <ul style="padding-left:1.25rem;display:flex;flex-direction:column;gap:0.75rem;margin:1rem 0;color:var(--text-body);font-size:0.95rem">
      <li><strong>1. Source Isolation & Safety Inspection:</strong> Technicians immediately locate and confirm the water shut-off, assess electrical hazards in wet areas, and test the safety of structural subflooring before heavy equipment is moved inside.</li>
      <li><strong>2. High-Lift Truck-Mounted Water Extraction:</strong> Using commercial truck-mounted extraction vacuums and weighted subfloor wands, we remove hundreds of gallons of free-standing water from carpets, tiles, and concrete surfaces in minutes.</li>
      <li><strong>3. Infrared Thermal Moisture Mapping:</strong> We scan all adjacent walls, baseboards, and ceilings with FLIR thermal imaging cameras, pinpointing hidden moisture tracks that cannot be seen with the naked eye.</li>
      <li><strong>4. Controlled Dehumidification & Airflow Management:</strong> We position commercial Low Grain Refrigerant (LGR) dehumidifiers and high-velocity axial air movers to create a dry vortex, continuously pulling bound moisture out of structural framing lumber.</li>
      <li><strong>5. Antimicrobial Sanitization:</strong> All affected structural surfaces are treated with EPA-registered, hospital-grade antimicrobial solutions to stop fungal spore germination and eliminate musty odors.</li>
    </ul>
  `,

  (city: string, st: string) => `
    <h3>Scientific Structural Drying & Moisture Removal in ${city}</h3>
    <p>At Rapid Water Rescue Pros, water removal is driven by psychrometric science—the physics of air, temperature, and moisture vapor pressure. Our ${city} technicians do not simply pull visible water from floor surfaces; we manage the indoor drying environment:</p>
    <ul style="padding-left:1.25rem;display:flex;flex-direction:column;gap:0.75rem;margin:1rem 0;color:var(--text-body);font-size:0.95rem">
      <li><strong>High-Capacity Extraction:</strong> Heavy-duty submersible pumps and truck-mounted suction extract standing water at rates up to 1,500 gallons per hour, preventing deep saturation into foundation footings.</li>
      <li><strong>Moisture Boundary Mapping:</strong> Digital pin-probe meters measure moisture content percentages in drywall and wood framing, establishing an objective drying baseline against unaffected materials.</li>
      <li><strong>Airflow & Vapor Pressure Differential:</strong> We deploy industrial air movers angled at 45 degrees along wet baseboards to break boundary air layers, speeding the transition of trapped liquid into evaporable vapor.</li>
      <li><strong>Continuous Moisture Logging:</strong> Our team returns daily to take psychrometric readings (temperature, relative humidity, and grains per pound), adjusting equipment until all building materials reach dry standard certification.</li>
      <li><strong>Complete Sanitization:</strong> EPA-registered botanicals or antimicrobials are applied to protect living spaces from bacterial blooms and microbial volatile organic compounds.</li>
    </ul>
  `
];

// -------------------------------------------------------------
// 6. Section 4: Local Insurance & Damage Mitigation Guidelines (~160-190 words)
// -------------------------------------------------------------
const INSURANCE_ANGLES = [
  (city: string, county: string, stateName: string) => `
    <h3>Navigating Property Insurance Claims in ${city}, ${stateName}</h3>
    <p>Dealing with sudden water damage is stressful, and understanding your insurance coverage should not add to the burden. Most standard homeowners and commercial property policies in ${stateName} cover sudden and accidental water damage resulting from burst pipes, failed water heaters, washing machine hose breaks, and plumbing overflows.</p>
    <p>Our dispatch office works directly with all major insurance underwriters serving ${county}, including State Farm, Allstate, Farmers, USAA, Liberty Mutual, and Travelers. We document every phase of our work with time-stamped digital photographs, FLIR thermal moisture maps, and industry-standard Xactimate pricing line items.</p>
    <p>By compiling detailed moisture logs from day one, we help ensure your adjuster receives clear, objective evidence of the loss, streamlining the approval process and minimizing your out-of-pocket stress.</p>
  `,

  (city: string, county: string, stateName: string) => `
    <h3>Insurance Claim Support & Documentation for ${city} Property Owners</h3>
    <p>A successful water damage insurance claim depends on prompt action and thorough documentation. In ${stateName}, property insurance policies typically require homeowners to take reasonable steps immediately following an incident to mitigate secondary damage and prevent mold colonization.</p>
    <p>Rapid Water Rescue Pros assists ${city} residents by providing immediate mitigation documentation that meets insurance adjuster requirements. We record daily atmospheric readings, moisture content percentages in building assemblies, and precise equipment placement records.</p>
    <p>Our team works collaboratively with your claims adjuster to verify that all necessary extraction, controlled demolition of saturated materials, and antimicrobial treatments are accounted for accurately under standard policy guidelines.</p>
  `
];

// -------------------------------------------------------------
// 7. Unique FAQ Pools (16 distinct questions, deterministic pick of 5)
// -------------------------------------------------------------
interface FaqItem {
  q: (city: string, county: string, st: string) => string;
  a: (city: string, county: string, st: string) => string;
}

const FAQ_POOL: FaqItem[] = [
  {
    q: (city) => `How fast can extraction crews reach my property in ${city}?`,
    a: (city, county) => `Our mobile emergency units are positioned near major transit arteries serving ${county}, allowing our crews to maintain an average on-site arrival time of under 60 minutes for calls in ${city}, 24 hours a day, 365 days a year.`
  },
  {
    q: (city, _, st) => `Does my ${st} homeowners insurance cover emergency water extraction?`,
    a: (city, _, st) => `In most cases, yes. Standard homeowners insurance policies across ${st} cover sudden and accidental water discharges, such as ruptured pipes, split water heaters, or appliance overflows. We document moisture levels with infrared thermal cameras and submit itemized Xactimate bills directly to your carrier.`
  },
  {
    q: (city) => `What immediate steps should I take while waiting for technicians in ${city}?`,
    a: () => `First, shut off your home's main water meter or supply valve immediately. If it is safe and standing water has not reached electrical outlets, switch off breakers to the affected rooms. Avoid walking through deep standing water, and keep pets and family members away from flooded areas until our team arrives.`
  },
  {
    q: (city, county) => `Do you handle commercial properties as well as homes in ${county}?`,
    a: (city, county) => `Yes. We provide complete water extraction and structural drying for single-family residences, multi-unit apartment complexes, commercial retail facilities, medical offices, and warehouses throughout ${city} and across ${county}.`
  },
  {
    q: (city) => `How do you find water hidden behind walls and under floors in ${city}?`,
    a: () => `We utilize non-invasive FLIR infrared thermal imaging cameras alongside calibrated digital pin-probe moisture meters. Thermal imaging detects temperature differentials caused by evaporative cooling, allowing us to map hidden water boundaries behind drywall and under hardwood without unnecessary wall demolition.`
  },
  {
    q: (city) => `How long does the complete structural drying process take in ${city}?`,
    a: (city) => `On average, complete structural drying takes between 3 to 5 days, depending on the volume of water, the density of affected building materials, and ambient indoor humidity. Our team monitors drying progress daily using moisture meters until all structural framing reaches certified dry standards.`
  },
  {
    q: (city) => `Can wet carpets and padding be saved after a water leak in ${city}?`,
    a: () => `If the water is from a clean source (Category 1, like a supply pipe or water heater) and extracted within 24 to 48 hours, carpet can frequently be sanitized and restored. Saturated carpet padding, however, acts like a sponge and is typically replaced to guarantee no mold grows beneath.`
  },
  {
    q: (city, county) => `What causes water heaters to suddenly rupture and flood homes in ${city}?`,
    a: (city, county) => `In ${county}, water heaters typically fail due to internal tank corrosion caused by mineral sediment accumulation, failed sacrificial anode rods, or malfunctioning temperature and pressure (T&P) relief valves. Once the internal glass lining fractures, pressurized water breaches the outer steel shell, releasing 50 to 80 gallons rapidly.`
  },
  {
    q: (city) => `What is the difference between Category 1, 2, and 3 water in ${city}?`,
    a: () => `Category 1 is clean water from supply lines or clean appliance overflows. Category 2 (gray water) contains chemical or biological contaminants, such as dishwasher discharge or washing machine overflows. Category 3 (black water) contains hazardous biological pathogens from sewer lines or storm floodwaters, requiring specialized containment and disposal.`
  },
  {
    q: (city) => `Will there be a musty odor after the water extraction is completed in ${city}?`,
    a: () => `No. Because we thoroughly apply EPA-registered antimicrobial treatments, decontaminate all affected surfaces, and run commercial LGR dehumidifiers to pull moisture below mold-growth thresholds, your indoor space will be clean, dry, and odor-free upon project completion.`
  },
  {
    q: (city) => `Are your extraction technicians in ${city} certified and insured?`,
    a: (city) => `Yes. All Rapid Water Rescue Pros technicians serving ${city} are fully trained according to IICRC S500 water damage restoration standards, and our business maintains comprehensive liability insurance and workers' compensation coverage for your complete peace of mind.`
  },
  {
    q: (city) => `Do I need to leave my ${city} home during the water extraction and drying?`,
    a: () => `In most minor to moderate water extraction situations, homeowners can safely stay in unaffected areas of the residence. If the water involves Category 3 sewage contamination or extensive drying equipment throughout living spaces, our coordinator will discuss temporary relocation options with your insurance adjuster.`
  }
];

// -------------------------------------------------------------
// 8. Dynamic Failure Mechanism Pills & Homeowner Checklists
// -------------------------------------------------------------
const FAILURE_PILL_SETS = [
  [
    "Water heater bottom weld corrosion & sudden seam rupture",
    "Pressurized copper and PEX supply line bursts inside wall cavities",
    "Hydrostatic foundation wall seepage and crawlspace pooling",
    "Sump pump electrical failure during heavy rainfall downpours"
  ],
  [
    "Washing machine pressurized rubber hose ruptures & laundry room flooding",
    "Attic water heater expansion tank split damaging ceiling drywall",
    "Subfloor moisture saturation under hardwood and floating laminate planks",
    "Municipal water main pressure surges splitting supply valve connectors"
  ],
  [
    "Dishwasher supply line leaks saturating kitchen subflooring and cabinets",
    "Frozen exterior hose bibb splits releasing water behind brick veneer",
    "Bathroom supply line bursts flooding multi-story living spaces below",
    "Main sewer line backflow causing contaminated drain backups"
  ]
];

// -------------------------------------------------------------
// Main Generator Function
// -------------------------------------------------------------
export function generateCityContent(
  cityName: string,
  citySlug: string,
  stateName: string,
  stateAbbr: string,
  stateSlug: string,
  county: string,
  zipCode: string
): GeneratedCityContent {
  const seed = hashCity(citySlug, stateSlug);
  const regional = getRegionalProfile(stateSlug);

  // 1. Pick H1
  const h1Fn = H1_TEMPLATES[seed % H1_TEMPLATES.length];
  const h1 = h1Fn(cityName, stateAbbr);

  // 2. Title & Meta
  const title = `${cityName}, ${stateAbbr} Emergency Water Extraction | 24/7 Rapid Response`;
  const metaDesc = `24/7 emergency water extraction, flood water removal & structural drying in ${cityName}, ${stateAbbr} (${county || cityName + ' County'}). Under 60-min arrival. Call (866) 751-9896!`;

  // 3. Opening text
  const openFn = OPENING_TEMPLATES[seed % OPENING_TEMPLATES.length];
  const openingText = openFn(cityName, county || `${cityName} County`, stateAbbr, zipCode);

  // 4. Section 1: Environmental
  const envIndex = (seed >> 2) % ENVIRONMENTAL_ANGLES.length;
  const environmentalDeepDive = ENVIRONMENTAL_ANGLES[envIndex](
    cityName,
    county || `${cityName} County`,
    stateName,
    regional.climateTitle,
    regional.climateDesc
  );

  // 5. Section 2: Housing & Subfloors
  const houseIndex = (seed >> 4) % HOUSING_ANGLES.length;
  const housingAndSubfloorAnalysis = HOUSING_ANGLES[houseIndex](
    cityName,
    county || `${cityName} County`,
    stateName
  );

  // 6. Section 3: Technical Drying Protocol
  const techIndex = (seed >> 6) % TECHNICAL_ANGLES.length;
  const technicalDryingProtocol = TECHNICAL_ANGLES[techIndex](cityName, stateAbbr);

  // 7. Section 4: Insurance
  const insIndex = (seed >> 8) % INSURANCE_ANGLES.length;
  const insuranceAndComplianceNote = INSURANCE_ANGLES[insIndex](
    cityName,
    county || `${cityName} County`,
    stateName
  );

  // 8. Section 5: Unique FAQs (Select 5 unique FAQs using coprime stepping)
  const step = (seed % 5) * 2 + 1; // 1, 3, 5, 7, 9
  const startIndex = seed % FAQ_POOL.length;
  const selectedFaqs: { q: string; a: string }[] = [];
  const chosenIndices = new Set<number>();

  for (let i = 0; i < FAQ_POOL.length && selectedFaqs.length < 5; i++) {
    const idx = (startIndex + i * step) % FAQ_POOL.length;
    if (!chosenIndices.has(idx)) {
      chosenIndices.add(idx);
      const item = FAQ_POOL[idx];
      selectedFaqs.push({
        q: item.q(cityName, county || `${cityName} County`, stateAbbr),
        a: item.a(cityName, county || `${cityName} County`, stateAbbr)
      });
    }
  }

  // 9. Failure Pills
  const pillSet = FAILURE_PILL_SETS[(seed >> 3) % FAILURE_PILL_SETS.length];

  // 10. Homeowner Checklist
  const homeownerChecklist = [
    {
      title: "Shut Off Main Water Supply:",
      desc: `Immediately locate and close the main water meter or supply shut-off valve to prevent continuous inundation and secondary framing saturation across your ${cityName} property.`
    },
    {
      title: "Isolate Electrical Circuits:",
      desc: "Switch off circuit breakers to flooded rooms at your main electrical service panel to eliminate electrocution hazards before approaching standing water."
    },
    {
      title: "Document Damage for Insurance:",
      desc: "Capture clear, time-stamped photographs and video footage of water height, damaged baseboards, and soaked personal property for your insurance adjuster."
    }
  ];

  return {
    h1,
    title,
    metaDesc,
    openingText,
    environmentalDeepDive,
    housingAndSubfloorAnalysis,
    technicalDryingProtocol,
    insuranceAndComplianceNote,
    uniqueFaqs: selectedFaqs,
    failurePills: pillSet,
    homeownerChecklist
  };
}
