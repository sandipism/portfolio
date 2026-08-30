export const skillGroups = [
  {
    title: "Geospatial / GIS",
    skills: ["QGIS", "ArcGIS", "SNAP (SAR processing)", "Google Earth Engine"],
  },
  {
    title: "Engineering Software",
    skills: ["HEC-RAS", "HEC-HMS", "ETABS", "SAP2000", "SAFE"],
  },
  {
    title: "Design & Drafting",
    skills: ["AutoCAD", "SketchUp"],
  },
  {
    title: "Data & Programming",
    skills: ["Python", "MS Office", "Google Workspace"],
    nested: [
      { parent: "MS Office", skills: ["Word", "Excel", "PowerPoint"] },
    ],
  },
];

export const languages = [
  { language: "Nepali", level: "Native" },
  { language: "English", level: "Fluent" },
  { language: "Hindi", level: "Fluent" },
];

export const blogCategories = [
  "Disaster Risk Reduction",
  "Flood Risk",
  "Resilient Infrastructure",
  "GIS & Remote Sensing",
  "Civil Engineering",
  "Post-Disaster Recovery",
  "Research",
  "Field Notes",
  "Data & Analysis",
];
