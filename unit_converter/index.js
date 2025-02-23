
let converter = document.getElementById('converter');
let unit = document.getElementById('unit');
let unit_value = document.getElementById('unit_result');

unit.addEventListener('change',() => {
    let result;
    if(converter.value === 'km_to_mile'){
        result = `Miles : ${unit.value / 1.609}`;
    }else if(converter.value === 'celsius_to_foreign'){
        result = `Foreign Heat : ${(unit.value * 9/5) + 32}`;
    }
    unit_value.innerHTML = result;
});

converter.addEventListener('change',() => {
    unit.value = null;
    unit_value.innerHTML = '';
});