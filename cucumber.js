module.exports = {
    default: {
      paths: ['features/**/*.feature'],
      require: [
        'src/step_definitions/**/*.steps.js', 
        'src/support/**/*.js',        
      ],
      format: [
        'summary',
        'progress-bar',
        
         'json:reports/cucumber_report.json',
         '@cucumber/pretty-formatter' 
      ],
      formatOptions: {
         snippetInterface: 'async-await',  
      },
      publishQuiet: true,
    },
  };