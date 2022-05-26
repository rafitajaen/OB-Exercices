package exercises;

public class IPTema9 {

    public static void ejercicio() {

        //Primera parte : Cliente

        Cliente pedro = new Cliente("Pedro", 23, 123456789, 999);
        System.out.println(pedro);


        //Segunda parte : Trabajador

        Trabajador luis = new Trabajador("Luis", 36, 987654321, 123456);
        System.out.println(luis);

    }

}

// La clase Persona se creó en el ejercicio anterior.
// La declaración de la clase Persona está en el archivo IPTema8.java

class Cliente extends Persona {
    private int credito;

    public Cliente(String nombre, int edad, int telefono, int credito) {
        this.setNombre(nombre);
        this.setEdad(edad);
        this.setTelefono(telefono);
        this.setCredito(credito);
    }

    ///////////////////
    // Cliente - Getters and Setters
    ///////////////////

    public int getCredito() {
        return this.credito;
    }

    public void setCredito(int credito) {
        this.credito = credito;
    }

    ///////////////////
    // Sobrescribo el método toString para mayor claridad en el código principal
    ///////////////////

    @Override
    public String toString() {
        String output;
        output = String.format("[Cliente] Nombre: %s - Edad: %s - Teléfono: %s - Crédito: %s", this.getNombre(),
                this.getEdad(), this.getTelefono(), this.getCredito());
        return (output);
    }
}

class Trabajador extends Persona {
    private int salario;

    public Trabajador(String nombre, int edad, int telefono, int salario) {
        this.setNombre(nombre);
        this.setEdad(edad);
        this.setTelefono(telefono);
        this.setSalario(salario);
    }

    ///////////////////
    // Trabajador - Getters and Setters
    ///////////////////

    public int getSalario() {
        return this.salario;
    }

    public void setSalario(int salario) {
        this.salario = salario;
    }

    ///////////////////
    // Sobrescribo el método toString para mayor claridad en el código principal
    ///////////////////

    @Override
    public String toString() {
        String output;
        output = String.format("[Trabajador] Nombre: %s - Edad: %s - Teléfono: %s - Salario: %s", this.getNombre(),
                this.getEdad(), this.getTelefono(), this.getSalario());
        return (output);
    }
}
