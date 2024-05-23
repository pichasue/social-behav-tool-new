import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TheoriesGraph = ({ theoryId, constructs }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (theoryId && constructs && d3Container.current) {
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

      // Create a simulation for an array of nodes, and compose the desired forces
      const simulation = d3.forceSimulation(constructs)
        .force('charge', d3.forceManyBody().strength(-50))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('link', d3.forceLink().id(d => d.id))
        .on('tick', ticked);

      // Draw lines for the links between the nodes
      const link = graph.append('g')
          .attr('stroke', '#999')
          .attr('stroke-opacity', 0.6)
        .selectAll('line')
        .data(simulation.force('link').links())
        .enter().append('line')
          .attr('stroke-width', d => Math.sqrt(d.value));

      // Create the node circles
      const node = graph.append('g')
          .attr('stroke', '#fff')
          .attr('stroke-width', 1.5)
        .selectAll('circle')
        .data(constructs)
        .enter().append('circle')
          .attr('r', 5)
          .attr('fill', colorByGroup)
          .call(drag(simulation));

      // Define the color for each group
      function colorByGroup(d) {
        return d.group === theoryId ? '#ffab00' : '#69b3a2';
      }

      // Define the drag behavior
      function drag(simulation) {
        function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        }

        function dragged(event) {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        }

        function dragended(event) {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        }

        return d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended);
      }

      // Update positions each tick of the simulation
      function ticked() {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

        node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y);
      }
    }
  }, [theoryId, constructs, d3Container.current]);

  return (
    <div className="d3-component" ref={d3Container} />
  );
};

export default TheoriesGraph;
