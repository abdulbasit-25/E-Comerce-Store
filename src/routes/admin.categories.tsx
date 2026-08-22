import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AdminShell } from "@/components/admin/admin-shell";
import { categories as seedCategories, type Category } from "@/lib/mock-data";
import { useCatalog } from "@/lib/store";

export const Route = createFileRoute("/admin/categories")({
  component: AdminCategories,
});

function AdminCategories() {
  const products = useCatalog((s) => s.products);
  const [list, setList] = useState<Category[]>(seedCategories);
  const [draft, setDraft] = useState({ name: "", description: "" });

  const add = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!draft.name.trim()) {
      toast.error("Category needs a name");
      return;
    }
    const category: Category = {
      id: `c-${Date.now()}`,
      name: draft.name.trim(),
      slug: draft.name
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-"),
      description: draft.description.trim(),
    };
    setList((prev) => [...prev, category]);
    setDraft({ name: "", description: "" });
    toast.success(`${category.name} added`);
  };

  return (
    <AdminShell title="Categories">
      <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
        <div className="border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-surface-2">
              <tr>
                <th className="label-caps px-3 py-2 text-left text-muted-foreground">Name</th>
                <th className="label-caps px-3 py-2 text-left text-muted-foreground">Slug</th>
                <th className="label-caps px-3 py-2 text-left text-muted-foreground">Products</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {list.map((category) => (
                <tr key={category.id} className="border-t border-border">
                  <td className="px-3 py-2.5">
                    <p>{category.name}</p>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </td>
                  <td className="px-3 py-2.5 text-muted-foreground">{category.slug}</td>
                  <td className="px-3 py-2.5">
                    {products.filter((p) => p.categorySlug === category.slug).length}
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <button
                      onClick={() => {
                        setList((prev) => prev.filter((c) => c.id !== category.id));
                        toast.success(`${category.name} removed`);
                      }}
                      className="label-caps text-muted-foreground hover:text-destructive"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {list.length === 0 && (
            <div className="px-6 py-16 text-center">
              <p className="font-display text-2xl">No categories</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Add one to organise the catalogue.
              </p>
            </div>
          )}
        </div>

        <form onSubmit={add} className="h-fit space-y-4 border border-border bg-card p-4">
          <h2 className="label-caps text-muted-foreground">New category</h2>
          <input
            value={draft.name}
            onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
            placeholder="Name"
            className="w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
          />
          <textarea
            value={draft.description}
            onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))}
            placeholder="Short description"
            rows={3}
            className="w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
          />
          <button
            type="submit"
            className="label-caps w-full bg-primary px-4 py-3 text-primary-foreground"
          >
            Add category
          </button>
        </form>
      </div>
    </AdminShell>
  );
}
