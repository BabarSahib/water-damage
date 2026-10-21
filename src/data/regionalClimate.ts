export interface RegionProfile {
  climateTitle: string;
  climateDesc: string;
  primaryRisk: string;
  commonProblems: string[];
  housingType: string;
  seasonalNotes: string;
  localFaqAnswer: string;
}

const REGION_MAP: Record<string, RegionProfile> = {
  // Pacific Northwest / Coastal Damp
  pacific_nw: {
    climateTitle: "Heavy Coastal Rainfall & Crawlspace Moisture Accumulation",
    climateDesc: "Persistent coastal rain systems, low evaporation rates, and sustained high ambient humidity cause water from plumbing leaks or foundation seepage to linger inside crawlspaces and subfloors, accelerating fungal blooms.",
    primaryRisk: "Crawlspace pooling, subterranean garage seepage, and accelerated wood rot",
    commonProblems: [
      "Perpetual crawlspace pooling under damp rainy conditions compromising structural beams",
      "Hidden pipe leaks within damp wall cavities remaining undetected until black mold appears",
      "Sump pump failures during extended atmospheric river rainfall saturating basements",
      "Corroded water heater base seams failing prematurely in high-humidity utility sheds"
    ],
    housingType: "Craftsman bungalows, daylight basements, and post-and-beam construction with unvented crawlspaces",
    seasonalNotes: "October through April brings continuous rainfall and rising soil saturation levels.",
    localFaqAnswer: "Due to high ambient relative humidity, industrial LGR dehumidifiers and heated drying mats are deployed to bring structural framing below 15% moisture content."
  },

  // Mountain & Cold Midwest / Northeast (Freeze & Burst Pipes)
  cold_winter: {
    climateTitle: "Sub-Zero Freeze Cycles, Ice Dams & Rapid Pipe Ruptures",
    climateDesc: "Sustained sub-freezing temperatures, blizzard wind chills, and heavy snow accumulation trigger frozen water supply lines, ice dam roof melt into attic insulation, and severe thermal shock on water heaters.",
    primaryRisk: "Frozen pipe bursts, basement sump overflows during spring snowmelt, and water heater bottom fractures",
    commonProblems: [
      "Sudden burst copper and PEX supply lines in exterior walls and unheated crawlspaces during cold snaps",
      "Basement foundation seepage and failed sump pumps during rapid spring snow thaw",
      "Massive thermal shock on water heater tanks as sub-freezing municipal water enters boiling chambers",
      "Attic ice dams forcing melting snow under roof shingles, soaking ceiling drywall and insulation"
    ],
    housingType: "Full finished basements, split-levels, historic colonials, and masonry brick foundations",
    seasonalNotes: "November through April brings freezing temperatures, polar vortexes, and heavy thaw cycles.",
    localFaqAnswer: "Our teams deploy high-capacity submersible trash pumps and industrial thermal drying equipment to thaw and extract water before structural wood expands and cracks."
  },

  // Gulf Coast, Florida & Southeast (Hurricanes, Storm Surges, High Humidity)
  gulf_southeast: {
    climateTitle: "Tropical Storm Inundation, Flash Flooding & High Water Tables",
    climateDesc: "Severe subtropical thunderstorms, Atlantic and Gulf tropical depressions, and near-surface groundwater tables prevent water from draining naturally, leading to rapid residential slab flooding.",
    primaryRisk: "Category 2 and 3 contaminated floodwater ingress, slab leaks, and rapid mold growth within 24 hours",
    commonProblems: [
      "Severe street runoff and storm surges breaching front entryways and patio sliders",
      "High groundwater tables causing reverse pressure and slab foundation seepage",
      "Extreme heat and humidity causing toxic mold colonization within 24 to 36 hours of water contact",
      "Air conditioning condensate drain pan overflows collapsing second-story ceiling drywall"
    ],
    housingType: "Monolithic concrete slab foundations, stucco exteriors, and single-story ranch homes",
    seasonalNotes: "June through November hurricane and tropical storm season presents constant flood threats.",
    localFaqAnswer: "Because Category 3 floodwaters carry biological contaminants, our protocol includes hospital-grade antimicrobial washdowns and EPA-registered disinfectants alongside high-lift extraction."
  },

  // Arid Southwest & California (Hard Water, Seismic Strain & Flash Floods)
  southwest_arid: {
    climateTitle: "High Mineral Hardness, Thermal Expansion & Seismic Shear Strain",
    climateDesc: "Extremely hard municipal water saturated with calcium and magnesium minerals causes heavy sediment accumulation in water heaters. Ambient summer heat and minor seismic vibrations place severe physical stress on supply lines and tank seams.",
    primaryRisk: "Catastrophic water heater ruptures, burst pressure relief valves, and sudden slab leaks",
    commonProblems: [
      "Dense mineral sediment blanket overheating tank bottoms until welded seams burst open",
      "Minor seismic tremors snapping brittle copper transitions or unbraced water heater supply lines",
      "Unregulated municipal water pressure spikes blowing out thermal expansion tanks and supply connectors",
      "Flash flood runoff pouring through patio transitions and finished daylight basements"
    ],
    housingType: "Spanish revival, stucco mid-century, modern condominiums, and concrete slab foundations",
    seasonalNotes: "Intense summer heat waves push ambient closet temperatures over 110°F, while winter atmospheric rivers trigger flash flooding.",
    localFaqAnswer: "We isolate gas and high-voltage electrical lines, pump sediment-heavy tank water directly to sanitary sewer mains, and extract water from subfloors using weighted wands."
  },

  // Default / Transitional Plains & Central
  central_plains: {
    climateTitle: "Severe Thunderstorm Downpours, Tornado Runoff & Variable Winters",
    climateDesc: "Dramatic seasonal weather swings bring spring flash floods and severe downpours alternating with hard winter freezes, creating alternating risks of pipe bursts and basement water inundation.",
    primaryRisk: "Flooded basements, backed-up storm sewers, and ruptured plumbing lines",
    commonProblems: [
      "Severe rainfall overwhelming municipal storm lines and backing sewage through basement floor drains",
      "Winter freeze-thaw cycles cracking outdoor sillcocks and foundation walls",
      "Aging residential water heaters bursting in basement utility corners",
      "Standing water under floating laminate and hardwood floors causing cupping and warping"
    ],
    housingType: "Split-level homes, full basements, wood-framed construction, and brick veneers",
    seasonalNotes: "Spring storms bring heavy flash flood runoff, followed by winter cold snaps.",
    localFaqAnswer: "We arrive within 60 minutes with truck-mounted vacuum units to eliminate standing floodwater, followed by LGR dehumidifiers to prevent structural dry rot."
  }
};

