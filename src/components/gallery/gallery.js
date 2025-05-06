const Gallery = function () {
    const api_key = process.env.GIPHY_API_KEY;
    const template = `
        <main id="content">
            <div class="gallery" id="gallery-1"></div>
            <div class="gallery" id="gallery-2"></div>
            <div class="" id="placeholder">
                <img src=""></img>
                <p class="text no-select no-u-select">
                    It seems there are no gifs for this one :(
                </p>
            </div>
        </main>
    `;

    const contentArr = [];
    const range = document.createRange();
    const fragment = range.createContextualFragment(template);
    const component = fragment.querySelector('main#content');
    const gallery_1 = component.querySelector('#gallery-1');
    const gallery_2 = component.querySelector('#gallery-2');
    const placeholder = component.querySelector('#placeholder');

    let currentGallery = gallery_1;

    component.removeChild(placeholder);

    // Verify website width
    if (window.innerWidth < 640) {
        component.removeChild(gallery_2);
    };

    window.addEventListener('resize', (e) => {
        let width = window.innerWidth;

        if (width >= 610) {

            if (!component.contains(gallery_2)) {
                component.appendChild(gallery_2);

                for (let content of contentArr) {
                    content.unrender();
                };

                currentGallery = gallery_1;
                for (let content of contentArr) {
                    content.render(currentGallery);

                    currentGallery = currentGallery === gallery_1 ? gallery_2 : gallery_1;
                };
            };

        } else {
            
            if (component.contains(gallery_2)) {
                component.removeChild(gallery_2);

                for (let content of contentArr) {
                    content.unrender();
                };

                for (let content of contentArr) {
                    content.render(gallery_1);
                };
            };
            
        };
    });

    return {
        render: (parent) => {
            if (!parent) return component;

            if (!parent.contains(component)) parent.appendChild(component);
        },

        addContent: (object) => {
            object.render(currentGallery);
            contentArr.push(object);

            currentGallery = currentGallery === gallery_1 ? gallery_2 : gallery_1;
        },
        removeContent: ({ index, isReset = false } = {}) => {
            if (isReset) {
                while (contentArr.length != 0) {
                    let content = contentArr.shift();
                    content.unrender();
                };

                return;
            };

            let content = contentArr.splice(index, 1);
            content.unrender();
        },
        placeholder: (toggle) => {
            if (toggle) {

                if (component.contains(placeholder)) return;
                component.appendChild(placeholder);

            } else {

                if (!component.contains(placeholder)) return;
                component.remove(placeholder)

            };
        }
    };
}();

export default Gallery;