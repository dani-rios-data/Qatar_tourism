import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { COLORS } from '../../data/constants/colors';

const BarChart = ({ data, config }) => {
  const svgRef = useRef();
  const {
    width = 600,
    height = 400,
    margin = { top: 20, right: 30, bottom: 40, left: 60 },
    colors = COLORS.chartColors.default,
    orientation = 'vertical',
    showLabels = true,
    showGrid = true,
    animate = true
  } = config;

  useEffect(() => {
    if (!data || !data.length) return;

    // Limpiar SVG existente
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Crear grupo principal con márgenes
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Calcular dimensiones del área de dibujo
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Configurar escalas
    const x = orientation === 'vertical'
      ? d3.scaleLinear()
          .domain([0, d3.max(data, d => d.value)])
          .range([0, innerWidth])
      : d3.scaleBand()
          .domain(data.map(d => d.name))
          .range([0, innerWidth])
          .padding(0.2);

    const y = orientation === 'vertical'
      ? d3.scaleBand()
          .domain(data.map(d => d.name))
          .range([0, innerHeight])
          .padding(0.2)
      : d3.scaleLinear()
          .domain([0, d3.max(data, d => d.value)])
          .range([innerHeight, 0]);

    // Crear ejes
    const xAxis = orientation === 'vertical'
      ? d3.axisBottom(x)
          .ticks(5)
          .tickFormat(d => `${d}%`)
      : d3.axisBottom(x);

    const yAxis = orientation === 'vertical'
      ? d3.axisLeft(y)
      : d3.axisLeft(y)
          .ticks(5)
          .tickFormat(d => `${d}%`);

    // Agregar ejes
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis)
      .call(g => {
        g.select('.domain').remove();
        if (!showGrid) g.selectAll('.tick line').remove();
      });

    g.append('g')
      .call(yAxis)
      .call(g => {
        g.select('.domain').remove();
        if (!showGrid) g.selectAll('.tick line').remove();
      });

    // Agregar barras
    const bars = g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('fill', (d, i) => colors[i % colors.length])
      .attr('x', orientation === 'vertical' ? 0 : d => x(d.name))
      .attr('y', orientation === 'vertical' ? d => y(d.name) : d => y(d.value))
      .attr('width', orientation === 'vertical' ? 0 : x.bandwidth())
      .attr('height', orientation === 'vertical' ? y.bandwidth() : 0);

    // Animar barras
    if (animate) {
      bars
        .attr('width', orientation === 'vertical' ? 0 : x.bandwidth())
        .attr('height', orientation === 'vertical' ? y.bandwidth() : 0)
        .transition()
        .duration(1000)
        .attr('width', orientation === 'vertical' ? d => x(d.value) : x.bandwidth())
        .attr('height', orientation === 'vertical' ? y.bandwidth() : d => innerHeight - y(d.value));
    } else {
      bars
        .attr('width', orientation === 'vertical' ? d => x(d.value) : x.bandwidth())
        .attr('height', orientation === 'vertical' ? y.bandwidth() : d => innerHeight - y(d.value));
    }

    // Agregar etiquetas de valores
    if (showLabels) {
      g.selectAll('.value-label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'value-label')
        .attr('fill', COLORS.text.primary)
        .attr('x', orientation === 'vertical' ? d => x(d.value) + 5 : d => x(d.name) + x.bandwidth() / 2)
        .attr('y', orientation === 'vertical' ? d => y(d.name) + y.bandwidth() / 2 : d => y(d.value) - 5)
        .attr('text-anchor', orientation === 'vertical' ? 'start' : 'middle')
        .attr('dominant-baseline', orientation === 'vertical' ? 'middle' : 'bottom')
        .text(d => `${d.value}%`);
    }

  }, [data, config]);

  return (
    <div className="bar-chart-container" style={{
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }}>
      <svg ref={svgRef} style={{
        width: '100%',
        height: '100%'
      }} />
    </div>
  );
};

export default BarChart; 