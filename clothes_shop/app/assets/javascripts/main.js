function fixCartSVGSize() {
  let cartButton = document.getElementById('cart-button')
  let cartButtonDimensions = cartButton.getBoundingClientRect()
  let cartMinDimension = Math.min(cartButtonDimensions.height, cartButtonDimensions.width) - 1
  let cartMInDimensionString = cartMinDimension + 'px'
  let embededEl = document.getElementById("sv") 
  let embededSVG = embededEl.getSVGDocument().getElementById('Capa_1')
  embededSVG.setAttribute('height', cartMInDimensionString)
  embededSVG.setAttribute('width', cartMInDimensionString)
}

window.addEventListener('resize', fixCartSVGSize) 