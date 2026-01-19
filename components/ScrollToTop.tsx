"use client";

export default function ScrollToTop() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const header = document.getElementById("header");
    const jumbotron = document.getElementById("jumbotron");
    
    if (jumbotron && header) {
      const headerHeight = header.offsetHeight;
      const jumbotronPosition = jumbotron.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = jumbotronPosition - headerHeight;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    } else if (jumbotron) {
      jumbotron.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="inline-block lg:hidden fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Remonter en haut de la page"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    </button>
  );
}

