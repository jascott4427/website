// Pip-Boy Portfolio JavaScript

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  initColorSettings()
  initNavigation()
  initScanWave()
  initClickSound()
})

// Click Sound Effect
function initClickSound() {
    const clickSound = document.getElementById('clickSound');
    
    function playClickSound() {
        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play().catch(e => {
                // Silent fail for autoplay restrictions
            });
        }
    }
    
    // Add click event listeners to all interactive elements
    const interactiveSelectors = [
        'a[href]', 'button', 'input[type="button"]', 'input[type="submit"]',
        'input[type="reset"]', 'input[type="color"]', 'select',
        '.nav-link', '.settings-btn', '.preset-btn', '.project-pdf-btn',
        '.quick-link', '.download-btn', '.project-link'
    ];
    
    interactiveSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.addEventListener('click', function(e) {
                if (this.disabled || this.classList.contains('disabled')) {
                    return;
                }
                
                // Don't play for anchor links that just scroll
                if (this.tagName === 'A') {
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        return;
                    }
                }
                
                setTimeout(playClickSound, 50);
            });
        });
    });
}

// Color Settings Management
function initColorSettings() {
  // Load saved colors from localStorage
  const savedBg = localStorage.getItem("pipboy-bg-color")
  const savedBorder = localStorage.getItem("pipboy-border-color")

  if (savedBg) {
    document.documentElement.style.setProperty("--pipboy-bg-custom", savedBg)
    const bgInput = document.getElementById("bg-color")
    const bgText = document.getElementById("bg-color-text")
    if (bgInput) bgInput.value = savedBg
    if (bgText) bgText.value = savedBg
  }

  if (savedBorder) {
    document.documentElement.style.setProperty("--pipboy-border-custom", savedBorder)
    const borderInput = document.getElementById("border-color")
    const borderText = document.getElementById("border-color-text")
    if (borderInput) borderInput.value = savedBorder
    if (borderText) borderText.value = savedBorder
  }

  // Settings button toggle
  const settingsBtn = document.getElementById("settings-btn")
  const settingsPanel = document.getElementById("settings-panel")

  if (settingsBtn && settingsPanel) {
    settingsBtn.addEventListener("click", () => {
      settingsPanel.classList.toggle("active")
    })
  }

  // Background color inputs
  const bgColorInput = document.getElementById("bg-color")
  const bgColorText = document.getElementById("bg-color-text")

  if (bgColorInput) {
    bgColorInput.addEventListener("input", (e) => {
      updateBackgroundColor(e.target.value)
      if (bgColorText) bgColorText.value = e.target.value
    })
  }

  if (bgColorText) {
    bgColorText.addEventListener("input", (e) => {
      updateBackgroundColor(e.target.value)
      if (bgColorInput) bgColorInput.value = e.target.value
    })
  }

  // Border color inputs
  const borderColorInput = document.getElementById("border-color")
  const borderColorText = document.getElementById("border-color-text")

  if (borderColorInput) {
    borderColorInput.addEventListener("input", (e) => {
      updateBorderColor(e.target.value)
      if (borderColorText) borderColorText.value = e.target.value
    })
  }

  if (borderColorText) {
    borderColorText.addEventListener("input", (e) => {
      updateBorderColor(e.target.value)
      if (borderColorInput) borderColorInput.value = e.target.value
    })
  }

  // Preset buttons
  const presetButtons = document.querySelectorAll(".preset-btn")
  presetButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const bg = this.getAttribute("data-bg")
      const border = this.getAttribute("data-border")

      updateBackgroundColor(bg)
      updateBorderColor(border)

      if (bgColorInput) bgColorInput.value = bg
      if (bgColorText) bgColorText.value = bg
      if (borderColorInput) borderColorInput.value = border
      if (borderColorText) borderColorText.value = border
    })
  })
}

function updateBackgroundColor(color) {
  document.documentElement.style.setProperty("--pipboy-bg-custom", color)
  localStorage.setItem("pipboy-bg-color", color)
}

function updateBorderColor(color) {
  document.documentElement.style.setProperty("--pipboy-border-custom", color)
  localStorage.setItem("pipboy-border-color", color)
}

// Navigation highlighting
function initNavigation() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    }
  })
}

function initScanWave() {
  const scanWave = document.createElement("div")
  scanWave.className = "scan-wave"
  document.body.appendChild(scanWave)
}
