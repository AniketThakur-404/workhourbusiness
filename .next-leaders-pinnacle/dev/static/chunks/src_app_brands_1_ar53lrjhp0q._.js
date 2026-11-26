(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/brands/BrandNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanyWordmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/brands/CompanyWordmark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/brands/CompanySite.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function BrandNavigation({ slug, name, currentPath, catalog, serviceLinks, sectionLinks }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [catalogOpen, setCatalogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const catalogToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoverTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const splitCatalog = slug === "leaders-pinnacle";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandNavigation.useEffect": ()=>({
                "BrandNavigation.useEffect": ()=>clearTimeout(hoverTimer.current ?? undefined)
            })["BrandNavigation.useEffect"]
    }["BrandNavigation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandNavigation.useEffect": ()=>{
            if (!open && !catalogOpen) return;
            function dismissOutside(event) {
                if (event.target instanceof Node && !header.current?.contains(event.target)) {
                    setOpen(false);
                    setCatalogOpen(null);
                }
            }
            function dismissHover(event) {
                if (event.key === "Escape" && !header.current?.contains(document.activeElement)) {
                    setCatalogOpen(null);
                    setOpen(false);
                }
            }
            document.addEventListener("pointerdown", dismissOutside);
            document.addEventListener("keydown", dismissHover);
            return ({
                "BrandNavigation.useEffect": ()=>{
                    document.removeEventListener("pointerdown", dismissOutside);
                    document.removeEventListener("keydown", dismissHover);
                }
            })["BrandNavigation.useEffect"];
        }
    }["BrandNavigation.useEffect"], [
        open,
        catalogOpen
    ]);
    function closeMenu() {
        clearTimeout(hoverTimer.current ?? undefined);
        setOpen(false);
        setCatalogOpen(null);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
        ref: header,
        onKeyDown: (event)=>{
            if (event.key !== "Escape") return;
            if (catalogOpen) {
                clearTimeout(hoverTimer.current ?? undefined);
                setCatalogOpen(null);
                catalogToggle.current?.focus();
            } else if (open) {
                closeMenu();
                menuButton.current?.focus();
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerInner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                    href: "/",
                    "aria-label": `${name} home`,
                    onClick: closeMenu,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanyWordmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        slug: slug,
                        name: name
                    }, void 0, false, {
                        fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    ref: menuButton,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuToggle,
                    type: "button",
                    "aria-controls": "company-navigation",
                    "aria-expanded": open,
                    onClick: ()=>open ? closeMenu() : setOpen(true),
                    children: open ? "Close" : "Menu"
                }, void 0, false, {
                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigation,
                    "data-open": open,
                    id: "company-navigation",
                    "aria-label": `${name} navigation`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            "aria-current": currentPath === "/" ? "page" : undefined,
                            onClick: closeMenu,
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about/",
                            "aria-current": currentPath === "/about/" ? "page" : undefined,
                            onClick: closeMenu,
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].catalogItem,
                            "data-split": splitCatalog,
                            children: [
                                splitCatalog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].catalogLink,
                                    href: catalog.href,
                                    "aria-current": currentPath === catalog.href ? "page" : undefined,
                                    onClick: closeMenu,
                                    children: catalog.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                                    open: catalogOpen !== null,
                                    onPointerEnter: (event)=>{
                                        clearTimeout(hoverTimer.current ?? undefined);
                                        if (event.pointerType === "mouse" && window.matchMedia("(min-width: 981px)").matches) {
                                            setCatalogOpen((current)=>current ?? "hover");
                                        }
                                    },
                                    onPointerLeave: (event)=>{
                                        if (event.pointerType !== "mouse") return;
                                        const dropdown = event.currentTarget;
                                        hoverTimer.current = setTimeout(()=>{
                                            if (!dropdown.contains(document.activeElement)) {
                                                setCatalogOpen((current)=>current === "hover" ? null : current);
                                            }
                                        }, 140);
                                    },
                                    onBlur: (event)=>{
                                        if (!event.currentTarget.contains(event.relatedTarget) && !event.currentTarget.matches(":hover")) {
                                            setCatalogOpen(null);
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            ref: catalogToggle,
                                            "aria-label": splitCatalog ? "Individual services" : undefined,
                                            "aria-controls": "company-catalog-links",
                                            "aria-expanded": catalogOpen !== null,
                                            onClick: (event)=>{
                                                event.preventDefault();
                                                clearTimeout(hoverTimer.current ?? undefined);
                                                const keyboard = event.detail === 0;
                                                setCatalogOpen((current)=>current === "activation" || keyboard && current ? null : "activation");
                                            },
                                            children: !splitCatalog && catalog.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "company-catalog-links",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownLinks,
                                            "data-columns": !splitCatalog && serviceLinks.length > 6,
                                            children: [
                                                !splitCatalog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: catalog.href,
                                                    onClick: closeMenu,
                                                    children: [
                                                        "All ",
                                                        catalog.label.toLowerCase()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                serviceLinks.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: href,
                                                        "aria-current": currentPath === href ? "page" : undefined,
                                                        onClick: closeMenu,
                                                        children: label
                                                    }, href, false, {
                                                        fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        sectionLinks.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                "aria-current": currentPath === href ? "page" : undefined,
                                onClick: closeMenu,
                                children: label
                            }, href, false, {
                                fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: `contact-button ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerContact}`,
                            href: "/contact/",
                            onClick: closeMenu,
                            children: slug === "leaders-pinnacle" ? "Plan an Event" : "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/brands/BrandNavigation.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(BrandNavigation, "TZTZaDkfKx01X/K31OfCeIX9md8=");
_c = BrandNavigation;
var _c;
__turbopack_context__.k.register(_c, "BrandNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/brands/CompanySite.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "CompanySite-module__BDjiWG__actions",
  "bannerActions": "CompanySite-module__BDjiWG__bannerActions",
  "bannerLink": "CompanySite-module__BDjiWG__bannerLink",
  "bullets": "CompanySite-module__BDjiWG__bullets",
  "card": "CompanySite-module__BDjiWG__card",
  "cardPhoto": "CompanySite-module__BDjiWG__cardPhoto",
  "cards": "CompanySite-module__BDjiWG__cards",
  "catalogItem": "CompanySite-module__BDjiWG__catalogItem",
  "catalogLink": "CompanySite-module__BDjiWG__catalogLink",
  "companyBackground": "CompanySite-module__BDjiWG__companyBackground",
  "contact": "CompanySite-module__BDjiWG__contact",
  "content": "CompanySite-module__BDjiWG__content",
  "dropdown": "CompanySite-module__BDjiWG__dropdown",
  "dropdownLinks": "CompanySite-module__BDjiWG__dropdownLinks",
  "feature": "CompanySite-module__BDjiWG__feature",
  "featureFigure": "CompanySite-module__BDjiWG__featureFigure",
  "featurePhoto": "CompanySite-module__BDjiWG__featurePhoto",
  "footer": "CompanySite-module__BDjiWG__footer",
  "footerInner": "CompanySite-module__BDjiWG__footerInner",
  "header": "CompanySite-module__BDjiWG__header",
  "headerContact": "CompanySite-module__BDjiWG__headerContact",
  "headerInner": "CompanySite-module__BDjiWG__headerInner",
  "hero": "CompanySite-module__BDjiWG__hero",
  "heroCopy": "CompanySite-module__BDjiWG__heroCopy",
  "logo": "CompanySite-module__BDjiWG__logo",
  "mark": "CompanySite-module__BDjiWG__mark",
  "marketRegion": "CompanySite-module__BDjiWG__marketRegion",
  "marketsGrid": "CompanySite-module__BDjiWG__marketsGrid",
  "marketsHeader": "CompanySite-module__BDjiWG__marketsHeader",
  "menuToggle": "CompanySite-module__BDjiWG__menuToggle",
  "navigation": "CompanySite-module__BDjiWG__navigation",
  "overviewLink": "CompanySite-module__BDjiWG__overviewLink",
  "planningMarkets": "CompanySite-module__BDjiWG__planningMarkets",
  "points": "CompanySite-module__BDjiWG__points",
  "profileIndex": "CompanySite-module__BDjiWG__profileIndex",
  "scopeNote": "CompanySite-module__BDjiWG__scopeNote",
  "section": "CompanySite-module__BDjiWG__section",
  "sectionCopy": "CompanySite-module__BDjiWG__sectionCopy",
  "sectionGroups": "CompanySite-module__BDjiWG__sectionGroups",
  "sectionIntro": "CompanySite-module__BDjiWG__sectionIntro",
  "serviceCard": "CompanySite-module__BDjiWG__serviceCard",
  "site": "CompanySite-module__BDjiWG__site",
  "skipLink": "CompanySite-module__BDjiWG__skipLink",
  "statItem": "CompanySite-module__BDjiWG__statItem",
  "statsStrip": "CompanySite-module__BDjiWG__statsStrip",
  "subtitle": "CompanySite-module__BDjiWG__subtitle",
  "websiteAddress": "CompanySite-module__BDjiWG__websiteAddress",
});
}),
"[project]/src/app/brands/CompanyWordmark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanyWordmark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/brands/CompanySite.module.css [app-client] (css module)");
;
;
;
function CompanyWordmark({ slug, name }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mark,
                src: `/company-logos/marks/${slug}.webp`,
                width: 72,
                height: 72,
                alt: ""
            }, void 0, false, {
                fileName: "[project]/src/app/brands/CompanyWordmark.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: name
            }, void 0, false, {
                fileName: "[project]/src/app/brands/CompanyWordmark.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/brands/CompanyWordmark.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = CompanyWordmark;
var _c;
__turbopack_context__.k.register(_c, "CompanyWordmark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_brands_1_ar53lrjhp0q._.js.map