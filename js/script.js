{
    const welcome = () => {
        console.log("Witam wszystkich odwiedzających DEV", "- strona dodana do GIT.");
    };

    welcome();
}
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

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
        formReset();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const formReset = () => {
        document.querySelector(".js-form").reset();
      };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButtons, index) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="list__tasks">            
                <button class="list__doneButton js-done"> ${task.done ? "✓" : ""}</button>
                <p class=${task.done ? "list__tasks--lineThrough" : ""}>${task.content}</p>
                <button class="list__removeButton js-remove">🗑</button>
                </li>
                `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents()
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        };

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
};