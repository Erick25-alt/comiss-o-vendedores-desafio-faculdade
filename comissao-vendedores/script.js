document.querySelector('#calcular').addEventListener('click', function() {
    const salario = parseFloat(document.querySelector('#salario').value);
    const valorVendas = parseFloat(document.querySelector('#valorVendas').value);
    let totalVendas, finalTotal;

    if (valorVendas >= 55000 && valorVendas <= 100000) {
        totalVendas = (2 * valorVendas) / 100;
        finalTotal = salario + totalVendas;
        document.querySelector('#resultado').innerHTML = `
            Salário: ${salario}<br>
            A comissão é de: ${totalVendas.toFixed(2)}<br>
            Salário com a comissão é de: ${finalTotal.toFixed(2)}
        `;
    } else if (valorVendas < 55000) {
        finalTotal = salario + 100;
        document.querySelector('#resultado').innerHTML = `
            Salário: ${salario}<br>
            A comissão é de: 100 reais<br>
            Salário com a comissão é de: ${finalTotal.toFixed(2)}
        `;
    } else {
        totalVendas = 5000;
        finalTotal = salario + totalVendas;
        document.querySelector('#resultado').innerHTML = `
            Salário: ${salario}<br>
            A comissão é de: 5000 reais<br>
            Salário com a comissão é de: ${finalTotal.toFixed(2)}
        `;
    }
});
