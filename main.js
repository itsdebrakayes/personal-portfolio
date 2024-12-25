document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    const welcomeMessage = "Welcome to my portfolio! Type 'Let's Go!' to see what you can learn about today!";
    output.innerHTML = `<div>${welcomeMessage}</div>`;  // Ensure the initial message is displayed

    const commands = {
        "Let's Go!": function() {
            window.location.href = 'main.html';
        },
        clear: function() {
            output.innerHTML = "";
        },
        Bye: "Goodbye!"
    };

    function processCommand(command) {
        if (commands[command]) {
            if (typeof commands[command] === 'function') {
                commands[command]();
            } else {
                output.innerHTML += `<div class="prompt">user@portfolio:~$ ${command}</div><div>${commands[command]}</div>`;
            }
        } else {
            output.innerHTML += `<div class="prompt">user@portfolio:~$ ${command}</div><div>Command not found: ${command}</div>`;
        }
        output.scrollTop = output.scrollHeight;
    }

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const command = input.value.trim();
            if (command) {
                processCommand(command);
            }
            input.value = "";
        }
    });
});
