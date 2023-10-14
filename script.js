const gastos = [];

function registrarGasto(){
    const tipoGasto = document.getElementById('tipodegasto').value;
    const monto = document.getElementById('monto').value;
    const compra = `${tipoGasto.value}: ${monto.value}`;
    gastos.push(compra);
    monto.value = '';
    tipoGasto.value = '';
    alert("Compra registrada");
};
    const btn = document.getElementById('guardar');
    btn.addEventListener('click', registrarGasto);
    
