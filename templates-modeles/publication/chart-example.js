(($) => {
	const ctx1 = document.getElementById("chart-1");
		new Chart(ctx1, {
			type: "pie",
			data: {
				labels: ["Red", "Blue", "Green"],
				datasets: [{
					data: [5, 12, 6],
					backgroundColor: [
						pattern.draw("plus", "rgba(249, 65, 68, 1)"),
						pattern.draw("cross", "rgba(87, 117, 144, 1)"),
						pattern.draw("dash", "rgba(144, 190, 109, 1)"),
					]
				}]
			},
			options: {
				maintainAspectRatio: false,
				responsive: true,
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