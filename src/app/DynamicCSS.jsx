// @ts-nocheck
"use client";

import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function DynamicCSS() {
    const activeTemplate = useSelector((state) => {
        return state.template?.activeTemplate || "template2";
    });

    useEffect(() => {
        // Remove existing template CSS
        const existingLink = document.getElementById('template-css');
        if (existingLink) {
            existingLink.remove();
        }

        // Create new link element
        const link = document.createElement('link');
        link.id = 'template-css';
        link.rel = 'stylesheet';
        link.href = `/globalCss/${activeTemplate}.css`;

        // Add to head
        document.head.appendChild(link);

        // Cleanup function
        return () => {
            const linkToRemove = document.getElementById('template-css');
            if (linkToRemove) {
                linkToRemove.remove();
            }
        };
    }, [activeTemplate]);

    return null; // This component doesn't render anything
}
