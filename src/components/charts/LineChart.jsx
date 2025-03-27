import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { COLORS } from '../../data/constants/colors';

const LineChart = ({ data, config }) => {
  const svgRef = useRef();
  const {
    width = 600,
    height = 400,
    margin = { top: 20, right: 30, bottom: 40, left: 60 },
    colors = COLORS.chartColors.trend,
    showLabels = true,
    showGrid = true,
    animate = true,
    showLegend = true
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

    // Obtener períodos únicos
    const periods = Object.keys(data[0]).filter(key => key !== 'name');

    // Configurar escalas
    const x = d3.scalePoint()
      .domain(periods)
      .range([0, innerWidth])
      .padding(0.5);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d3.max(periods, period => d[period]))])
      .range([innerHeight, 0]);

    // Crear línea
    const line = d3.line()
      .x((d, i) => x(periods[i]))
      .y(d => y(d))
      .curve(d3.curveMonotoneX);

    // Crear ejes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
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

    // Agregar líneas y puntos
    data.forEach((d, i) => {
      const lineData = periods.map(period => d[period]);
      
      // Agregar línea
      const path = g.append('path')
        .datum(lineData)
        .attr('fill', 'none')
        .attr('stroke', colors[i % colors.length])
        .attr('stroke-width', 2)
        .attr('d', line);

      // Animar línea
      if (animate) {
        const length = path.node().getTotalLength();
        path
          .attr('stroke-dasharray', length)
          .attr('stroke-dashoffset', length)
          .transition()
          .duration(1000)
          .attr('stroke-dashoffset', 0);
      }

      // Agregar puntos
      g.selectAll(`.point-${i}`)
        .data(lineData)
        .enter()
        .append('circle')
        .attr('class', `point-${i}`)
        .attr('fill', colors[i % colors.length])
        .attr('stroke', COLORS.background.primary)
        .attr('stroke-width', 2)
        .attr('r', 4)
        .attr('cx', (d, i) => x(periods[i]))
        .attr('cy', d => y(d))
        .style('opacity', 0)
        .transition()
        .duration(1000)
        .style('opacity', 1);

      // Agregar etiquetas
      if (showLabels) {
        g.selectAll(`.label-${i}`)
          .data(lineData)
          .enter()
          .append('text')
          .attr('class', `label-${i}`)
          .attr('fill', colors[i % colors.length])
          .attr('x', (d, i) => x(periods[i]))
          .attr('y', d => y(d) - 10)
          .attr('text-anchor', 'middle')
          .text(d => `${d}%`)
          .style('opacity', 0)
          .transition()
          .duration(1000)
          .style('opacity', 1);
      }
    });

    // Agregar leyenda
    if (showLegend) {
      const legend = g.append('g')
        .attr('transform', `translate(${innerWidth + 10}, 0)`);

      data.forEach((d, i) => {
        const legendRow = legend.append('g')
          .attr('transform', `translate(0, ${i * 20})`);

        legendRow.append('rect')
          .attr('width', 10)
          .attr('height', 10)
          .attr('fill', colors[i % colors.length]);

        legendRow.append('text')
          .attr('x', 15)
          .attr('y', 10)
          .attr('fill', COLORS.text.primary)
          .text(d.name);
      });
    }

  }, [data, config]);

  return (
    <div className="line-chart-container" style={{
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

export default LineChart; 