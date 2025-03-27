// Accessibility configuration
export const ACCESSIBILITY_CONFIG = {
  aria: {
    labels: {
      // Navigation
      mainNav: 'Main navigation',
      sideNav: 'Side navigation',
      breadcrumb: 'Breadcrumb navigation',
      pagination: 'Pagination navigation',
      tabs: 'Tab navigation',
      menu: 'Menu',
      submenu: 'Submenu',
      dropdown: 'Dropdown menu',

      // Interactive elements
      button: 'Button',
      link: 'Link',
      checkbox: 'Checkbox',
      radio: 'Radio button',
      select: 'Select dropdown',
      input: 'Input field',
      textarea: 'Text area',
      search: 'Search field',
      filter: 'Filter field',
      sort: 'Sort field',
      datePicker: 'Date picker',
      timePicker: 'Time picker',
      fileUpload: 'File upload',
      slider: 'Slider',
      toggle: 'Toggle switch',
      accordion: 'Accordion',
      modal: 'Modal dialog',
      dialog: 'Dialog',
      tooltip: 'Tooltip',
      popover: 'Popover',

      // Data visualization
      chart: 'Chart',
      table: 'Table',
      list: 'List',
      grid: 'Grid',
      card: 'Card',
      badge: 'Badge',
      progress: 'Progress bar',
      status: 'Status indicator',

      // Actions
      close: 'Close',
      open: 'Open',
      expand: 'Expand',
      collapse: 'Collapse',
      show: 'Show',
      hide: 'Hide',
      edit: 'Edit',
      delete: 'Delete',
      save: 'Save',
      cancel: 'Cancel',
      submit: 'Submit',
      reset: 'Reset',
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
    roles: {
      // Landmarks
      banner: 'Banner',
      navigation: 'Navigation',
      main: 'Main content',
      complementary: 'Complementary content',
      contentinfo: 'Content information',
      search: 'Search',
      form: 'Form',
      region: 'Region',
      article: 'Article',
      section: 'Section',
      aside: 'Aside',

      // Widgets
      button: 'Button',
      link: 'Link',
      checkbox: 'Checkbox',
      radio: 'Radio button',
      textbox: 'Text box',
      listbox: 'List box',
      combobox: 'Combo box',
      slider: 'Slider',
      spinbutton: 'Spin button',
      tab: 'Tab',
      tabpanel: 'Tab panel',
      tablist: 'Tab list',
      menuitem: 'Menu item',
      menubar: 'Menu bar',
      menu: 'Menu',
      dialog: 'Dialog',
      alert: 'Alert',
      status: 'Status',
      progressbar: 'Progress bar',
      toolbar: 'Toolbar',
      tree: 'Tree',
      treeitem: 'Tree item',
      grid: 'Grid',
      gridcell: 'Grid cell',
      row: 'Row',
      columnheader: 'Column header',
      rowheader: 'Row header',
      table: 'Table',
      cell: 'Cell',
      heading: 'Heading'
    },
    states: {
      // Boolean states
      expanded: 'Expanded',
      collapsed: 'Collapsed',
      selected: 'Selected',
      checked: 'Checked',
      unchecked: 'Unchecked',
      pressed: 'Pressed',
      disabled: 'Disabled',
      enabled: 'Enabled',
      required: 'Required',
      invalid: 'Invalid',
      valid: 'Valid',
      readOnly: 'Read only',
      hidden: 'Hidden',
      visible: 'Visible',
      busy: 'Busy',
      live: 'Live',

      // Value states
      current: 'Current',
      maximum: 'Maximum',
      minimum: 'Minimum',
      value: 'Value',
      placeholder: 'Placeholder',
      label: 'Label',
      description: 'Description',
      error: 'Error',
      help: 'Help'
    }
  },
  keyboard: {
    shortcuts: {
      // Navigation
      home: 'Home',
      end: 'End',
      pageUp: 'Page Up',
      pageDown: 'Page Down',
      arrowUp: 'Arrow Up',
      arrowDown: 'Arrow Down',
      arrowLeft: 'Arrow Left',
      arrowRight: 'Arrow Right',
      tab: 'Tab',
      shiftTab: 'Shift + Tab',
      escape: 'Escape',
      enter: 'Enter',
      space: 'Space',

      // Actions
      save: 'Ctrl + S',
      undo: 'Ctrl + Z',
      redo: 'Ctrl + Y',
      copy: 'Ctrl + C',
      paste: 'Ctrl + V',
      cut: 'Ctrl + X',
      selectAll: 'Ctrl + A',
      find: 'Ctrl + F',
      replace: 'Ctrl + H',
      print: 'Ctrl + P',
      refresh: 'F5',
      help: 'F1'
    },
    focus: {
      visible: true,
      outline: '2px solid #8B0000',
      outlineOffset: '2px'
    }
  },
  screenReader: {
    announcements: {
      loading: 'Loading',
      loaded: 'Loaded',
      error: 'Error',
      success: 'Success',
      warning: 'Warning',
      info: 'Information',
      updated: 'Updated',
      changed: 'Changed',
      selected: 'Selected',
      deselected: 'Deselected',
      expanded: 'Expanded',
      collapsed: 'Collapsed',
      opened: 'Opened',
      closed: 'Closed'
    },
    live: {
      polite: 'polite',
      assertive: 'assertive',
      off: 'off'
    }
  },
  contrast: {
    minimum: 4.5,
    enhanced: 7
  },
  motion: {
    reduced: 'prefers-reduced-motion: reduce',
    none: 'prefers-reduced-motion: no-preference'
  }
}; 