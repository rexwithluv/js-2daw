const INGRESOS = [20, 30, 30, 40, 40, 50, 20, 50, 20, 50, 20, 20, 20];

const INGRESOS_INICIALES = INGRESOS.reduce((acc, ingreso) => acc + ingreso, 0);
document.getElementById("ingresosIniciales").innerHTML = INGRESOS_INICIALES + "€";

const INGRESOS_DUPLICADOS = INGRESOS.map(ingreso => ingreso < 30 ? ingreso * 2 : ingreso);
const INGRESOS_DUPLICADOS_TOTAL = INGRESOS_DUPLICADOS.reduce((acc, ingreso) => acc + ingreso, 0)
document.getElementById("ingresosDuplicados").innerHTML = INGRESOS_DUPLICADOS_TOTAL + "€";

const MENSAJE_ALERT = INGRESOS_DUPLICADOS_TOTAL > 500 ? "Hay que incrementar a cuota a los socios que pagan menos de 30€" : "Hay que hacer reunión de socios y ver nuevas medidas";
alert(MENSAJE_ALERT);

const CUOTAS_ACTUALES_ORDENADAS = Array.from(new Set(INGRESOS)).sort();
document.getElementById("cuotasActuales").innerHTML = CUOTAS_ACTUALES_ORDENADAS.join("€ | ") + "€";