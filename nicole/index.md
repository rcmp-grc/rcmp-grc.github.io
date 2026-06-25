---
layout: default
title: Nicole's sandbox
date_modified: 2026-06-24
lang: en
lang_url: index-fr.html
---
<div class="list-group">
  <li><a href="report-rapport-en.html" class="list-group-item">2025 Commissioner of Firearms Report</a></li>
  <li><a href="report-rapport-fr.html" class="list-group-item">Rapport du commissaire aux armes à feu 2025</a></li>
</div>
<script>
	// get page language
	const locale = document.documentElement.lang.toLowerCase() === "en";

	// create object of strings based on page language
	const localeGlossary = {
		// "_s" means "symbol"
		code_s: locale ? "en-CA" : "fr-CA",
		colon_s: locale ? ": " : " : ",
		percent_s: locale ? "%" : " %",

		// Fiscal years
		fy00: locale ? "2000–01" : "2000–2001",
		fy01: locale ? "2001–02" : "2001–2002",
		fy02: locale ? "2002–03" : "2002–2003",
		fy03: locale ? "2003–04" : "2003–2004",
		fy04: locale ? "2004–05" : "2004–2005",
		fy05: locale ? "2005–06" : "2005–2006",
		fy06: locale ? "2006–07" : "2006–2007",
		fy07: locale ? "2007–08" : "2007–2008",
		fy08: locale ? "2008–09" : "2008–2009",
		fy09: locale ? "2009–10" : "2009–2010",
		fy10: locale ? "2010–11" : "2010–2011",
		fy11: locale ? "2011–12" : "2011–2012",
		fy12: locale ? "2012–13" : "2012–2013",
		fy13: locale ? "2013–14" : "2013–2014",
		fy14: locale ? "2014–15" : "2014–2015",
		fy15: locale ? "2015–16" : "2015–2016",
		fy16: locale ? "2016–17" : "2016–2017",
		fy17: locale ? "2017–18" : "2017–2018",
		fy18: locale ? "2018–19" : "2018–2019",
		fy19: locale ? "2019–20" : "2019–2020",
		fy20: locale ? "2020–21" : "2020–2021",
		fy21: locale ? "2021–22" : "2021–2022",
		fy22: locale ? "2022–23" : "2022–2023",
		fy23: locale ? "2023–24" : "2023–2024",
		fy24: locale ? "2024–25" : "2024–2025",
		fy25: locale ? "2025–26" : "2025–2026",
		fy26: locale ? "2026–27" : "2026–2027",

		// Varied strings
		// "_w" means "word"
		division_w: "Division",
		number_w: locale ? "Number" : "Nombre",
		year_w: locale ? "Year" : "Année",
		rate_w: locale ? "Rate" : "Taux",
		total_w: locale ? "Total" : "Somme",
		percentage_w: locale ? "Percentage" : "Pourcentage",
		yes_w: locale ? "Yes" : "Oui",
		no_w: locale ? "No" : "Non",
		female_w: locale ? "Female" : "Femme",
		male_w: locale ? "Male" : "Homme",
		rank_w: locale ? "Rank" : "Grade",
		fiscal_w: locale ? "Fiscal year" : "Exercice",
		requests_w: locale ? "Requests" : "Demandes",

		// Custom strings - Don't forget to add to list of contants

		/**1**/
		dataLabel1: locale ? "Year of expiration" : "Année d’expiration",
		dataLabel2: locale ? "Renewing licence count" : "Dénombrement de renouvellement des permis",
		dataLabel3: locale ? "Did not renew" : "Pas renouvelés",
		dataLabel4: locale ? "Renewed" : "Renouvelés",
		/**2**/
		dataLabel5: locale ? "Expiring licence count" : "Permis venant à échéance",
		/**3**/
		dataLabel6: locale ? "Prohibitions" : "Interdictions",
	}




	// destructure the variables for ease of use
	const { code_s, colon_s, percent_s, fy00, fy01, fy02, fy03, fy04, fy05, fy06, fy07, fy08, fy09, fy10, fy11, fy12, fy13, fy14, fy15, fy16, fy17, fy18, fy19, fy20, fy21, fy22, fy23, fy24, fy25, fy26, division_w, number_w, year_w, rate_w, total_w, percentage_w, yes_w, no_w, female_w, male_w, rank_w, fiscal_w, requests_w, dataLabel1, dataLabel2, dataLabel3, dataLabel4, dataLabel5, dataLabel6 } = localeGlossary;

	/**
	* Distinct selector function
	* Let's grab a unique value for colors, pointStyles, patterns or dashPatterns for Chart.js for 
	* multiple items in a a chart
	* 
	* @param type - String. Specifies the unique type we want. Valid options are: color, pointStyle, pattern or dashPattern
	* @param i - Integer. Describes the index value of our loop that we are passing to the function
	* @returns A distinct value from one of the getObj keys
	*/
	const getDistinct = (type, i) => {
		const getObj = {
			color: ["rgba(31, 77, 121, 1)", "rgba(195, 0, 0, 1)", "rgba(235, 167, 58, 1)", "rgba(235, 99, 58, 1)", "rgba(121, 195, 0, 1)", "rgba(75, 112, 70, 1)"],
			pointStyle: ["circle", "rectRounded", "triangle", "star", "crossRot", "rect"],
			pattern: ["plus", "cross", "dash", "cross-dash", "dot", "dot-dash", "disc", "ring", "line", "line-vertical", "weave", "zigzag", "zigzag-vertical", "diagonal", "diagonal-right-left", "square", "box", "triangle", "triangle-inverted", "diamond", "diamond-box"],
			dashPattern: [[], [5, 5], [2, 5], [10, 5], [15, 5], [2, 15]]
		}
		return getObj[type][i % getObj[type].length]
	}

	/*Object of callbacks to be used for tooltips and x or y axises, saves us from repetition*/
	const callbacks = {
		tooltip: {
			titlePlain: (tooltipItems) => {
				return tooltipItems[0].label.replace(/,/g, "");
			},
			labelPlain: (context) => {
				const parsed = context.parsed?.y ? context.parsed.y : context.parsed;
				const value = typeof parsed === 'object' ? context.raw.toLocaleString(code_s) : parsed.toLocaleString(code_s);
				const label = context.dataset.label;
				return `${label}${colon_s}${value}`;
			},
			labelPlainPercent: (context) => {
				const parsed = context.parsed?.y ? context.parsed.y : context.parsed;
				const value = typeof parsed === 'object' ? `${context.raw.toLocaleString(code_s)}${percent_s}` : `${parsed.toLocaleString(code_s)}${percent_s}`;
				const label = context.dataset.label;
				return `${label}${colon_s}${value}`;
			},
			labelFloat: (context, num) => {
				const parsed = context.parsed?.y ? context.parsed.y : context.parsed;
				const value = typeof parsed === 'object' ? `${context.raw.toLocaleString(code_s, { minimumFractionDigits: num })}` : `${parsed.toLocaleString(code_s, { minimumFractionDigits: num })}`;
				const label = context.dataset.label;
				return `${label}${colon_s}${value}`;
			},
			labelFloatPercent: (context, num) => {
				const parsed = context.parsed?.y ? context.parsed.y : context.parsed;
				const value = typeof parsed === 'object' ? `${context.raw.toLocaleString(code_s, { minimumFractionDigits: num })}${percent_s}` : `${parsed.toLocaleString(code_s, { minimumFractionDigits: num })}${percent_s}`;
				const label = context.dataset.label;
				return `${label}${colon_s}${value}`;
			}
		},
		xyTicks: {
			// Possible arguments: value, index, ticks
			plain: (value) => {
				return value;
			},
			plainPercent: (value) => {
				return `${value}${percent_s}`;
			},
			num: (value) => {
				return value.toLocaleString(code_s);
			},
			numUngrouped: (value) => {
				return value.toLocaleString(code_s, { useGrouping: false });
			},
			numPercent: (value) => {
				return `${value.toLocaleString(code_s)}${percent_s}`;
			},
			float: (value, num) => {
				return `${value.toLocaleString(code_s, { minimumFractionDigits: num })}`;
			},
			floatPercent: (value, num) => {
				return `${value.toLocaleString(code_s, { minimumFractionDigits: num })}${percent_s}`;
			}
		}
	}

	// Declare config class (to help save on writing, it's easier to have a Config class with some default settings)
	class Config {
		// default configuration for charts
		constructor(
			type = "line",
			stacked = false,
			horizontal = false,
			title = "Chart title",
			titleDisplay = false,
			parseType = "int",
			tooltipCallbacksTitle = callbacks.tooltip.titlePlain,
			tooltipCallbacksLabel = callbacks.tooltip.labelPlain,
			xLabel = "x label",
			xLabelDisplay = true,
			/*xTickType = "linear",
			xTicksCallback = callbacks.xyTicks.numUngrouped,
			xTickRotation = 0,*/
			yLabel = "y label",
			yLabelDisplay = true,
			yTicksCallback = callbacks.xyTicks.num,
			font = {
				size: 16,
				lineHeight: 1.2,
				weight: 600
			},
			padding = { top: 12, left: 12, right: 12, bottom: 12 },
			fill = true,
		) {
			this.type = type;
			this.title = title;
			this.titleDisplay = titleDisplay;
			this.parseType = parseType;
			this.tooltipCallbacksTitle = tooltipCallbacksTitle;
			this.tooltipCallbacksLabel = tooltipCallbacksLabel;
			this.xLabel = xLabel;
			this.xLabelDisplay = xLabelDisplay;
			this.yLabel = yLabel;
			this.yLabelDisplay = yLabelDisplay;
			this.yTicksCallback = yTicksCallback;
			this.font = font;
			this.padding = padding;
			this.fill = fill;
		}
	}

	/**
	* Constructor helper function
	* Let's us call our Config class with default options set, and let's us arbitrarily
	* set options using an object of arguments. Saves us writing.
	* 
	* @param argObj - Object containing arguments
	* @returns A merged object from Config class and arguments
	*/

	const createConfig = (argObj) => {
		let config = new Config();
		return { ...config, ...argObj }
	}

	const figureArr = [
		/**************/
		/** FIGURE 1 **/
		/**************/
		{
			data: [
				[dataLabel1, 2021, 2022, 2023, 2024, 2025],
				[dataLabel4, "303,863", "281,504", "291,744", "344,058", "286,121"],
				[dataLabel3, "84,217", "65,315", "72,669", "83,957", "79,184"],
			],
			// configuration for the chart
			config: createConfig({
				type: "bar",
				stacked: true,
				tooltipCallbacksLabel: callbacks.tooltip.labelPlain,
				xLabel: dataLabel1,
				yLabel: dataLabel2,
				yTicksCallback: callbacks.xyTicks.num,
			}),
		},
		/**************/
		/** FIGURE 2 **/
		/**************/
		{
			data: [
				[dataLabel1, 2021, 2022, 2023, 2024, 2025],
				[dataLabel4, "51,710","51,082","56,573","64,370","54,227"],
				[dataLabel3, "4,609","3,712","4,202","4,250","4,237"],
			],
			// configuration for the chart
			config: createConfig({
				type: "bar",
				stacked: true,
				tooltipCallbacksLabel: callbacks.tooltip.labelPlain,
				xLabel: dataLabel1,
				yLabel: dataLabel5,
				yTicksCallback: callbacks.xyTicks.num,
			}),
		},
		/**************/
		/** FIGURE 3 **/
		/**************/
		{

			data: [
				[year_w, 2021, 2022, 2023, 2024, 2025],
				[dataLabel6, "489,083", "495,443", "511,717", "529,916", "549,832"],
			],
			// configuration for the chart
			config: createConfig({
				type: "bar",
				// fill: false,
				tooltipCallbacksLabel: callbacks.tooltip.labelPlain,
				xLabel: year_w,
				yLabel: dataLabel6,
				yTicksCallback: callbacks.xyTicks.num,
			}),
		}
	]

	const transposedDatasets = figureArr.map((figure) => {
		let backgroundColor;

		// for line and pie charts, we want to return an array of patterns for each data set
		backgroundColor = figure.data[0].slice(1).map((e, i) => {
			return pattern.draw(`${getDistinct("pattern", i)}`, `${getDistinct("color", i)}`)
		})

		return figure.data.slice(1).map((row, i) => {
			let parsedData;

			switch (figure.config.parseType) {
				case "float":
					parsedData = row.slice(1).map((value) => parseFloat(value));
					break;
				case "int":
					parsedData = row.slice(1).map((value) => parseInt(value.replace(/,/g, "")));
					break;
				case "string":
					parsedData = row.slice(1).map((value) => value);
					break;
				default:
					parsedData = row.slice(1).map((value) => value)
			}

			// for bar charts, we only want a single pattern per row
			if (figure.config.type === "bar") {
				backgroundColor = [pattern.draw(`${getDistinct("pattern", i)}`, `${getDistinct("color", i)}`)]
			}

			return {
				label: row[0],
				/*Return parsed data according to the parser type specified in the config object*/
				data: parsedData,
				fill: figure.config.fill,
				borderColor: getDistinct("color", i),
				borderDash: getDistinct("dashPattern", i),
				pointStyle: getDistinct("pointStyle", i),
				pointRadius: 8,
				...(figure.config.fill && { backgroundColor })
			}
		})
	});

	const charts = transposedDatasets.map((transposedData, index) => {
		// get context from canvas elements
		const ctx = document.getElementById(`chart-${index + 1}`).getContext("2d");

		// get labels from data set in figureArr, make sure it lines up with our transposed data set
		const labels = figureArr.map(() => {
			return figureArr[index].data[0].slice(1)
		});

		// destructure variables from config object from our figureArr
		const {
			type,
			title,
			titleDisplay,
			tooltipCallbacksLabel,
			tooltipCallbacksTitle,
			xLabel,
			xLabelDisplay,
			yLabel,
			yLabelDisplay,
			yTicksCallback,
			font,
			padding,
			stacked,
			horizontal,
		} = figureArr[index].config;

		// call chart js with transposed data and destructured config options
		return new Chart(ctx, {
			type: type,
			data: {
				labels: labels[index],
				datasets: transposedData
			},
			options: {
				maintainAspectRatio: false,
				responsive: true,
				indexAxis: horizontal ? 'y' : 'x',
				layout: {
					padding: {
						bottom: 20
					}
				},
				elements: {
					line: {
						tension: 0.25
					}
				},
				plugins: {
					title: {
						text: title,
						display: titleDisplay,
						font,
						padding
					},
					legend: {
						display: true,
						position: "top",
					},
					tooltip: {
						callbacks: {
							title: tooltipCallbacksTitle,
							label: tooltipCallbacksLabel,
						},
					},
				},
				scales: {
					x: {
						stacked: stacked,
						display: xLabelDisplay,
						title: {
							text: xLabel,
							display: xLabelDisplay,
							font,
							padding
						},
					},
					y: {
						stacked: stacked,
						display: yLabelDisplay,
						title: {
							text: yLabel,
							display: yLabelDisplay,
							font,
							padding
						},
						ticks: {
							callback: yTicksCallback
						},
					},
				},
			},
		});
	});
</script>
