(($) => {
	const ctx1 = document.getElementById("chart-1");
		new Chart(ctx1, {
			type: "doughnut",
			data: {
				labels: ["Completed", "In progress", "To be actioned", "Re-envisioned"],
				datasets: [{
					data: [1, 1, 1, 1],
					backgroundColor: [
						pattern.draw("plus", "rgba(121, 195, 0, 1)"),
						pattern.draw("cross", "rgba(31, 77, 121, 1)"),
						pattern.draw("dash", "rgba(235, 167, 58, 1)"),
						pattern.draw("dot", "rgba(107, 76, 59, 1)"),
					]
				}]
			},
			options: {
				maintainAspectRatio: false,
				responsive: true,
				cutout: "50%",
				plugins: {
					legend: {
						display: true,
						position: "right",
						labels: {
							boxHeight: 24,
							padding: 10,
							font: {
								size: 18,
							},
						},
					},
					tooltip:{
						bodyFont: {
							size: 18,
							family: "Lato",
							weight: "normal",
							lineHeight: 1,
						},
						bodySpacing: 4,
						boxPadding: 4,
						boxWidth: 22,
						titleFont: {
							size: 20,
							family: "Lato",
							weight: "600",
						},
						padding: { top: 8, left: 12, right: 12, bottom: 12 },
						callbacks: {
						},
					},
				},
				layout: {
					padding: 12,
				}
			}
		});
})(jQuery);