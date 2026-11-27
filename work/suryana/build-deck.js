// Suryana Renewables — FY2026 investor deck (fictional company, figures from the brief's data sheet)
const pptxgen = require("pptxgenjs");
const sharp = require("sharp");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const md = require("react-icons/md");
const { applyTheme } = require(process.env.SKILL + "/scripts/apply_theme.js");

const OUT = process.argv[2];
const PHOTO = process.argv[3]; // solar park photo (ChatGPT image owned by the portfolio owner)

const HEX = { night: "0F1B2D", paper: "F7F5F0", sun: "FF8A1F", sky: "2F6FED", leaf: "2BB673", haze: "A9B4C2", clay: "D64545", ink2: "5B6675", white: "FFFFFF", card: "FFFFFF", line: "DAD6CC" };
const THEME = {
  name: "Suryana",
  headFontFace: "Arial",
  bodyFontFace: "Arial",
  colors: { dk1: HEX.night, lt1: HEX.white, dk2: HEX.ink2, lt2: HEX.paper, accent1: HEX.sun, accent2: HEX.sky, accent3: HEX.leaf, accent4: HEX.haze, accent5: HEX.clay, accent6: "8A94A6", hlink: HEX.sky, folHlink: HEX.ink2 },
};

const png = async (svg, w) => "image/png;base64," + (await sharp(Buffer.from(svg)).resize({ width: w }).png().toBuffer()).toString("base64");
const logoSvg = (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 122"><defs><clipPath id="c"><circle cx="120" cy="100" r="100"/></clipPath></defs>
  <g clip-path="url(#c)" fill="#${c}">${[0, 1, 2, 3].map((i) => `<rect x="0" y="${i * 27}" width="240" height="19"/>`).join("")}</g>
  <rect x="0" y="108" width="240" height="10" fill="#${c}"/></svg>`;
const icon = async (name, c, w = 256) => png(renderToStaticMarkup(React.createElement(md[name], { color: "#" + c, size: 256 })), w);

(async () => {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
  pres.title = "Suryana Renewables — FY2026 Results";
  pres.author = "Concept project";
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  const C = pres.SchemeColor;
  const W = 13.333, M = 0.7;

  const LOGO_SUN = await png(logoSvg(HEX.sun), 480);
  const LOGO_WHITE = await png(logoSvg(HEX.white), 480);

  const logo = (dark) => [
    { image: { x: M, y: 0.5, w: 0.62, h: 0.315, data: dark ? LOGO_WHITE : LOGO_SUN } },
    { text: { text: "suryana", options: { x: M + 0.72, y: 0.43, w: 2, h: 0.45, fontSize: 20, bold: true, color: dark ? C.background1 : C.text1, margin: 0, valign: "middle" } } },
  ];
  const num = (dark) => ({ slideNumber: { x: W - M - 0.6, y: 6.85, w: 0.6, h: 0.3, fontSize: 10, color: dark ? C.accent4 : C.text2, align: "right" } });

  pres.defineSlideMaster({
    title: "Content", background: { color: C.background2 },
    objects: [...logo(false),
      { placeholder: { options: { name: "title", type: "title", x: M, y: 1.15, w: W - 2 * M, h: 1.0, fontSize: 32, bold: true, color: C.text1, valign: "top", align: "left", margin: 0 }, text: "" } },
    ],
    ...num(false),
  });
  pres.defineSlideMaster({
    title: "Dark", background: { color: C.text1 },
    objects: [...logo(true),
      { placeholder: { options: { name: "title", type: "title", x: M, y: 1.15, w: W - 2 * M, h: 1.0, fontSize: 32, bold: true, color: C.background1, valign: "top", align: "left", margin: 0 }, text: "" } },
    ],
    ...num(true),
  });
  pres.defineSlideMaster({ title: "Cover", background: { color: C.text1 }, objects: [] });

  const source = (s, dark) => s.addText("Source: Suryana FY2026 annual results. Fictional company and data.", { x: M, y: 6.85, w: 8, h: 0.3, fontSize: 10, color: dark ? C.accent4 : C.text2, margin: 0, isTextBox: true });
  const chartBase = (o) => Object.assign({
    catAxisLabelColor: HEX.ink2, valAxisLabelColor: HEX.ink2, catAxisLabelFontSize: 12, valAxisLabelFontSize: 11,
    catAxisLabelFontFace: "+mn-lt", valAxisLabelFontFace: "+mn-lt", dataLabelFontFace: "+mn-lt",
    catAxisLineShow: true, catAxisLineColor: HEX.haze, valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
    showValue: true, dataLabelColor: HEX.night, dataLabelFontSize: 13, dataLabelFontBold: true, showLegend: false,
  }, o);
  const slide = (master, section) => pres.addSlide({ masterName: master, sectionTitle: section });
  const takeaways = (s, x, y, w, items) => items.forEach((t, i) => {
    s.addShape(pres.shapes.OVAL, { x, y: y + i * 1.15 + 0.08, w: 0.16, h: 0.16, fill: { color: i === 0 ? C.accent1 : C.accent4 }, line: { type: "none" }, objectName: "Takeaway dot " + (i + 1) });
    s.addText([{ text: t[0], options: { bold: true, fontSize: 16, color: C.text1, breakLine: true } }, { text: t[1], options: { fontSize: 14, color: C.text2 } }],
      { x: x + 0.35, y: y + i * 1.15, w: w - 0.35, h: 0.95, valign: "top", margin: 0, isTextBox: true, objectName: "Takeaway " + (i + 1) });
  });

  // 1 — Cover
  pres.addSection({ title: "Opening" });
  let s = slide("Cover", "Opening");
  s.background = { color: C.text1 };
  const photo = await sharp(PHOTO).resize(1920, 1080, { fit: "cover" }).jpeg({ quality: 86 }).toBuffer();
  s.addImage({ data: "image/jpeg;base64," + photo.toString("base64"), x: 0, y: 0, w: W, h: 7.5, objectName: "Cover photo: solar park at sunrise", altText: "Aerial view of a solar park at sunrise" });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: W, h: 7.5, fill: { color: C.text1, transparency: 22 }, line: { type: "none" }, objectName: "Photo overlay" });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 3.3, w: 8.6, h: 4.2, fill: { color: C.text1, transparency: 25 }, line: { type: "none" }, objectName: "Title backing" });
  s.addImage({ data: LOGO_WHITE, x: M, y: 0.6, w: 0.9, h: 0.46, objectName: "Logo mark" });
  s.addText("suryana", { x: M + 1.05, y: 0.52, w: 3, h: 0.6, fontSize: 28, bold: true, color: C.background1, margin: 0, valign: "middle", isTextBox: true });
  s.addText("FY2026 RESULTS", { x: M, y: 3.85, w: 7, h: 0.4, fontSize: 14, bold: true, color: C.accent1, charSpacing: 4, margin: 0, isTextBox: true });
  s.addText("Our strongest year yet", { x: M, y: 4.3, w: 7.6, h: 1.5, fontSize: 48, bold: true, color: C.background1, margin: 0, valign: "top", isTextBox: true });
  s.addText("Investor presentation  ·  May 2026", { x: M, y: 6.25, w: 7, h: 0.4, fontSize: 16, color: C.accent4, margin: 0, isTextBox: true });
  s.addNotes("Suryana Renewables FY2026 results. Fictional company created for a portfolio concept project.");

  // 2 — At a glance (KPI row)
  pres.addSection({ title: "Performance" });
  s = slide("Content", "Performance");
  s.addText("FY2026 at a glance: our strongest year yet", { placeholder: "title" });
  const kpis = [["₹1,240 Cr", "Revenue", "+38% vs FY25", true], ["1,640 MW", "Installed capacity", "+28% vs FY25"], ["27%", "EBITDA margin", "up from 25%"], ["1,150", "Business customers", "+32% vs FY25"]];
  const kw = (W - 2 * M - 3 * 0.3) / 4;
  kpis.forEach(([v, l, d, hi], i) => {
    const x = M + i * (kw + 0.3);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 2.65, w: kw, h: 3.0, rectRadius: 0.12, fill: { color: hi ? C.text1 : C.background1 }, line: { type: "none" }, shadow: { type: "outer", color: "0F1B2D", opacity: 0.08, blur: 12, offset: 3, angle: 90 }, objectName: "KPI card " + (i + 1) });
    s.addText(v, { x: x + 0.3, y: 3.05, w: kw - 0.5, h: 1.0, fontSize: 32, bold: true, color: hi ? C.accent1 : C.text1, margin: 0, valign: "bottom", isTextBox: true, fit: "shrink" });
    s.addText(l, { x: x + 0.3, y: 4.25, w: kw - 0.5, h: 0.45, fontSize: 16, bold: true, color: hi ? C.background1 : C.text1, margin: 0, isTextBox: true });
    s.addText(d, { x: x + 0.3, y: 5.2, w: kw - 0.5, h: 0.4, fontSize: 14, color: hi ? C.accent4 : C.accent3, bold: true, margin: 0, isTextBox: true });
  });
  source(s);

  // 3 — Revenue 5 years
  s = slide("Content", "Performance");
  s.addText([{ text: "Revenue grew 38% to " }, { text: "₹1,240 Cr", options: { color: C.accent1 } }], { placeholder: "title" });
  s.addChart(pres.charts.BAR, [{ name: "Revenue (₹ Cr)", labels: ["FY22", "FY23", "FY24", "FY25", "FY26"], values: [520, 680, 830, 900, 1240] }],
    chartBase({ x: M, y: 2.2, w: 8.2, h: 4.4, barDir: "col", barGapWidthPct: 55, chartColors: [HEX.haze, HEX.haze, HEX.haze, HEX.haze, HEX.sun], valAxisMinVal: 0, dataLabelPosition: "outEnd", dataLabelFormatCode: "#,##0", objectName: "Revenue chart" }));
  takeaways(s, 9.4, 2.6, 3.25, [["Five years of growth", "Revenue up 2.4x since FY22"], ["FY26 jump: +₹340 Cr", "The biggest year-on-year gain yet"], ["All figures in ₹ crore", "Rounded to the nearest crore"]]);
  source(s);

  // 4 — Rooftop drove growth
  s = slide("Content", "Performance");
  s.addText("Rooftop solar drove the growth, up 75%", { placeholder: "title" });
  s.addChart(pres.charts.BAR, [
    { name: "FY25", labels: ["Utility-scale", "Rooftop", "Storage"], values: [590, 290, 20] },
    { name: "FY26", labels: ["Utility-scale", "Rooftop", "Storage"], values: [645, 508, 87] },
  ], chartBase({ x: M, y: 2.2, w: 8.2, h: 4.4, barDir: "col", barGapWidthPct: 70, barOverlapPct: -8, chartColors: [HEX.haze, HEX.night], valAxisMinVal: 0, dataLabelPosition: "outEnd", showLegend: true, legendPos: "t", legendFontSize: 12, legendColor: HEX.ink2, legendFontFace: "+mn-lt", objectName: "Revenue by business line chart" }));
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 9.3, y: 2.35, w: 3.33, h: 4.1, rectRadius: 0.12, fill: { color: C.background1 }, line: { type: "none" }, objectName: "Rooftop callout" });
  s.addText("ROOFTOP", { x: 9.6, y: 2.65, w: 2.8, h: 0.35, fontSize: 12, bold: true, color: C.text2, charSpacing: 3, margin: 0, isTextBox: true });
  s.addText("+75%", { x: 9.6, y: 3.0, w: 2.8, h: 1.0, fontSize: 54, bold: true, color: C.accent1, margin: 0, isTextBox: true });
  s.addText("₹290 Cr → ₹508 Cr", { x: 9.6, y: 4.05, w: 2.8, h: 0.4, fontSize: 16, bold: true, color: C.text1, margin: 0, isTextBox: true });
  s.addText("Now 41% of revenue, as factories switch to their own rooftop power.", { x: 9.6, y: 4.6, w: 2.8, h: 1.4, fontSize: 14, color: C.text2, margin: 0, valign: "top", isTextBox: true });
  source(s);

  // 5 — Margins
  s = slide("Content", "Performance");
  s.addText("Margins improved for the fifth year in a row", { placeholder: "title" });
  s.addChart(pres.charts.LINE, [{ name: "EBITDA margin (%)", labels: ["FY22", "FY23", "FY24", "FY25", "FY26"], values: [21, 23, 24, 25, 27] }],
    chartBase({ x: M, y: 2.3, w: 8.2, h: 4.2, chartColors: [HEX.sun], lineSize: 4, lineDataSymbol: "circle", lineDataSymbolSize: 11, valAxisMinVal: 15, valAxisMaxVal: 30, dataLabelPosition: "t", dataLabelFormatCode: '0"%"', objectName: "EBITDA margin chart" }));
  takeaways(s, 9.4, 2.6, 3.25, [["21% → 27%", "Six points of margin gained in five years"], ["Scale pays off", "Fixed costs spread over more megawatts"], ["Rooftop mix helps", "Higher-margin projects grew fastest"]]);
  source(s);

  // 6 — Capacity
  s = slide("Content", "Performance");
  s.addText([{ text: "Capacity crossed " }, { text: "1,600 MW", options: { color: C.accent1 } }], { placeholder: "title" });
  s.addChart(pres.charts.BAR, [{ name: "Installed capacity (MW)", labels: ["FY22", "FY23", "FY24", "FY25", "FY26"], values: [610, 820, 1050, 1280, 1640] }],
    chartBase({ x: M, y: 2.2, w: W - 2 * M, h: 4.4, barDir: "col", barGapWidthPct: 90, chartColors: [HEX.haze, HEX.haze, HEX.haze, HEX.haze, HEX.sun], valAxisMinVal: 0, dataLabelPosition: "outEnd", dataLabelFormatCode: '#,##0" MW"', objectName: "Capacity chart" }));
  source(s);

  // 7 — States
  pres.addSection({ title: "Footprint & customers" });
  s = slide("Content", "Footprint & customers");
  s.addText("Rajasthan and Telangana make up half our capacity", { placeholder: "title" });
  const states = [["Rajasthan", 420], ["Telangana", 380], ["Karnataka", 260], ["Maharashtra", 210], ["Gujarat", 150], ["Tamil Nadu", 120], ["Andhra Pradesh", 50], ["Madhya Pradesh", 30], ["Uttar Pradesh", 20]];
  s.addChart(pres.charts.BAR, [{ name: "Capacity by state (MW)", labels: states.map((x) => x[0]).reverse(), values: states.map((x) => x[1]).reverse() }],
    chartBase({ x: M, y: 2.1, w: 8.0, h: 4.6, barDir: "bar", barGapWidthPct: 45, chartColors: [HEX.haze, HEX.haze, HEX.haze, HEX.haze, HEX.haze, HEX.haze, HEX.haze, HEX.sun, HEX.sun], valAxisMinVal: 0, dataLabelPosition: "outEnd", catAxisLineShow: false, objectName: "Capacity by state chart" }));
  s.addText([{ text: "9", options: { fontSize: 72, bold: true, color: C.text1, breakLine: true } }, { text: "states, from one Hyderabad HQ and offices in Pune, Jaipur and Chennai", options: { fontSize: 16, color: C.text2 } }],
    { x: 9.4, y: 2.5, w: 3.25, h: 3.2, valign: "top", margin: 0, isTextBox: true, objectName: "States callout" });
  source(s);

  // 8 — Customers
  s = slide("Content", "Footprint & customers");
  s.addText("1,150 businesses now run on Suryana power", { placeholder: "title" });
  s.addChart(pres.charts.BAR, [{ name: "Customers", labels: ["FY22", "FY23", "FY24", "FY25", "FY26"], values: [410, 560, 720, 870, 1150] }],
    chartBase({ x: M, y: 2.2, w: 6.4, h: 4.4, barDir: "col", barGapWidthPct: 60, chartColors: [HEX.haze, HEX.haze, HEX.haze, HEX.haze, HEX.sun], valAxisMinVal: 0, dataLabelPosition: "outEnd", dataLabelFormatCode: "#,##0", objectName: "Customer growth chart" }));
  const types = [["MdFactory", "Factories", "Textiles, food, auto parts"], ["MdSchool", "Campuses", "Universities, IT parks, hospitals"], ["MdWarehouse", "Warehouses", "Logistics and cold storage"]];
  for (let i = 0; i < types.length; i++) {
    const y = 2.35 + i * 1.45;
    s.addShape(pres.shapes.OVAL, { x: 7.75, y, w: 0.95, h: 0.95, fill: { color: C.background1 }, line: { type: "none" }, objectName: types[i][1] + " icon circle" });
    s.addImage({ data: await icon(types[i][0], HEX.sky), x: 7.97, y: y + 0.22, w: 0.51, h: 0.51, objectName: types[i][1] + " icon", altText: types[i][1] });
    s.addText([{ text: types[i][1], options: { bold: true, fontSize: 18, color: C.text1, breakLine: true } }, { text: types[i][2], options: { fontSize: 14, color: C.text2 } }],
      { x: 8.95, y: y + 0.02, w: 3.7, h: 0.95, margin: 0, valign: "middle", isTextBox: true });
  }
  source(s);

  // 9 — CO2 (dark big number)
  pres.addSection({ title: "Impact & growth" });
  s = slide("Dark", "Impact & growth");
  s.addText("Our plants avoided 1.74 million tonnes of CO₂", { placeholder: "title" });
  s.addText("1.74", { x: M, y: 2.5, w: 6.2, h: 2.6, fontSize: 160, bold: true, color: C.accent3, margin: 0, valign: "bottom", isTextBox: true });
  s.addText("million tonnes of CO₂ avoided in FY26", { x: M, y: 5.2, w: 6.2, h: 0.5, fontSize: 20, color: C.background1, margin: 0, isTextBox: true });
  const eq = [["MdHome", "~2 million", "homes powered for a year"], ["MdBolt", "2,450 GWh", "clean energy generated"], ["MdWbSunny", "0.71 t", "CO₂ avoided per MWh"]];
  for (let i = 0; i < eq.length; i++) {
    const y = 2.55 + i * 1.3;
    s.addImage({ data: await icon(eq[i][0], HEX.leaf), x: 7.7, y: y + 0.12, w: 0.6, h: 0.6, objectName: eq[i][2] + " icon", altText: eq[i][2] });
    s.addText([{ text: eq[i][1], options: { bold: true, fontSize: 24, color: C.background1, breakLine: true } }, { text: eq[i][2], options: { fontSize: 14, color: C.accent4 } }],
      { x: 8.55, y, w: 4.1, h: 0.95, margin: 0, valign: "middle", isTextBox: true });
  }
  source(s, true);

  // 10 — Storage
  s = slide("Content", "Impact & growth");
  s.addText("Battery storage is our next growth engine", { placeholder: "title" });
  [["FY25", "₹20 Cr", C.accent4, C.text2], ["FY26", "₹87 Cr", C.accent1, C.text1]].forEach(([y, v, c, t], i) => {
    const x = M + i * 3.1;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 2.4, w: 2.8, h: 2.6, rectRadius: 0.12, fill: { color: C.background1 }, line: { type: "none" }, objectName: "Storage " + y });
    s.addText(y + " storage revenue", { x: x + 0.3, y: 2.7, w: 2.3, h: 0.4, fontSize: 14, color: C.text2, margin: 0, isTextBox: true });
    s.addText(v, { x: x + 0.3, y: 3.2, w: 2.3, h: 1.0, fontSize: 44, bold: true, color: c, margin: 0, isTextBox: true });
  });
  s.addText("4.4x in one year", { x: M, y: 5.3, w: 5.9, h: 0.5, fontSize: 20, bold: true, color: C.text1, margin: 0, isTextBox: true });
  s.addText("Target: storage at 15% of revenue in FY27", { x: M, y: 5.8, w: 5.9, h: 0.4, fontSize: 14, color: C.text2, margin: 0, isTextBox: true });
  takeaways(s, 7.4, 2.5, 5.25, [["Power after sunset", "Batteries let factories use solar into the evening"], ["Higher value per project", "Solar plus storage sells as one bundle"], ["Grid support", "Storage earns from balancing the grid"]]);
  source(s);

  // 11 — Process
  s = slide("Content", "Impact & growth");
  s.addText("A rooftop project goes live in 90 days", { placeholder: "title" });
  const steps = [["Day 0", "Survey", "MdSearch"], ["Day 10", "Design", "MdArchitecture"], ["Day 30", "Finance", "MdAccountBalance"], ["Day 60", "Build", "MdConstruction"], ["Day 90", "Monitor", "MdInsights"]];
  const sw = (W - 2 * M) / 5;
  s.addShape(pres.shapes.LINE, { x: M + sw / 2, y: 3.45, w: sw * 4, h: 0, line: { color: C.accent4, width: 2 }, objectName: "Timeline line" });
  for (let i = 0; i < steps.length; i++) {
    const cx = M + i * sw + sw / 2, last = i === steps.length - 1;
    s.addShape(pres.shapes.OVAL, { x: cx - 0.55, y: 2.9, w: 1.1, h: 1.1, fill: { color: last ? C.accent1 : C.background1 }, line: { color: last ? C.accent1 : C.accent4, width: 1.5 }, objectName: steps[i][1] + " step" });
    s.addImage({ data: await icon(steps[i][2], last ? HEX.white : HEX.night), x: cx - 0.28, y: 3.17, w: 0.56, h: 0.56, objectName: steps[i][1] + " icon", altText: steps[i][1] });
    s.addText(steps[i][0], { x: cx - sw / 2, y: 4.3, w: sw, h: 0.4, fontSize: 14, bold: true, color: last ? C.accent1 : C.text2, align: "center", margin: 0, isTextBox: true });
    s.addText(steps[i][1], { x: cx - sw / 2, y: 4.7, w: sw, h: 0.5, fontSize: 22, bold: true, color: C.text1, align: "center", margin: 0, isTextBox: true });
  }
  s.addText("Average go-live time for commercial rooftop projects in FY26", { x: M, y: 5.8, w: W - 2 * M, h: 0.4, fontSize: 14, color: C.text2, align: "center", margin: 0, isTextBox: true });
  source(s);

  // 12 — Quote (dark)
  s = slide("Dark", "Impact & growth");
  s.addText("Customers see the savings in year one", { placeholder: "title" });
  s.addText("“", { x: M - 0.05, y: 2.0, w: 1.2, h: 1.4, fontSize: 120, bold: true, color: C.accent1, margin: 0, isTextBox: true });
  s.addText("Our power bill fell 32% in the first year.", { x: M, y: 3.2, w: 9.5, h: 1.6, fontSize: 44, bold: true, color: C.background1, margin: 0, valign: "top", isTextBox: true });
  s.addText("Plant head, textile manufacturer, Tamil Nadu (fictional customer)", { x: M, y: 5.2, w: 9, h: 0.4, fontSize: 16, color: C.accent4, margin: 0, isTextBox: true });
  source(s, true);

  // 13 — Roadmap
  pres.addSection({ title: "Outlook" });
  s = slide("Content", "Outlook");
  s.addText([{ text: "FY2027: " }, { text: "2,200 MW and ₹1,600 Cr", options: { color: C.accent1 } }], { placeholder: "title" });
  const qs = [["Q1", "Gujarat solar park", "150 MW comes online"], ["Q2", "Storage push", "200 MWh of battery projects"], ["Q3", "New states", "Enter Punjab and Odisha"], ["Q4", "Year-end targets", "2,200 MW · ₹1,600 Cr"]];
  const qw = (W - 2 * M - 3 * 0.3) / 4;
  qs.forEach(([q, t, d], i) => {
    const x = M + i * (qw + 0.3), last = i === 3;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 2.5, w: qw, h: 2.6, rectRadius: 0.12, fill: { color: last ? C.text1 : C.background1 }, line: { type: "none" }, objectName: q + " card" });
    s.addText(q, { x: x + 0.3, y: 2.8, w: qw - 0.6, h: 0.7, fontSize: 36, bold: true, color: C.accent1, margin: 0, isTextBox: true });
    s.addText(t, { x: x + 0.3, y: 3.75, w: qw - 0.6, h: 0.5, fontSize: 18, bold: true, color: last ? C.background1 : C.text1, margin: 0, isTextBox: true });
    s.addText(d, { x: x + 0.3, y: 4.3, w: qw - 0.6, h: 0.9, fontSize: 14, color: last ? C.accent4 : C.text2, margin: 0, valign: "top", isTextBox: true });
  });
  source(s);

  // 14 — Risks table
  s = slide("Content", "Outlook");
  s.addText("Risks we are managing", { placeholder: "title" });
  const hd = (t) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: C.text1 }, fontSize: 14 } });
  const row = (a, b, c, hi) => [{ text: a, options: { bold: true, color: C.text1 } }, { text: b, options: { color: hi ? C.accent5 : C.text2, bold: hi } }, { text: c, options: { color: C.text2 } }];
  s.addTable([[hd("Risk"), hd("Impact"), hd("How we manage it")],
    row("Solar module prices", "High", "Two-year supply contracts with three suppliers", true),
    row("Grid connection delays", "Medium", "Dedicated approvals team in every state"),
    row("Interest rates", "Medium", "70% of debt at fixed rates; net debt / EBITDA 2.1x")],
    { x: M, y: 2.4, w: W - 2 * M, colW: [3.4, 1.8, W - 2 * M - 5.2], rowH: 0.85, fontSize: 15, fill: { color: C.background1 }, border: { type: "solid", color: HEX.line, pt: 1 }, valign: "middle", margin: [0, 0.2, 0, 0.2], objectName: "Risk table" });
  source(s);

  // 15 — Closing
  s = slide("Dark", "Outlook");
  s.addImage({ data: LOGO_SUN, x: M, y: 2.3, w: 1.6, h: 0.81, objectName: "Logo mark large" });
  s.addText("Power that rises every day", { x: M, y: 3.4, w: 10, h: 1.0, fontSize: 48, bold: true, color: C.background1, margin: 0, isTextBox: true });
  s.addText("Thank you", { x: M, y: 4.5, w: 10, h: 0.5, fontSize: 20, color: C.accent4, margin: 0, isTextBox: true });
  s.addText([{ text: "Investor relations", options: { bold: true, color: C.background1, breakLine: true } }, { text: "investors@suryana.example", options: { color: C.accent4 } }],
    { x: M, y: 5.6, w: 6, h: 0.8, fontSize: 14, margin: 0, isTextBox: true });

  // 16 — Appendix: deliberately bad "before" slide for the makeover
  pres.addSection({ title: "Makeover: before" });
  s = pres.addSlide({ sectionTitle: "Makeover: before" });
  s.background = { color: "FFFFFF" };
  s.addText("Financial Performance Overview", { x: 0.4, y: 0.25, w: 12.5, h: 0.8, fontSize: 32, fontFace: "Calibri", color: "000000", margin: 0, isTextBox: true });
  const bad = ["Revenue for FY26 was Rs. 1,239.62 Crores as compared to Rs. 899.87 Crores in FY25", "This represents a growth of 37.76% year on year", "Growth was driven by multiple factors including rooftop, utility and storage", "Rooftop segment revenue was Rs. 508 Cr (FY25: Rs. 290 Cr)", "Utility segment revenue was Rs. 645 Cr (FY25: Rs. 590 Cr)", "Storage segment revenue was Rs. 87 Cr (FY25: Rs. 20 Cr)", "EBITDA margin improved to 27% from 25%", "Customer count increased to 1,150", "Capacity increased to 1,640 MW"];
  s.addText(bad.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i < bad.length - 1 } })), { x: 0.4, y: 1.15, w: 8.3, h: 6.0, fontSize: 18, fontFace: "Calibri", color: "000000", valign: "top", margin: 0.05, paraSpaceAfter: 4, isTextBox: true });
  s.addChart(pres.charts.BAR3D, [{ name: "FY25", labels: ["Utility", "Rooftop", "Storage"], values: [590, 290, 20] }, { name: "FY26", labels: ["Utility", "Rooftop", "Storage"], values: [645, 508, 87] }],
    { x: 8.8, y: 3.6, w: 4.3, h: 3.6, chartColors: ["FF0000", "00B050", "7030A0"], showLegend: true, legendPos: "r", showTitle: true, title: "Segment Revenue", titleFontSize: 12, catAxisLabelFontSize: 9, valAxisLabelFontSize: 9, objectName: "Cluttered 3D chart" });
  s.addNotes("Deliberately poor 'before' slide for the makeover section of the case study. Compare with slide 4.");

  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("written", OUT);
})();
