
      (function () {
        const toggleBtn = document.getElementById("themeToggle");
        const icon = document.getElementById("toggleIcon");
        const body = document.body;

        function setDarkMode(isDark) {
          if (isDark) {
            body.classList.add("dark-mode");
            icon.textContent = "🌙";
          } else {
            body.classList.remove("dark-mode");
            icon.textContent = "☀️";
          }
        }

        // Initialize with light mode
        setDarkMode(false);

        toggleBtn.addEventListener("click", (e) => {
          e.preventDefault();
          const isDark = body.classList.contains("dark-mode");
          setDarkMode(!isDark);
        });

        const menuToggle = document.getElementById("menuToggle");
        const mobileMenu = document.getElementById("mobileMenu");
        menuToggle.addEventListener("click", () => {
          mobileMenu.classList.toggle("open");
          menuToggle.textContent = mobileMenu.classList.contains("open")
            ? "✕"
            : "☰";
        });

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href === "#" || !href) return;
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: "smooth" });
              mobileMenu.classList.remove("open");
              if (menuToggle) menuToggle.textContent = "☰";
            }
          });
        });
      })();
    
