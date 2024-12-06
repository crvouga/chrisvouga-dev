// @ts-check
class ToasterElement extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.className = "toast-container";

    const style = document.createElement("style");
    style.textContent = `
            .toast-container {
                position: fixed;
                top: 1rem;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                z-index: 1000;
            }

            .toast {
                background-color: #333;
                color: white;
                padding: 1rem 2rem;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                transform: translateY(-20px);
                animation: slide-in 0.3s forwards, slide-out 0.3s 2.5s forwards;
            }

            @keyframes slide-in {
                from {
                    transform: translateY(-20px);
                }

                to {
                    transform: translateY(0);
                }
            }

            @keyframes slide-out {
                from {
                    transform: translateY(0);
                }

                to {
                    transform: translateY(calc(-100% + -20px));
                }
            }
        `;

    shadow.appendChild(style);
    shadow.appendChild(container);

    this.container = container;

    this.currentToast = null;
  }

  /**
   * Show a toast message, ensuring only one toast is displayed at a time.
   * @param {string} message - The message to display in the toast.
   */
  async showToast(message) {
    if (typeof message !== "string") {
      throw new Error("Message must be a string");
    }

    if (this.currentToast) {
      this.currentToast.style.animation = "slide-out 0.3s forwards";
      await new Promise((resolve) => {
        if (this.currentToast) {
          this.currentToast.addEventListener("animationend", resolve, {
            once: true,
          });
        }
      });
      this.currentToast.remove();
      this.currentToast = null;
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    this.container.appendChild(toast);
    this.currentToast = toast;

    setTimeout(() => {
      if (this.currentToast === toast) {
        toast.style.animation = "slide-out 0.3s forwards";
        toast.addEventListener(
          "animationend",
          () => {
            if (this.currentToast === toast) {
              toast.remove();
              this.currentToast = null;
            }
          },
          { once: true }
        );
      }
    }, 2500);
  }
}

customElements.define("toaster-element", ToasterElement);
