import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Sorrel Ops — Admin" },
      { name: "description", content: "Internal Sorrel operations dashboard." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Sorrel Ops" },
      { property: "og:description", content: "Internal operations dashboard." },
    ],
  }),
  component: () => <Outlet />,
});
