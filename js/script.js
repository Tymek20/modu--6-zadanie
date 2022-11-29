{
    const tasks = [
        {
            content: "praca domowa",
            done: false,
        },
        {
            content: "sprawdzić zadanie moduł 5",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li${task.done ? " class=\"form__tasks\"" : ""}>
                ${task.content}
                </li>
                `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}