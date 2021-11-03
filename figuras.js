//Código del cuadrado

console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
perimetroCuadrado()
//console.log ("El perímetro del cuadrado es: " + perimetroCuadrado + "cm.");

function areaCuadrado (lado) {
    return lado * lado;
}
//console.log ("El área del cuadrado es: " + areaCuadrado + "cm^2.");

console.groupEnd();

//Código del triangulo

console.group("Triangulos");
function perimetroTriangulo(lado) {
    return lado * 3;
}
perimetroTriangulo()
function areaTriangulo (lado) {
    return (lado * lado) / 2;
}
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log ("Los lados del triangulo miden: " 
//+ lado2
//+ "cm, "
//+ lado2
//+ "cm, "
//+ lado2
//+ "cm."
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm.");

//function perimetroTriangulo(lado1, lado2, base){
//    return lado1 + lado2 + base;
//}
//console.log ("El perímetro del triangulo es: " + perimetroTriangulo + "cm.");

//function areaTriangulo(base, altura){
//    return (base * altura) / 2;
//}
//console.log ("El área del triangulo es: " + areaTriangulo + "cm^2.");

console.groupEnd();

//Código del círculo

console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es de: " + radioCirculo + "cm.");


//Diámetro
function diametroCirculo (radio) {
    return radio * 2;
}

//PI
const PI =Math.PI;
console.log("PI es: " + PI + "cm");

//Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo (radio);
    return diametro * PI;
}

//Área

function areaCirculo (radio) {
    return (radio * radio) * PI; 
}
console.groupEnd();

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado (value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado (value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const perimetro = perimetroTriangulo (value);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const area = areaTriangulo (value);
    alert(area);
}