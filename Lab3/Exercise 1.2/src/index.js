import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import MyList from "/MyList";
import MyButton from "/MyButton";
const root = ReactDOM.createRoot(document.getElementById('root'));

const appState = {
    text: "My Button",
    disabled: true,
    items: ["First", "Second", "Third"],
};
function render(props) {
    root.render(
        <main>
            <MyButton text={props.text} disabled={props.disabled} />
            <MyList items={props.items} />
        </main>
    );
}
render(appState);
setTimeout(() => {
    appState.disabled = false;
    appState.items.push("Fourth");

    render(appState);
}, 1000);


