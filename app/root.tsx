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
  description: "UVic CSC and SENG Heat Outlines.",
  author: "FlyteWizard",
  keywords: "uvic, csc, seng, heat, outlines",
  viewport: "width=device-width,initial-scale=1",
  "theme-color": "#002A57",
});

export function links() {
  return [
    { rel: "icon", href: favicon },
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
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
