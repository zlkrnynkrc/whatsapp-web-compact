interface IStyleAdjustments {
  width?: string;
  left?: string;
  maxWidth?: string;
  margin?: string;
  paddingRight?: string;
}

export function createContactButton(): HTMLElement {
  const button = document.createElement("button");
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-disabled", "false");
  button.setAttribute("role", "button");
  button.setAttribute("tabindex", "0");
  button.className =
    "x1afcbsf x1heor9g x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1y1aw1k xf159sx xwib8y2 xmzvs34 xxk0z11 xvy4d1p x78zum5 xl56j7k x6s0dn4 xtnn1bt x9v5kkp xmw7ebm xrdum7p";
  button.setAttribute("data-tab", "2");
  button.setAttribute("aria-label", "Kişi Listesi Gizle/Göster");

  const icon = createPeopleIcon();
  button.appendChild(icon);
  button.addEventListener("click", toggleContactList);
  return button;
}

function createPeopleIcon(): HTMLElement {
  const span = document.createElement("span");
  span.setAttribute("aria-hidden", "true");
  span.setAttribute("data-icon", "people-outline");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("height", "24");
  svg.setAttribute("width", "24");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.setAttribute("fill", "none");

  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = "people-outline";
  svg.appendChild(title);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M9 13.75C6.66 13.75 2 14.92 2 17.25V19H16V17.25C16 14.92 11.34 13.75 9 13.75ZM4.34 17C5.18 16.42 7.21 15.75 9 15.75C10.79 15.75 12.82 16.42 13.66 17H4.34ZM9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM16.04 13.81C17.2 14.65 18 15.77 18 17.25V19H22V17.25C22 15.23 18.5 14.08 16.04 13.81ZM15 12C16.93 12 18.5 10.43 18.5 8.5C18.5 6.57 16.93 5 15 5C14.46 5 13.96 5.13 13.5 5.35C14.13 6.24 14.5 7.33 14.5 8.5C14.5 9.67 14.13 10.76 13.5 11.65C13.96 11.87 14.46 12 15 12Z"
  );
  path.setAttribute("fill", "currentColor");
  svg.appendChild(path);

  span.appendChild(svg);
  return span;
}

function toggleContactList() {
  const sidebar = document.querySelector<HTMLElement>(
    "div._aigw.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xa1v5g2.x1plvlek.xryxfnj.x14bqcqg.x18pi947"
  );
  const mainDiv = document.querySelector<HTMLElement>(
    "div._aiwn._aiwm.app-wrapper-web.font-fix._ap4q"
  );

  const isHidden = sidebar?.style.display === "none";

  // Toggle sidebar visibility
  if (sidebar) {
    sidebar.style.display = isHidden ? "" : "none";
  }

  // Adjust main container overflow
  if (mainDiv) {
    mainDiv.style.overflowX = isHidden ? "auto" : "hidden";
  }

  // Adjust UI panels
  adjustPanels(!isHidden);
}

function adjustPanels(isSidebarHidden: boolean) {
  const uploadPanel = document.querySelector<HTMLElement>(
    "div.x9f619.x1n2onr6.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.xyyilfv.x1iyjqo2.xa1v5g2"
  );
  const chatDiv = document.querySelector<HTMLElement>(
    "div.x9f619.x1n2onr6.xyw6214.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.xyyilfv.x1iyjqo2.xpilrb4.x1t7ytsu.x1m2ixmg"
  );

  // Adjust upload panel
  if (uploadPanel) {
    applyStyles(
      uploadPanel,
      isSidebarHidden
        ? {
            width: "100%",
            left: "0",
            maxWidth: "unset",
          }
        : {
            width: "",
            left: "",
            maxWidth: "",
          }
    );
  }

  // Adjust chat div with responsive behavior
  if (chatDiv) {
    applyStyles(
      chatDiv,
      isSidebarHidden
        ? {
            width: "100%",
            left: "0",
            maxWidth: "100vw", // Use viewport width for full responsiveness
            margin: "0", // left the chat div
            paddingRight: "40px",
          }
        : {
            width: "",
            left: "",
            maxWidth: "",
            margin: "",
            paddingRight: "",
          }
    );

    // Add responsive behavior
    setupChatResponsiveBehavior(chatDiv, isSidebarHidden);
  }
}

function applyStyles(element: HTMLElement, styles: IStyleAdjustments) {
  Object.assign(element.style, styles);
}

function setupChatResponsiveBehavior(
  chatDiv: HTMLElement,
  isSidebarHidden: boolean
) {
  // Add responsive behavior for window resize
  const handleResize = () => {
    if (isSidebarHidden) {
      const viewportWidth = window.innerWidth;
      const maxWidth = Math.min(viewportWidth, 1200); // Adjust max width as needed
      chatDiv.style.maxWidth = `${maxWidth}px`;
    }
  };

  // Set initial size
  handleResize();

  // Add event listener for window resize
  if (isSidebarHidden) {
    window.addEventListener("resize", handleResize);
  } else {
    window.removeEventListener("resize", handleResize);
  }
}
