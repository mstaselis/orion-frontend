module.exports = {
  purge: {    
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: ['./src/**/*.html'],
    enabled:  true
  }   
}
