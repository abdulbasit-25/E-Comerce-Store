import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { M as ChevronsUpDown, R as ArrowUp, V as ArrowDown } from "../_libs/lucide-react.mjs";
import { a as useLegacyTable, i as getSortedRowModel, n as getFilteredRowModel, o as flexRender, r as getPaginationRowModel, t as getCoreRowModel } from "../_libs/@tanstack/react-table+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-table-iJ0UABVE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "B:/flow/DEV1/Projects/E-Comerce Store/src/components/admin/data-table.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			value: globalFilter,
			onChange: (e) => setGlobalFilter(e.target.value),
			placeholder: searchPlaceholder,
			className: "mb-4 w-full max-w-xs border border-border bg-background px-3 py-2 text-sm outline-none focus:border-olive"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "overflow-x-auto border border-border",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
				className: "w-full border-collapse text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
					className: "bg-surface-2",
					children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: headerGroup.headers.map((header) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
						className: "border-b border-border px-3 py-2 text-left font-medium",
						children: header.isPlaceholder ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							className: "label-caps flex items-center gap-1 text-muted-foreground hover:text-foreground",
							onClick: header.column.getToggleSortingHandler(),
							type: "button",
							children: [flexRender(header.column.columnDef.header, header.getContext()), header.column.getCanSort() && ({
								asc: /* @__PURE__ */ (void 0)(ArrowUp, { className: "h-3 w-3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 65,
									columnNumber: 35
								}, this),
								desc: /* @__PURE__ */ (void 0)(ArrowDown, { className: "h-3 w-3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 65,
									columnNumber: 74
								}, this)
							}[header.column.getIsSorted()] ?? /* @__PURE__ */ (void 0)(ChevronsUpDown, { className: "h-3 w-3 opacity-40" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 32
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 23
						}, this)
					}, header.id, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 19
					}, this)) }, headerGroup.id, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
					className: "border-b border-border last:border-0 hover:bg-surface",
					children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
						className: "px-3 py-2.5 align-middle",
						children: flexRender(cell.column.columnDef.cell, cell.getContext())
					}, cell.id, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 19
					}, this))
				}, row.id, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 15
				}, this)) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 9
			}, this), table.getRowModel().rows.length === 0 && /* @__PURE__ */ (void 0)("div", {
				className: "px-6 py-16 text-center",
				children: [/* @__PURE__ */ (void 0)("p", {
					className: "font-display text-2xl",
					children: emptyTitle
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: emptyBody
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-3 flex items-center justify-between text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
				"Page ",
				table.getState().pagination.pageIndex + 1,
				" of ",
				Math.max(1, table.getPageCount()),
				" ·",
				" ",
				table.getFilteredRowModel().rows.length,
				" records"
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => table.previousPage(),
					disabled: !table.getCanPreviousPage(),
					className: "border border-border px-3 py-1 disabled:opacity-40",
					children: "Prev"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => table.nextPage(),
					disabled: !table.getCanNextPage(),
					className: "border border-border px-3 py-1 disabled:opacity-40",
					children: "Next"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 96,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
//#endregion
export { DataTable as t };
