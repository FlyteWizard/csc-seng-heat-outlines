import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";
import favicon from "./assets/favicon.png";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Heat Outlines",
  description: "UVic Engineering and Computer Science Heat Outlines.",
  author: "FlyteWizard",
  keywords: "uvic, bme, cive, csc, ece, engr, mech, seng, heat, outlines",
  viewport: "width=device-width,initial-scale=1",
  "theme-color": "#6d28d9",
});

export function links() {
  return [
    { rel: "icon", href: favicon },
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet preload",
      href: "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap",
    },
  ];
}

export default function App() {
  return (
    <html lang="en" dir="ltr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
