import { createContactButton } from "./components/ContactButton";
import { createMediaButton } from "./components/MediaButton";

function init() {
  const observer = new MutationObserver(() => {
    var targetDiv = document.querySelector(
      "div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xyorhqc"
    );
    console.log(targetDiv?.outerHTML);
    if (targetDiv && !targetDiv.querySelector(".custom-buttons-container")) {
      const div = targetDiv as HTMLElement;
      injectButtons(div);
      console.log("Buttons injected");
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function injectButtons(targetDiv: HTMLElement) {
  const buttonContainer = document.createElement("div");
  buttonContainer.className =
    "custom-buttons-container _ajv7 x1n2onr6 x1okw0bk x5yr21d x14yjl9h xudhj91 x18nykt9 xww2gxu xlkovuz x16j0l1c xyklrzc x1lziwak x1anpbxc x18wx58x xo92w5m";

  const contactButton = createContactButton();
  //const mediaButton = createMediaButton();

  buttonContainer.prepend(contactButton);
  //buttonContainer.appendChild(mediaButton);
  targetDiv.appendChild(buttonContainer);
}

window.addEventListener("load", init);
