import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import AppProvider from "./context/AppProvider";
// import { Ziggy } from './ziggy.js';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ el, App, props }) => {
        createRoot(el).render(
            <AppProvider>
                <>
                    <Toaster />
                    <App {...props} />
                </>
            </AppProvider>
        );
    },
});
