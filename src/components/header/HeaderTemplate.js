// Central registry for header templates

import Template1Header from "./template1/Header";
import Template2Header from "./template2/Header";

// Add new headers here as you create more templates
export const headerRegistry = {
  template1: Template1Header,
  template2: Template2Header,
};

export function getHeaderByTemplate(templateName) {
  return headerRegistry[templateName] || Template2Header; // default fallback
}


