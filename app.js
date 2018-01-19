/* scatter plot notes:

	y-axis: number of home runs
	x-axis: scaled height + weight
	color: right vs left
	radius: batting average */

/* d3.js setup */


	function draw(data) {

		// set width, height, and padding of svg

		var width = 900;
		var height = 700;
		var padding = 40;

		var hands = ['R', 'L'];

		// set scales

		var weightScale = d3.scaleLinear()
					.domain(d3.extent(data, d => d.weight))
					.range([0, 1]);

		var heightScale = d3.scaleLinear()
					.domain(d3.extent(data, d => d.height))
					.range([0,1]);

		var yScale = d3.scaleSqrt()
					.domain(d3.extent(data, d => d.HR))
					.range([height - padding, padding]);

		var xScale = d3.scaleLinear()
					.domain(d3.extent(data, d => d.avg))
					.range([padding, width - padding]);

		var radiusScale = d3.scaleLinear()
					.domain([0,2])
					.range([0.5,10]);
		d3.select("body")
	    .append("h2")
	    .text("Baseball Player Performance by Handedness, Height, and Weight");

	    var svg = d3.select("body")
					.append("svg")
	  					.attr("width", width)
	  					.attr("height", height)
						.append('g')
	    				.attr('class','chart');

	    // draw svg

	    d3.select('svg')
	        .selectAll('circle')
	      	.data(data)
	      	.enter()
	      	.append("circle")
	      		.attr("cx", d => xScale(d.avg))
   			    .attr("cy", d => yScale(d.HR))
    			.attr("fill", function(d) {
    				if(d.handedness === "R") return "lightblue";
    				else return "orange";
    			})
    			.attr("r", d => radiusScale((weightScale(d.weight) + heightScale(d.height))))
    			// add tooltip function to display player stats
    			.on("mouseover", function(d) {
						tooltip
						  .style("opacity", 1)
						  .style("left", d3.event.x - (tooltip.node().offsetWidth / 2) + "px")
						  .style("top", d3.event.y + 25 + "px")
						  .html(`
						  	<p>Name: ${d.name}</p>
						  	<p>Handedness: ${d.handedness}</p>
						  	<p>Height: ${d.height} ''</p>
						  	<p>Weight: ${d.weight} lbs</p>
						  	<p>Batting Average: ${d.avg}</p>
						  	<p>Homeruns: ${d.HR}</p>
						  `);
					})
					.on("mouseout", function() {
						tooltip
						  .style("opacity", 0);
					});

    	// create axes
		var xAxis = d3.axisBottom(xScale);
		d3.select("svg")
		  .append("g")
		    .attr("transform", "translate(0," + (height - padding) + ")")
		    .call(xAxis);

		var yAxis = d3.axisLeft(yScale);
		d3.select("svg")
		  .append("g")
		    .attr("transform", "translate(" + padding + ",0)")
		    .call(yAxis);

	    // adding tooltips

	  	var tooltip = d3.select("body")
				.append("div")
				  .classed("tooltip", true);

		// add legend
		d3.select("svg")
		  .append("rect")
		    .attr("x", 80)
		    .attr("y", 34)
		    .attr("width", 110)
		    .attr("height", 48)
		    .attr("stroke", "#ccc")
		    .attr("stroke-width", 1)
		    .attr("fill", "white");
		d3.select("svg")
		  .append("circle")
		    .attr("cx", 95)
			.attr("cy", 49)
			.attr("r", 5)
			.attr("fill", "lightblue")
			.classed("toggle-right", true);
		d3.select("svg")
		  .append("text")
			.text("Right-handed")
			.attr("x", 105)
			.attr("y", 50)
			.attr("text-anchor", "start")
			.attr("alignment-baseline", "middle")
			.classed("legend", true);
		d3.select("svg")
		  .append("text")
			.text("Left-handed")
			.attr("x", 105)
			.attr("y", 65)
			.attr("text-anchor", "start")
			.attr("alignment-baseline", "middle")
			.classed("legend", true);
		d3.select("svg")
		  .append("circle")
		    .attr("cx", 95)
			.attr("cy", 64)
			.attr("r", 5)
			.attr("fill", "orange")
			.classed("toggle-left", true);

		d3.select("svg")
	  .append('text')
	    .attr('x', width / 2)
	    .attr('y', height - padding)
	    .attr('dy', '2.5em') // push down relative to x axis
	    .style('text-anchor', 'middle')
	    .style('font-size', '0.75em')
	    .text("Batting Average")

	    d3.select("svg")
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("x", - 700 / 2 )
			.attr("y", 30)
			.attr("dy", "-1.5em")
			.style("text-anchor", "middle")
			.style("font-size", "0.75em")
			.text("Homeruns");

	}