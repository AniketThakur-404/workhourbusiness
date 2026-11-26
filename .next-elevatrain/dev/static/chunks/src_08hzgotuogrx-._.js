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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanyWordmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/brands/CompanyWordmark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/brands/CompanySite.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BrandNavigation({ slug, name, currentPath, catalog, serviceLinks, sectionLinks }) {
    _s();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const catalogMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const primary = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/about/",
            label: "About"
        }
    ];
    const contact = {
        href: "/contact/",
        label: slug === "leaders-pinnacle" ? "Plan an event" : "Contact us"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandNavigation.useEffect": ()=>{
            function closeCatalog(event) {
                const menu = catalogMenu.current;
                if (menu && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
            }
            const desktop = window.matchMedia("(min-width: 981px)");
            const closeSheet = {
                "BrandNavigation.useEffect.closeSheet": ()=>{
                    if (desktop.matches) setMobileOpen(false);
                }
            }["BrandNavigation.useEffect.closeSheet"];
            document.addEventListener("pointerdown", closeCatalog);
            desktop.addEventListener("change", closeSheet);
            return ({
                "BrandNavigation.useEffect": ()=>{
                    document.removeEventListener("pointerdown", closeCatalog);
                    desktop.removeEventListener("change", closeSheet);
                }
            })["BrandNavigation.useEffect"];
        }
    }["BrandNavigation.useEffect"], []);
    const current = (href)=>currentPath === href ? "page" : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerInner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                    href: "/",
                    "aria-label": `${name} home`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanyWordmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        slug: slug,
                        name: name
                    }, void 0, false, {
                        fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigation,
                    "aria-label": `${name} navigation`,
                    children: [
                        primary.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                "aria-current": current(href),
                                children: label
                            }, href, false, {
                                fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                lineNumber: 56,
                                columnNumber: 45
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                            ref: catalogMenu,
                            onKeyDown: (event)=>{
                                if (event.key !== "Escape" || !event.currentTarget.open) return;
                                event.currentTarget.open = false;
                                event.currentTarget.querySelector("summary")?.focus();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    children: catalog.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownLinks,
                                    "data-columns": serviceLinks.length > 6,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: catalog.href,
                                            "aria-current": current(catalog.href),
                                            onClick: ()=>{
                                                if (catalogMenu.current) catalogMenu.current.open = false;
                                            },
                                            children: [
                                                "All ",
                                                catalog.label.toLowerCase()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        serviceLinks.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: href,
                                                "aria-current": current(href),
                                                onClick: ()=>{
                                                    if (catalogMenu.current) catalogMenu.current.open = false;
                                                },
                                                children: label
                                            }, href, false, {
                                                fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        sectionLinks.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                "aria-current": current(href),
                                children: label
                            }, href, false, {
                                fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                lineNumber: 72,
                                columnNumber: 50
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: `contact-button ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerContact}`,
                            href: contact.href,
                            "aria-current": current(contact.href),
                            children: contact.label
                        }, void 0, false, {
                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                    open: mobileOpen,
                    onOpenChange: setMobileOpen,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuToggle,
                            type: "button",
                            children: "Menu"
                        }, void 0, false, {
                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileSheet,
                            "data-company": slug,
                            "aria-describedby": undefined,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileTitle,
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNav,
                                    "aria-label": `${name} mobile navigation`,
                                    children: [
                                        [
                                            ...primary,
                                            catalog,
                                            ...sectionLinks,
                                            contact
                                        ].map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetClose"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: href,
                                                    "aria-current": current(href),
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 48
                                                }, this)
                                            }, href, false, {
                                                fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$brands$2f$CompanySite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileServices,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                    children: [
                                                        "Explore individual ",
                                                        catalog.label.toLowerCase(),
                                                        " programmes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                serviceLinks.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetClose"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: href,
                                                            "aria-current": current(href),
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 50
                                                        }, this)
                                                    }, href, false, {
                                                        fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/brands/BrandNavigation.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/brands/BrandNavigation.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/brands/BrandNavigation.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(BrandNavigation, "/psPgYirW3M534YwYvEK7m2xCFc=");
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
"[project]/src/components/ui/sheet.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "close": "sheet-module__P4f9lq__close",
  "content": "sheet-module__P4f9lq__content",
  "fade-in": "sheet-module__P4f9lq__fade-in",
  "overlay": "sheet-module__P4f9lq__overlay",
  "slide-in": "sheet-module__P4f9lq__slide-in",
});
}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.module.css [app-client] (css module)");
"use client";
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"];
function SheetContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ...props,
                className: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    className
                ].filter(Boolean).join(" "),
                "data-lenis-prevent": true,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].close,
                        "aria-label": "Close menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/sheet.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = SheetContent;
var _c;
__turbopack_context__.k.register(_c, "SheetContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_08hzgotuogrx-._.js.map