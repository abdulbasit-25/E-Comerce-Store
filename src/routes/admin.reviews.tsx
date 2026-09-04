import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import type { AdminReview, ReviewStatus } from "@/lib/review-server";
import { getReviews, moderateReview } from "@/lib/review-server";

export const Route = createFileRoute("/admin/reviews")({ component: AdminReviews });
const statuses: ReviewStatus[] = ["Pending", "Published", "Flagged", "Rejected"];

function AdminReviews() {
  const queryClient = useQueryClient();
  const [selected, setSelected] = useState<AdminReview | null>(null);
  const {
    data: reviews = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["admin-reviews"],
    queryFn: () => getReviews({ data: { token: localStorage.getItem("auth-token") ?? "" } }),
  });
  const columns = useMemo(
    () => [
      { accessorKey: "productName", header: "Product" },
      { accessorKey: "customerName", header: "Customer" },
      { accessorKey: "rating", header: "Rating" },
      { accessorKey: "title", header: "Review" },
      { accessorKey: "status", header: "Status" },
      {
        id: "actions",
        header: "",
        cell: ({ row }: { row: { original: AdminReview } }) => (
          <button className="label-caps text-olive" onClick={() => setSelected(row.original)}>
            Moderate
          </button>
        ),
      },
    ],
    [],
  );
  const save = async (status: ReviewStatus, featured: boolean) => {
    if (!selected) return;
    const result = await moderateReview({
      data: { token: localStorage.getItem("auth-token") ?? "", id: selected.id, status, featured },
    });
    if (!result.success) toast.error(result.message);
    else {
      toast.success("Review moderated");
      setSelected(null);
      void queryClient.invalidateQueries({ queryKey: ["admin-reviews"] });
    }
  };
  return (
    <AdminShell title="Reviews">
      {isPending ? <p className="py-12 text-muted-foreground">Loading reviews...</p> : null}
      {isError ? (
        <p role="alert" className="py-12 text-destructive">
          Unable to load reviews.
        </p>
      ) : null}
      {!isPending && !isError ? (
        <DataTable
          data={reviews}
          columns={columns}
          searchPlaceholder="Search reviews…"
          emptyTitle="No reviews"
          emptyBody="Customer reviews will appear here for moderation."
        />
      ) : null}
      {selected ? (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-foreground/30"
          onClick={() => setSelected(null)}
        >
          <aside
            className="h-full w-full max-w-lg bg-background p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between">
              <h2 className="font-display text-3xl">Moderate review</h2>
              <button
                onClick={() => setSelected(null)}
                className="label-caps text-muted-foreground"
              >
                Close
              </button>
            </div>
            <p className="mt-8 text-sm">{selected.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{selected.body}</p>
            <div className="mt-8 grid grid-cols-2 gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => void save(status, status === "Published" && selected.featured)}
                  className="border border-border px-3 py-2 text-sm"
                >
                  {status}
                </button>
              ))}
            </div>
            <button
              onClick={() => void save("Published", true)}
              className="mt-3 w-full bg-primary px-3 py-2 text-sm text-primary-foreground"
            >
              Publish and feature
            </button>
          </aside>
        </div>
      ) : null}
    </AdminShell>
  );
}
