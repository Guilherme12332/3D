function changeFontSize(action){
    const elements = ['h1', 'p'];
    elements.map(element=>{
    
    const selector = document.querySelector(element);
    let value = getComputedStyle(selector).getPropertyValue('font-size');
    value = value.replace('px', '');
    value = action === 'aumentar' ? parseInt(value) + 1 : parseInt(value) - 1;
    selector.style.fontSize = `${value}px`;
    })
    }