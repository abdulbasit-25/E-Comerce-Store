import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { categories, currency, type Product } from "@/lib/mock-data";
import { useCatalog } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/products")({
  component: AdminProducts,
});

const blank: Product = {
  id: "",
  name: "",
  slug: "",
  description: "",
  price: 0,
  image: "",
  categorySlug: "apparel",
  stock: 0,
  sku: "",
  isActive: true,
  rating: 0,
  createdAt: new Date().toISOString().slice(0, 10),
};

function AdminProducts() {
  const products = useCatalog((s) => s.products);
  const upsert = useCatalog((s) => s.upsert);
  const remove = useCatalog((s) => s.remove);
  const [editing, setEditing] = useState<Product | null>(null);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Product",
        cell: ({ row }: { row: { original: Product } }) => (
          <div className="flex items-center gap-3">
            {row.original.image ? (
              <img
                src={row.original.image}
                alt=""
                loading="lazy"
                className="h-9 w-9 shrink-0 object-cover"
              />
            ) : (
              <span className="h-9 w-9 shrink-0 bg-surface-2" />
            )}
            <span>{row.original.name}</span>
          </div>
        ),
      },
      { accessorKey: "sku", header: "SKU" },
      {
        accessorKey: "categorySlug",
        header: "Category",
        cell: ({ getValue }: { getValue: () => unknown }) =>
          categories.find((c) => c.slug === getValue())?.name ?? "—",
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ getValue }: { getValue: () => unknown }) => currency(Number(getValue())),
      },
      {
        accessorKey: "stock",
        header: "Stock",
        cell: ({ getValue }: { getValue: () => unknown }) => {
          const stock = Number(getValue());
          return (
            <span
              className={cn(
                stock === 0 && "text-destructive",
                stock > 0 && stock <= 5 && "text-olive",
              )}
            >
              {stock}
            </span>
          );
        },
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }: { row: { original: Product } }) => (
          <div className="flex gap-3">
            <button onClick={() => setEditing(row.original)} className="label-caps text-olive">
              Edit
            </button>
            <button
              onClick={() => {
                remove(row.original.id);
                toast.success(`${row.original.name} removed`);
              }}
              className="label-caps text-muted-foreground hover:text-destructive"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [remove],
  );

  const save = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    if (!name) {
      toast.error("Product needs a name");
      return;
    }
    const product: Product = {
      ...(editing ?? blank),
      id: editing?.id || `p-${Date.now()}`,
      name,
      slug: name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
      description: String(form.get("description") ?? ""),
      price: Number(form.get("price") ?? 0),
      stock: Number(form.get("stock") ?? 0),
      sku: String(form.get("sku") ?? ""),
      categorySlug: String(form.get("categorySlug") ?? "apparel"),
      image: String(form.get("image") ?? editing?.image ?? ""),
    };
    upsert(product);
    setEditing(null);
    toast.success(`${product.name} saved`);
  };

  return (
    <AdminShell title="Products">
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setEditing({ ...blank })}
          className="label-caps bg-primary px-4 py-2 text-primary-foreground"
        >
          New product
        </button>
      </div>

      <DataTable
        data={products}
        columns={columns}
        searchPlaceholder="Search catalogue…"
        emptyTitle="No products"
        emptyBody="Add your first product to start selling."
      />

      {editing && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-foreground/30 backdrop-blur-sm"
          onClick={() => setEditing(null)}
        >
          <form
            onSubmit={save}
            onClick={(e) => e.stopPropagation()}
            className="h-full w-full max-w-md space-y-4 overflow-y-auto bg-background p-6"
          >
            <h2 className="font-display text-3xl">{editing.id ? "Edit product" : "New product"}</h2>
            <Input label="Name" name="name" defaultValue={editing.name} />
            <Input label="SKU" name="sku" defaultValue={editing.sku} />
            <div>
              <label className="label-caps text-muted-foreground" htmlFor="categorySlug">
                Category
              </label>
              <select
                id="categorySlug"
                name="categorySlug"
                defaultValue={editing.categorySlug}
                className="mt-2 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Price"
                name="price"
                type="number"
                defaultValue={String(editing.price)}
              />
              <Input
                label="Stock"
                name="stock"
                type="number"
                defaultValue={String(editing.stock)}
              />
            </div>
            <Input label="Image URL" name="image" defaultValue={editing.image} />
            <div>
              <label className="label-caps text-muted-foreground" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                defaultValue={editing.description}
                className="mt-2 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="label-caps bg-primary px-5 py-3 text-primary-foreground"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditing(null)}
                className="label-caps border border-border px-5 py-3"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </AdminShell>
  );
}

function Input({
  label,
  name,
  type = "text",
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="label-caps text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="mt-2 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
      />
    </div>
  );
}
