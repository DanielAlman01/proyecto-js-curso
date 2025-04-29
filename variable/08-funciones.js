(() => {
    const App = {
        htmlElements: {
            resp1: document.querySelector('#resp1'),
        },
        init() {
            App.methods.resp1();
        },
        methods: {
            resp1() {
                const element = App.htmlElements.resp1;
                App.methods.print(element, 'Maria');
            },
            print(element, text) {
                element.innerHTML += `<p>${text}</p>`;
              }
        }
    }
    App.init();
}) ();

function suma(){
    return 2 + 2;
}