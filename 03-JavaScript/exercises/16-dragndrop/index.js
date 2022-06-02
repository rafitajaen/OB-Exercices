/*
 *    (Curso JavaScript Básico)
 *        Ejercicio del Tema 16 - DragNDrop
 */
const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

/* Adding an event listener to each paragraph. */
parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    console.log("Arrastrando el párrafo: " + parrafo.innerText);
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
    const elemento_fantasma = document.querySelector(".imagen-fantasma");
    event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
  });

  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging");
  });
});

/* Adding an event listener to each section. */
secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });

  seccion.addEventListener("drop", (event) => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});

const papelera = document.querySelector(".papelera");

/* Preventing the default behavior of the browser when dragging an element over the trash can. */
papelera.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
});

/* Removing the paragraph from the DOM. */
papelera.addEventListener("drop", (event) => {
  const id_parrafo = event.dataTransfer.getData("id");
  document.getElementById(id_parrafo).remove();
});
