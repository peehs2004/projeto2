document.addEventListener("DOMContentLoaded", () => {
  
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  
  if (tabs.length > 0 && contents.length > 0) {
    tabs[0].classList.add("active");
    contents[0].style.display = "block"; 
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      
      tabs.forEach(item => item.classList.remove("active"));
      
      tab.classList.add("active");

      
      contents.forEach(c => {
        c.style.display = "none";
      });

      
      const target = document.getElementById(tab.dataset.target);
      if (target) {
        target.style.display = "block";
      }
    });
  });

  
  const btnRelax = document.getElementById("modoRelax");
  if (btnRelax) {
    btnRelax.addEventListener("click", () => {
      document.body.classList.toggle("relax");
      
      if (document.body.classList.contains("relax")) {
        btnRelax.textContent = "🍃 Desativar Modo Relax";
      } else {
        btnRelax.textContent = "🌿 Ativar Modo Relax";
      }
    });
  }
});