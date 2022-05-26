
class HelloWorld {
    public static void main(String[] args) {
        ////////////////////////////
        // Primera parte:
        // - Llamar a la función suma y muestra el resultado
        ////////////////////////////

        suma(1, 2, 3);

        ////////////////////////////
        // Segunda parte:
        // - Crear clase Coche
        // - Llamar función que incremente el número de puertas
        ////////////////////////////

        Coche renault = new Coche();

        renault.incrementarPuertas();
        renault.mostrarPuertas();

    }

    public static void suma(int a, int b, int c) {
        int resultado = a + b + c;
        String output = String.format("La suma de a=%o, b=%o, c=%o es igual a: %o", a, b, c, resultado);
        System.out.println(output);
    }
}

class Coche {
    private int puertas = 0;

    public void incrementarPuertas() {
        this.puertas++;
    }

    public void mostrarPuertas() {
        String output = String.format("Número de puertas: %o", puertas);
        System.out.println(output);
    }

}