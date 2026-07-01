import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Anand Studio — Professional Photography in Rohtak" },
      {
        name: "description",
        content:
          "Anand Digital Studio captures weddings, pre-weddings, birthdays and events with cinematic precision in Rohtak. Book your session today.",
      },
      {
        name: "keywords",
        content:
          "wedding photographer Rohtak, pre-wedding shoot Rohtak, event photography Rohtak, birthday photography, portrait photographer Rohtak, Anand Digital Studio",
      },
      { name: "author", content: "Anand Digital Studio" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0c0f0d" },
      { name: "X-Content-Type-Options", content: "nosniff" },
      {
        "http-equiv": "Content-Security-Policy",
        content:
          "default-src 'self' https: data: blob:; img-src 'self' https: data: blob:; style-src 'self' https: 'unsafe-inline'; script-src 'self' https: 'unsafe-inline' 'unsafe-eval'; font-src 'self' https: data:; connect-src 'self' https:; frame-src https://www.google.com https://maps.google.com https://res.cloudinary.com;",
      },
      { property: "og:title", content: "Anand Studio — Professional Photography in Rohtak" },
      {
        property: "og:description",
        content:
          "Cinematic wedding, pre-wedding, and event photography in Rohtak. Explore our curated portfolio and book your session.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Anand Studio" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Anand Studio — Professional Photography in Rohtak" },
      { name: "twitter:description", content: "Weddings, pre-weddings, birthdays and events captured with cinematic precision." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://res.cloudinary.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "image",
        href: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80",
      },
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
