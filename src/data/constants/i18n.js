// Internationalization configuration
export const I18N_CONFIG = {
  defaultLocale: 'en',
  supportedLocales: ['en', 'es', 'fr', 'ar'],
  fallbackLocale: 'en',
  messages: {
    en: {
      common: {
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        warning: 'Warning',
        info: 'Information',
        confirm: 'Confirm',
        cancel: 'Cancel',
        save: 'Save',
        delete: 'Delete',
        edit: 'Edit',
        view: 'View',
        search: 'Search',
        filter: 'Filter',
        sort: 'Sort',
        refresh: 'Refresh',
        export: 'Export',
        import: 'Import',
        print: 'Print',
        share: 'Share',
        help: 'Help',
        settings: 'Settings',
        logout: 'Logout'
      },
      navigation: {
        home: 'Home',
        dashboard: 'Dashboard',
        reports: 'Reports',
        analytics: 'Analytics',
        settings: 'Settings',
        profile: 'Profile',
        help: 'Help',
        logout: 'Logout'
      },
      dashboard: {
        title: 'Dashboard',
        summary: 'Summary',
        overview: 'Overview',
        details: 'Details',
        trends: 'Trends',
        comparison: 'Comparison',
        filters: 'Filters',
        dateRange: 'Date Range',
        period: 'Period',
        refresh: 'Refresh Data'
      },
      sections: {
        summary: {
          title: 'Executive Summary',
          description: 'Overview of key metrics'
        },
        perceptions: {
          title: 'Perceptions',
          description: 'Analysis of perceptions about Qatar'
        },
        motivations: {
          title: 'Motivations',
          description: 'Factors motivating visits to Qatar'
        },
        behaviors: {
          title: 'Behaviors',
          description: 'Traveler behavior patterns'
        },
        competitive: {
          title: 'Competitive Analysis',
          description: 'Comparison with competing destinations'
        }
      },
      charts: {
        bar: 'Bar Chart',
        line: 'Line Chart',
        pie: 'Pie Chart',
        radar: 'Radar Chart',
        scatter: 'Scatter Plot',
        legend: 'Legend',
        data: 'Data',
        series: 'Series',
        category: 'Category',
        value: 'Value',
        percentage: 'Percentage',
        trend: 'Trend',
        comparison: 'Comparison'
      },
      filters: {
        dateRange: 'Date Range',
        period: 'Period',
        category: 'Category',
        type: 'Type',
        status: 'Status',
        source: 'Source',
        apply: 'Apply Filters',
        clear: 'Clear Filters',
        reset: 'Reset Filters'
      },
      export: {
        title: 'Export Data',
        format: 'Format',
        dateRange: 'Date Range',
        include: 'Include',
        exclude: 'Exclude',
        options: 'Options',
        download: 'Download',
        cancel: 'Cancel'
      },
      errors: {
        loading: 'Error loading data',
        processing: 'Error processing data',
        saving: 'Error saving data',
        deleting: 'Error deleting data',
        network: 'Network error',
        server: 'Server error',
        validation: 'Validation error',
        permission: 'Permission error',
        unknown: 'Unknown error'
      },
      success: {
        saved: 'Data saved successfully',
        deleted: 'Data deleted successfully',
        exported: 'Data exported successfully',
        imported: 'Data imported successfully',
        updated: 'Data updated successfully'
      }
    },
    es: {
      common: {
        loading: 'Cargando...',
        error: 'Error',
        success: 'Éxito',
        warning: 'Advertencia',
        info: 'Información',
        confirm: 'Confirmar',
        cancel: 'Cancelar',
        save: 'Guardar',
        delete: 'Eliminar',
        edit: 'Editar',
        view: 'Ver',
        search: 'Buscar',
        filter: 'Filtrar',
        sort: 'Ordenar',
        refresh: 'Actualizar',
        export: 'Exportar',
        import: 'Importar',
        print: 'Imprimir',
        share: 'Compartir',
        help: 'Ayuda',
        settings: 'Configuración',
        logout: 'Cerrar sesión'
      },
      navigation: {
        home: 'Inicio',
        dashboard: 'Panel',
        reports: 'Informes',
        analytics: 'Análisis',
        settings: 'Configuración',
        profile: 'Perfil',
        help: 'Ayuda',
        logout: 'Cerrar sesión'
      },
      dashboard: {
        title: 'Panel',
        summary: 'Resumen',
        overview: 'Vista general',
        details: 'Detalles',
        trends: 'Tendencias',
        comparison: 'Comparación',
        filters: 'Filtros',
        dateRange: 'Rango de fechas',
        period: 'Período',
        refresh: 'Actualizar datos'
      },
      sections: {
        summary: {
          title: 'Resumen Ejecutivo',
          description: 'Vista general de métricas clave'
        },
        perceptions: {
          title: 'Percepciones',
          description: 'Análisis de percepciones sobre Qatar'
        },
        motivations: {
          title: 'Motivaciones',
          description: 'Factores que motivan las visitas a Qatar'
        },
        behaviors: {
          title: 'Comportamientos',
          description: 'Patrones de comportamiento de los viajeros'
        },
        competitive: {
          title: 'Análisis Competitivo',
          description: 'Comparación con destinos competidores'
        }
      },
      charts: {
        bar: 'Gráfico de barras',
        line: 'Gráfico de líneas',
        pie: 'Gráfico circular',
        radar: 'Gráfico de radar',
        scatter: 'Gráfico de dispersión',
        legend: 'Leyenda',
        data: 'Datos',
        series: 'Series',
        category: 'Categoría',
        value: 'Valor',
        percentage: 'Porcentaje',
        trend: 'Tendencia',
        comparison: 'Comparación'
      },
      filters: {
        dateRange: 'Rango de fechas',
        period: 'Período',
        category: 'Categoría',
        type: 'Tipo',
        status: 'Estado',
        source: 'Fuente',
        apply: 'Aplicar filtros',
        clear: 'Limpiar filtros',
        reset: 'Restablecer filtros'
      },
      export: {
        title: 'Exportar datos',
        format: 'Formato',
        dateRange: 'Rango de fechas',
        include: 'Incluir',
        exclude: 'Excluir',
        options: 'Opciones',
        download: 'Descargar',
        cancel: 'Cancelar'
      },
      errors: {
        loading: 'Error al cargar datos',
        processing: 'Error al procesar datos',
        saving: 'Error al guardar datos',
        deleting: 'Error al eliminar datos',
        network: 'Error de red',
        server: 'Error del servidor',
        validation: 'Error de validación',
        permission: 'Error de permisos',
        unknown: 'Error desconocido'
      },
      success: {
        saved: 'Datos guardados correctamente',
        deleted: 'Datos eliminados correctamente',
        exported: 'Datos exportados correctamente',
        imported: 'Datos importados correctamente',
        updated: 'Datos actualizados correctamente'
      }
    }
  }
}; 