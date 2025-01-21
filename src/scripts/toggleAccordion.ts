export function toggleAccordion(event: MouseEvent): void {
    // Obtiene el elemento del acordeón más cercano al evento
    const target = event.target as HTMLElement;
    const item = target.closest(".accordion-item") as HTMLElement | null;
  
    if (!item) return; // Salir si no encuentra el elemento correspondiente
  
    const content = item.querySelector(".accordion-content") as HTMLElement | null;
  
    if (!content) return; // Salir si no encuentra el contenido del acordeón
  
    const isOpen = item.classList.contains("open");
  
    if (isOpen) {
      // Si está abierto, cerrar el acordeón
      item.classList.remove("open");
      content.style.maxHeight = "";
    } else {
      // Si está cerrado, abrir el acordeón
      item.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
}  