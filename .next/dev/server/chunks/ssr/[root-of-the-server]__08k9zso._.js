module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/regiao/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegiaoPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$regioes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/regioes.ts [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$regioes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["regioes"].map((regiao)=>({
            slug: regiao.slug
        }));
}
async function RegiaoPage({ params }) {
    const { slug } = await params;
    const regiao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$regioes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRegiaoBySlug"])(slug);
    if (!regiao) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto max-w-content px-6 py-16 md:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "text-sm text-muted transition-colors hover:text-highlight",
                children: "← Todas as regiões"
            }, void 0, false, {
                fileName: "[project]/app/regiao/[slug]/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-display text-sm text-highlight",
                        children: String(regiao.numero).padStart(2, "0")
                    }, void 0, false, {
                        fileName: "[project]/app/regiao/[slug]/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-px flex-1 max-w-[40px] bg-border"
                    }, void 0, false, {
                        fileName: "[project]/app/regiao/[slug]/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-muted",
                        children: "região de Goiânia"
                    }, void 0, false, {
                        fileName: "[project]/app/regiao/[slug]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/regiao/[slug]/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-4 font-display text-4xl font-semibold text-ink md:text-5xl",
                children: regiao.nome
            }, void 0, false, {
                fileName: "[project]/app/regiao/[slug]/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 max-w-lg text-muted",
                children: "Bairros que fazem parte dessa região:"
            }, void 0, false, {
                fileName: "[project]/app/regiao/[slug]/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-4 flex flex-wrap gap-2",
                children: regiao.bairros.map((bairro)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-ink",
                        children: bairro
                    }, bairro, false, {
                        fileName: "[project]/app/regiao/[slug]/page.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/regiao/[slug]/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 max-w-md rounded-lg border border-primary/40 bg-surface p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-xl font-semibold text-ink",
                        children: "Entre no grupo do WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/app/regiao/[slug]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm leading-relaxed text-muted",
                        children: [
                            "É lá que os mapeamentos, votações e cobranças da região ",
                            regiao.nome,
                            " ",
                            "acontecem. Entre e apresente o problema do seu bairro."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/regiao/[slug]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: regiao.whatsappLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-sm font-semibold text-base transition-opacity hover:opacity-90",
                        children: [
                            "Entrar no grupo da região ",
                            regiao.nome
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/regiao/[slug]/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/regiao/[slug]/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/regiao/[slug]/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/regiao/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/regiao/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/regioes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRegiaoBySlug",
    ()=>getRegiaoBySlug,
    "regioes",
    ()=>regioes
]);
const regioes = [
    {
        numero: 1,
        slug: "central",
        nome: "Central",
        bairros: [
            "Setor Central",
            "Setor Sul",
            "Setor Universitário",
            "Setor Oeste",
            "Setor Aeroporto",
            "Setor Coimbra",
            "Vila Nova",
            "Setor Norte Ferroviário"
        ],
        whatsappLink: "https://chat.whatsapp.com/SEU-LINK-CENTRAL"
    },
    {
        numero: 2,
        slug: "sul",
        nome: "Sul",
        bairros: [
            "Setor Bueno",
            "Setor Marista",
            "Jardim Goiás",
            "Jardim América",
            "Parque Amazônia",
            "Setor Pedro Ludovico",
            "Nova Suíça",
            "Serrinha",
            "Alto da Glória"
        ],
        whatsappLink: "https://chat.whatsapp.com/SEU-LINK-SUL"
    },
    {
        numero: 3,
        slug: "norte",
        nome: "Norte",
        bairros: [
            "Jardim Guanabara",
            "Setor Jaó",
            "Goiânia 2",
            "Setor Criméia Leste",
            "Setor Itatiaia",
            "Residencial Orlando de Morais",
            "Vale dos Sonhos"
        ],
        whatsappLink: "https://chat.whatsapp.com/SEU-LINK-NORTE"
    },
    {
        numero: 4,
        slug: "noroeste",
        nome: "Noroeste",
        bairros: [
            "Jardim Curitiba",
            "Recanto do Bosque",
            "Finsocial",
            "Morada do Sol",
            "Parque Tremendão",
            "Vila Mutirão",
            "Jardim Primavera"
        ],
        whatsappLink: "https://chat.whatsapp.com/SEU-LINK-NOROESTE"
    },
    {
        numero: 5,
        slug: "leste",
        nome: "Leste",
        bairros: [
            "Jardim Novo Mundo",
            "Conjunto Riviera",
            "Parque das Laranjeiras",
            "Setor Leste Vila Nova",
            "Senador Canedo",
            "Água Branca",
            "Alphaville e Jardins"
        ],
        whatsappLink: "https://chat.whatsapp.com/SEU-LINK-LESTE"
    },
    {
        numero: 6,
        slug: "oeste",
        nome: "Oeste",
        bairros: [
            "Setor Campinas",
            "Cidade Jardim",
            "Conjunto Vera Cruz",
            "Setor Centro-Oeste",
            "Setor dos Funcionários",
            "Bairro Goiá",
            "Capuava",
            "Jardim do Cerrado",
            "Conjunto Vera Cruz"
        ],
        whatsappLink: "https://chat.whatsapp.com/SEU-LINK-OESTE"
    },
    {
        numero: 7,
        slug: "sudoeste",
        nome: "Sudoeste",
        bairros: [
            "Jardim Atlântico",
            "Setor Garavelo",
            "Jardim Europa",
            "Vila Rosa",
            "Parque Oeste Industrial",
            "Residencial Itaipu",
            "Setor Souto"
        ],
        whatsappLink: "https://chat.whatsapp.com/SEU-LINK-SUDOESTE"
    }
];
function getRegiaoBySlug(slug) {
    return regioes.find((r)=>r.slug === slug);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08k9zso._.js.map