"use client";

import { useEffect } from "react";

const META_PIXEL_ID = "3580634968754068";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export function MetaPixel() {
  useEffect(() => {
    if (!window.fbq) {
      const fbq = function (...args: unknown[]) {
        if (fbq.callMethod) fbq.callMethod(...args);
        else fbq.queue.push(args);
      } as Fbq;

      fbq.queue = [];
      fbq.loaded = true;
      fbq.version = "2.0";
      window.fbq = fbq;
      window._fbq = fbq;

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);

      fbq("init", META_PIXEL_ID);
    }

    window.fbq?.("track", "PageView");

    const trackClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-meta-event]") : null;
      if (!target) return;

      const eventName = target.dataset.metaEvent;
      if (!eventName) return;

      const parameters = {
        content_name: target.dataset.metaContent ?? target.textContent?.trim().slice(0, 100),
        destination: target instanceof HTMLAnchorElement ? target.href : undefined,
      };

      if (target.dataset.metaStandard === "Lead") window.fbq?.("track", "Lead", parameters);
      window.fbq?.("trackCustom", eventName, parameters);
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
