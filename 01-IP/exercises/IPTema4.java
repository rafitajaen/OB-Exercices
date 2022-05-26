package exercises;

public class IPTema4 {

   public static void ejercicio() {

      /////////////////////////////
      // Primera parte:
      // - Comprobar si numeroIf es positivo, negativo o 0
      /////////////////////////////

      System.out.println("Primera parte - Condicional If: ");

      int numeroIf = -3;

      System.out.println("La variable numeroIf tiene el valor: " + numeroIf + ", por lo tanto :");

      if (numeroIf > 0)
         System.out.println("numeroIf es positivo");
      else if (numeroIf < 0)
         System.out.println("numeroIf es negativo");
      else
         System.out.println("numeroIf es 0");

      /////////////////////////////
      // Segunda parte:
      // - Bucle while
      /////////////////////////////

      System.out.println();
      System.out.println("Segunda parte - Bucle while: ");

      int numeroWhile = 0;

      System.out.println("Estado inicial de numeroWhile: " + numeroWhile);

      while (numeroWhile < 3) {
         System.out.println("Iteración del bucle while, siendo valor de numeroWhile: " + numeroWhile);
         numeroWhile++;
      }

      /////////////////////////////
      // Tercera parte:
      // - Bucle do while
      /////////////////////////////

      System.out.println();
      System.out.println("Tercera parte - Bucle do while: ");

      int numeroDoWhile = 2;

      System.out.println("Estado inicial de numeroDoWhile: " + numeroDoWhile);

      do {
         System.out.println("Iteración del bucle do while, siendo valor de numeroDoWhile: " + numeroDoWhile);
         numeroDoWhile++;
      } while (numeroDoWhile < 3);

      /////////////////////////////
      // Cuarta parte:
      // - Bucle for
      /////////////////////////////

      System.out.println();
      System.out.println("Cuarta parte - Bucle for: ");

      for (int numeroFor = 0; numeroFor <= 3; numeroFor++) {
         System.out.println("Iteración del bucle for, siendo valor de numeroFor: " + numeroFor);
      }

      /////////////////////////////
      // Quinta parte:
      // - Condicional Switch
      /////////////////////////////

      System.out.println();
      System.out.println("Quinta parte - Condicional Switch ");

      int estacion = 0;
      String resultado = "";

      switch (estacion) {
         case 0:
            resultado = "Invierno";
            break;
         case 1:
            resultado = "Primavera";
            break;
         case 2:
            resultado = "Verano";
            break;
         case 3:
            resultado = "Otoño";
            break;
         default:
            resultado = "ND";
            break;
      }

      System.out.println("Actualmente estamos en la estación de: " + resultado);

   }
}
