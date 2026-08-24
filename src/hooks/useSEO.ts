import { useEffect } from 'react';

export function useSEO({ title, description, path }: { title: string, description: string, path: string }) {
    useEffect(() => {
        document.title = title;

        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', description);

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `https://sb-fund.com${path}`);

        let metaOgTitle = document.querySelector('meta[property="og:title"]');
        if (!metaOgTitle) {
            metaOgTitle = document.createElement('meta');
            metaOgTitle.setAttribute('property', 'og:title');
            document.head.appendChild(metaOgTitle);
        }
        metaOgTitle.setAttribute('content', title);

        let metaOgUrl = document.querySelector('meta[property="og:url"]');
        if (!metaOgUrl) {
            metaOgUrl = document.createElement('meta');
            metaOgUrl.setAttribute('property', 'og:url');
            document.head.appendChild(metaOgUrl);
        }
        metaOgUrl.setAttribute('href', `https://sb-fund.com${path}`);

    }, [title, description, path]);
}
