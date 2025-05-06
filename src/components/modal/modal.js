const AboutModal = function() {
    const template = `
        <div class="component modal">
            <div class="wrapper">
                <p id="message">
                    This website serves as a way to learn how to manipulate and handle APIs through the API of GIPHY. Any gifs searched, found, and shown in this website belongs to their own uploaders and creators in GIPHY.
                </p>
            </div>
        </div>
    `;

    const range = document.createRange();
    const fragment = range.createContextualFragment(template);
    const component = fragment.querySelector('.component');

    return {
        render: (parent) => {
            if (!parent) return component;

            if (!parent.contains(component)) parent.appendChild(component);
        }
    };
}();

export default AboutModal;