import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { COLORS } from '../../data/constants/colors';

const PieChart = ({ data, config }) => {
  const svgRef = useRef();
  const {
    width = 600,
    height = 400,
    margin = { top: 20, right: 30, bottom: 40, left: 60 },
    colors = COLORS.chartColors.default,
    showLabels = true,
    animate = true,
    showLegend = true,
    innerRadius = 0
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
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Calcular radio del gráfico
    const radius = Math.min(width, height) / 2 - Math.max(margin.top, margin.bottom);

    // Configurar generador de arcos
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(radius);

    // Configurar generador de pie
    const pie = d3.pie()
      .value(d => d.value)
      .sort(null);

    // Crear arcos
    const arcs = g.selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    // Agregar paths
    const paths = arcs.append('path')
      .attr('fill', (d, i) => colors[i % colors.length])
      .attr('d', arc);

    // Animar paths
    if (animate) {
      paths
        .attr('d', d => {
          const startAngle = d.startAngle;
          const endAngle = d.startAngle;
          return arc({ ...d, startAngle, endAngle });
        })
        .transition()
        .duration(1000)
        .attr('d', arc);
    }

    // Agregar etiquetas
    if (showLabels) {
      const labels = arcs.append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('dy', '.35em')
        .attr('text-anchor', 'middle')
        .attr('fill', COLORS.text.primary)
        .style('opacity', 0)
        .text(d => `${d.data.value}%`);

      // Animar etiquetas
      if (animate) {
        labels
          .transition()
          .duration(1000)
          .style('opacity', 1);
      } else {
        labels.style('opacity', 1);
      }
    }

    // Agregar leyenda
    if (showLegend) {
      const legend = svg.append('g')
        .attr('transform', `translate(${width - margin.right}, ${margin.top})`);

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

    // Agregar interactividad
    paths
      .on('mouseover', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('transform', `scale(1.05)`);
      })
      .on('mouseout', function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('transform', `scale(1)`);
      });

  }, [data, config]);

  return (
    <div className="pie-chart-container" style={{
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

export default PieChart; 