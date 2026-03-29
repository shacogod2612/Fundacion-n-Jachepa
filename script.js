 const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const overlay = document.getElementById("overlay");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        toggle.classList.remove("active");
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });

    
    document.querySelectorAll("#nav a").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            nav.classList.remove("active");
            overlay.classList.remove("active");
        });
    });

    // LIGHTBOX
    const imagenes = document.querySelectorAll("#galeria img");
    const lightbox = document.getElementById("lightbox");
    const imgGrande = document.getElementById("img-grande");
    const cerrar = document.getElementById("cerrar");

    // Abrir imagen
    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            imgGrande.src = img.src;
        });
    });

  
    cerrar.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

   
    lightbox.addEventListener("click", (e) => {
        if (e.target !== imgGrande) {
            lightbox.style.display = "none";
        }
    });

const observerOptions = {
    root: null, 
    threshold: 0.08, 
    rootMargin: "0px 0px -50px 0px" 
};

const aparecerAlScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('activo');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


document.addEventListener("DOMContentLoaded", () => {
    const elementosParaAnimar = document.querySelectorAll('.revelar');
    elementosParaAnimar.forEach(el => {
        aparecerAlScroll.observe(el);
    });
});
