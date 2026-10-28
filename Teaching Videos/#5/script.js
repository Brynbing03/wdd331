
// Teaching Video #5
// Logical Properties and Writing Modes

// Helper to update active buttons
function setActiveButton(buttons, selectedButton) {
    buttons.forEach((button) => {
      const isActive = button === selectedButton;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }
  
  // SECTION 2: LTR vs RTL
  
  const ltrBtn = document.getElementById("ltrBtn");
  const rtlBtn = document.getElementById("rtlBtn");
  const physicalCard = document.getElementById("physicalCard");
  const logicalCard = document.getElementById("logicalCard");
  const directionStatus = document.getElementById("directionStatus");
  
  const directionButtons = [ltrBtn, rtlBtn];
  
  function changeDirection(direction) {
    physicalCard.dir = direction;
    logicalCard.dir = direction;
  
    directionStatus.textContent =
      `Current direction: ${direction.toUpperCase()}`;
  
    setActiveButton(
      directionButtons,
      direction === "ltr" ? ltrBtn : rtlBtn
    );
  }
  
  ltrBtn.addEventListener("click", () => {
    changeDirection("ltr");
  });
  
  rtlBtn.addEventListener("click", () => {
    changeDirection("rtl");
  });
  
  // SECTION 3: Language switcher
  
  const englishBtn = document.getElementById("englishBtn");
  const arabicBtn = document.getElementById("arabicBtn");
  
  const languageCard = document.getElementById("languageCard");
  const languageTag = document.getElementById("languageTag");
  const languageTitle = document.getElementById("languageTitle");
  const languageText = document.getElementById("languageText");
  const languageFooter = document.getElementById("languageFooter");
  
  const languageButtons = [englishBtn, arabicBtn];
  
  function changeLanguage(language) {
    if (language === "ar") {
      languageCard.lang = "ar";
      languageCard.dir = "rtl";
  
      languageTag.textContent = "مرحباً!";
      languageTitle.textContent = "مرحباً بك في موقعي!";
      languageText.textContent =
        "يمكن لهذه البطاقة تغيير اتجاهها دون الحاجة إلى تصميم CSS مختلف تماماً.";
      languageFooter.textContent = "صُنع باستخدام خصائص CSS المنطقية";
  
      setActiveButton(languageButtons, arabicBtn);
    } else {
      languageCard.lang = "en";
      languageCard.dir = "ltr";
  
      languageTag.textContent = "Hello!";
      languageTitle.textContent = "Welcome to my website!";
      languageText.textContent =
        "This card can change its direction without needing a completely different CSS layout.";
      languageFooter.textContent = "Made with logical CSS";
  
      setActiveButton(languageButtons, englishBtn);
    }
  }
  
  englishBtn.addEventListener("click", () => {
    changeLanguage("en");
  });
  
  arabicBtn.addEventListener("click", () => {
    changeLanguage("ar");
  });
  
  // SECTION 4: Writing modes
  
  const horizontalBtn = document.getElementById("horizontalBtn");
  const verticalRlBtn = document.getElementById("verticalRlBtn");
  const verticalLrBtn = document.getElementById("verticalLrBtn");
  
  const writingSample = document.getElementById("writingSample");
  const writingStatus = document.getElementById("writingStatus");
  
  const writingButtons = [
    horizontalBtn,
    verticalRlBtn,
    verticalLrBtn
  ];
  
  function changeWritingMode(mode, selectedButton) {
    writingSample.style.writingMode = mode;
    writingStatus.textContent = `writing-mode: ${mode};`;
  
    setActiveButton(writingButtons, selectedButton);
  }
  
  horizontalBtn.addEventListener("click", () => {
    changeWritingMode("horizontal-tb", horizontalBtn);
  });
  
  verticalRlBtn.addEventListener("click", () => {
    changeWritingMode("vertical-rl", verticalRlBtn);
  });
  
  verticalLrBtn.addEventListener("click", () => {
    changeWritingMode("vertical-lr", verticalLrBtn);
  });
  