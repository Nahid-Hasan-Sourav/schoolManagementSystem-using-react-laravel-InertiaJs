import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Toaster } from "react-hot-toast";
import AppProvider from "./context/AppProvider";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
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
    progress: {
        color: '#4B5563',
    },
});


//this is working without any package like breeze
// import React from "react";
// import { createInertiaApp } from "@inertiajs/react";
// import { createRoot } from "react-dom/client";
// import { Toaster } from "react-hot-toast";
// import AppProvider from "./context/AppProvider";
// // import { Ziggy } from './ziggy.js';

// createInertiaApp({
//     resolve: (name) => {
//         const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
//         return pages[`./Pages/${name}.jsx`];
//     },
//     setup: ({ el, App, props }) => {
//         createRoot(el).render(
//             <AppProvider>
//                 <>
//                     <Toaster />
//                     <App {...props} />
//                 </>
//             </AppProvider>
//         );
//     },
// });