export default function Card(object) {

    let
    source, 
    title = 'No Title', 
    profile_link = 'https://giphy.com/', 
    display_name = 'N/A';

    source = object.images.original.url;
    
    if (object.title) {
        title = object.title;
    };
    
    if (object.user && object.user.profile_url) {
        profile_link = object.user.profile_url;
    };

    if (object.user && object.user.display_name) {
        display_name = object.user.display_name;
    };

    const template = `
        <article class="component card">
        <picture>
            <img src="${source}" alt="" srcset="">
            <div class="overlay"></div>
            <a target="_blank" href="https://giphy.com/" class="giphy">
                <svg height="2500" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="4 2 16.32 20"><g fill="none" fill-rule="evenodd"><path d="M6.331 4.286H17.99v15.428H6.33z" fill="#000"/><g fill-rule="nonzero"><path d="M4 3.714h2.331v16.572H4z" fill="#04ff8e"/><path d="M17.989 8.286h2.331v12h-2.331z" fill="#8e2eff"/><path d="M4 19.714h16.32V22H4z" fill="#00c5ff"/><path d="M4 2h9.326v2.286H4z" fill="#fff152"/><path d="M17.989 6.571V4.286h-2.332V2h-2.331v6.857h6.994V6.571" fill="#ff5b5b"/><path d="M17.989 11.143V8.857h2.331" fill="#551c99"/></g><path d="M13.326 2v2.286h-2.332" fill="#999131"/></g></svg>
            </a>
        </picture>
        <div class="description text no-select no-u-select">
            <p class="name">
                ${title}
            </p>
            <p class="author">
                by <a target="_blank" href="${profile_link}">${display_name}</a>
            </p>
        </div>
    </article>
    `;

    const range = document.createRange();
    const fragment = range.createContextualFragment(template);
    const component = fragment.querySelector('.component');
    const gif_img = component.querySelector('img.gif');
    const gif_name = component.querySelector('.name');
    const gif_author = component.querySelector('.author');
    const gif_author_link = gif_author.querySelector('a');

    return {

        /**
         * Renders the component.
         * @param {HTMLElement} parent - To where the component must be appended.
         * @returns The component if no parent.
         */
        render:  (parent) => {
            if (!parent) return component;
    
            if (!parent.contains(component)) {
                parent.appendChild(component);
            };
        },
    
        unrender: () => {
            const parent = component.parentElement;

            if (parent && parent.contains(component)) {
                parent.removeChild(component);
            };
        },

    };
};