import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TheoriesGraph = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      // Clear the previous graph
      svg.selectAll('*').remove();

      // Set up the dimensions and margins of the graph
      const margin = { top: 20, right: 30, bottom: 30, left: 40 },
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

      // Append the svg object to the container
      const graph = svg
        .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
        .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);

      // Create scales
      const x = d3.scaleBand()
        .range([0, width])
        .domain(data.map(d => d.theory))
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([height, 0]);

      // Draw the bars
      graph.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
          .attr('class', 'bar')
          .attr('x', d => x(d.theory))
          .attr('y', d => y(d.value))
          .attr('width', x.bandwidth())
          .attr('height', d => height - y(d.value))
          .attr('fill', '#69b3a2');

      // Add the X Axis
      graph.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      // Add the Y Axis
      graph.append('g')
        .call(d3.axisLeft(y));
    }
  // Removed d3Container.current from the dependency array to address the linter warning
  }, [data]);

  return (
    <div className="d3-component" ref={d3Container} />
  );
};

export default TheoriesGraph;
