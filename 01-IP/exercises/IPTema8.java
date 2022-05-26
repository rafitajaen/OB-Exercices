package exercises;

public class IPTema8 {

    public static void ejercicio() {

        Persona paco = new Persona();

        paco.setEdad(22);
        paco.setNombre("Paco");
        paco.setTelefono(612345678);

        String output;

        output = String.format("Nombre: %s - Edad: %s - Teléfono: %s", paco.getNombre(), paco.getEdad(),
                paco.getTelefono());

        System.out.println(output);
    }

}

class Persona {

    private int edad;
    private String nombre;
    private long telefono;

    ////////////
    // Edad - Getters and Setters
    ////////////

    public int getEdad() {
        return this.edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    ////////////
    // Nombre - Getters and Setters
    ////////////

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    ////////////
    // Teléfono - Getters and Setters
    ////////////

    public long getTelefono() {
        return this.telefono;
    }

    public void setTelefono(long telefono) {
        this.telefono = telefono;
    }

}
