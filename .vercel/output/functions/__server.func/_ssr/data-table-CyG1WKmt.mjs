import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { M as ChevronsUpDown, R as ArrowUp, V as ArrowDown } from "../_libs/lucide-react.mjs";
import { a as useLegacyTable, i as getSortedRowModel, n as getFilteredRowModel, o as flexRender, r as getPaginationRowModel, t as getCoreRowModel } from "../_libs/@tanstack/react-table+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-table-CyG1WKmt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DataTable({ data, columns, searchPlaceholder = "Search…", emptyTitle = "Nothing to show", emptyBody = "Records will appear here once they exist." }) {
	const [globalFilter, setGlobalFilter] = (0, import_react.useState)("");
	const table = useLegacyTable({
		data,
		columns,
		state: { globalFilter },
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: { pagination: {
			pageIndex: 0,
			pageSize: 8
		} }
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value: globalFilter,
			onChange: (e) => setGlobalFilter(e.target.value),
			placeholder: searchPlaceholder,
			className: "mb-4 w-full max-w-xs border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-x-auto border border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full border-collapse text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-surface-2",
					children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: headerGroup.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b border-border px-3 py-2 text-left font-medium",
						children: header.isPlaceholder ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "label-caps flex items-center gap-1 text-muted-foreground hover:text-foreground",
							onClick: header.column.getToggleSortingHandler(),
							type: "button",
							children: [flexRender(header.column.columnDef.header, header.getContext()), header.column.getCanSort() && ({
								asc: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-3 w-3" }),
								desc: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-3 w-3" })
							}[header.column.getIsSorted()] ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "h-3 w-3 opacity-40" }))]
						})
					}, header.id)) }, headerGroup.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "border-b border-border last:border-0 hover:bg-surface",
					children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-3 py-2.5 align-middle",
						children: flexRender(cell.column.columnDef.cell, cell.getContext())
					}, cell.id))
				}, row.id)) })]
			}), table.getRowModel().rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 py-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: emptyTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: emptyBody
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex items-center justify-between text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"Page ",
				table.getState().pagination.pageIndex + 1,
				" of ",
				Math.max(1, table.getPageCount()),
				" ·",
				" ",
				table.getFilteredRowModel().rows.length,
				" records"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => table.previousPage(),
					disabled: !table.getCanPreviousPage(),
					className: "border border-border px-3 py-1 disabled:opacity-40",
					children: "Prev"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => table.nextPage(),
					disabled: !table.getCanNextPage(),
					className: "border border-border px-3 py-1 disabled:opacity-40",
					children: "Next"
				})]
			})]
		})
	] });
}
//#endregion
export { DataTable as t };