const STATE_TO_REGION: Record<string, string> = {
  // Pacific Northwest
  washington: 'pacific_nw',
  oregon: 'pacific_nw',
  idaho: 'pacific_nw',
  alaska: 'pacific_nw',

  // Cold Winter (Midwest & Northeast)
  illinois: 'cold_winter',
  indiana: 'cold_winter',
  iowa: 'cold_winter',
  michigan: 'cold_winter',
  minnesota: 'cold_winter',
  wisconsin: 'cold_winter',
  ohio: 'cold_winter',
  pennsylvania: 'cold_winter',
  'new-york': 'cold_winter',
  massachusetts: 'cold_winter',
  connecticut: 'cold_winter',
  maine: 'cold_winter',
  'new-hampshire': 'cold_winter',
  vermont: 'cold_winter',
  'rhode-island': 'cold_winter',
  'north-dakota': 'cold_winter',
  'south-dakota': 'cold_winter',
  montana: 'cold_winter',
  wyoming: 'cold_winter',
  colorado: 'cold_winter',

  // Gulf Coast & Southeast
  florida: 'gulf_southeast',
  louisiana: 'gulf_southeast',
  mississippi: 'gulf_southeast',
  alabama: 'gulf_southeast',
  georgia: 'gulf_southeast',
  'south-carolina': 'gulf_southeast',
  'north-carolina': 'gulf_southeast',
  texas: 'gulf_southeast',
  hawaii: 'gulf_southeast',

  // Southwest & California
  california: 'southwest_arid',
  arizona: 'southwest_arid',
  nevada: 'southwest_arid',
  utah: 'southwest_arid',
  'new-mexico': 'southwest_arid'
};

export function getRegionalProfile(stateSlug: string): RegionProfile {
  const regionKey = STATE_TO_REGION[stateSlug] || 'central_plains';
  return REGION_MAP[regionKey] || REGION_MAP.central_plains;
}
