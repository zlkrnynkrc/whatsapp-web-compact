export function createMediaButton(): HTMLElement {
  const button = document.createElement("button");
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-disabled", "false");
  button.setAttribute("role", "button");
  button.setAttribute("tabindex", "0");
  button.className =
    "x1afcbsf x1heor9g x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1y1aw1k xf159sx xwib8y2 xmzvs34 xxk0z11 xvy4d1p x78zum5 xl56j7k x6s0dn4 xtnn1bt x9v5kkp xmw7ebm xrdum7p";
  button.setAttribute("data-tab", "2");
  button.setAttribute("aria-label", "Media Dosyası Gizle/Göster");

  const span = document.createElement("span");
  span.setAttribute("aria-hidden", "true");
  span.setAttribute("data-icon", "media-outline");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("height", "24");
  svg.setAttribute("width", "24");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.setAttribute("fill", "none");

  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = "media-outline";
  svg.appendChild(title);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("clip-rule", "evenodd");
  path.setAttribute(
    "d",
    "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H19V19H5ZM8 9.5C8 8.67 7.33 8 6.5 8C5.67 8 5 8.67 5 9.5C5 10.33 5.67 11 6.5 11C7.33 11 8 10.33 8 9.5ZM11.03 11.38L9.5 9.5L6.5 14H17.5L14 9L11.03 11.38Z"
  );
  path.setAttribute("fill", "currentColor");
  svg.appendChild(path);

  span.appendChild(svg);
  button.appendChild(span);

  button.addEventListener("click", toggleMediaFiles);
  return button;
}

function toggleMediaFiles() {
  const profileButton = document.querySelector('div[title="Profile"] button');
  if (profileButton) {
    (profileButton as HTMLElement).click();
    setTimeout(() => {
      const mediaSection = document.querySelector("div._a3gq._a3gr");
      if (mediaSection) {
        const tdiv = mediaSection as HTMLElement;
        const isHidden = tdiv.style.display === "none";
        tdiv.style.display = isHidden ? "" : "none";
      }
    }, 100);
  }
}
