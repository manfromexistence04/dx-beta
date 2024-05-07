import { sanitizeUrl } from "@braintree/sanitize-url";
export const sanitizeHTMLAttribute = (html) => {
    return html.replace(/"/g, "&quot;");
};
export const normalizeLink = (link) => {
    link = link.trim();
    if (!link) {
        return link;
    }
    return sanitizeUrl(sanitizeHTMLAttribute(link));
};
export const isLocalLink = (link) => {
    return !!(link?.includes(location.origin) || link?.startsWith("/"));
};
/**
 * Returns URL sanitized and safe for usage in places such as
 * iframe's src attribute or <a> href attributes.
 */
export const toValidURL = (link) => {
    link = normalizeLink(link);
    // make relative links into fully-qualified urls
    if (link.startsWith("/")) {
        return `${location.origin}${link}`;
    }
    try {
        new URL(link);
    }
    catch {
        // if link does not parse as URL, assume invalid and return blank page
        return "about:blank";
    }
    return link;
};
