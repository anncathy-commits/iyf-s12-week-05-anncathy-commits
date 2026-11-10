
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript DOM Challenges</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>

    <header>
        <h1>JavaScript DOM Challenges</h1>
        <p>Five days of learning JavaScript!</p>
    </header>

    <main>

        <!-- DAY 1 -->
        <section>
            <h2>Day 1: Color Changer</h2>
            <h3>Change my color!</h3>
            <p>Click the button to change all headings to random colors.</p>
            <button id="color-btn">Change Colors</button>
        </section>

        <!-- DAY 2 -->
        <section>
            <h2>Day 2: Dynamic Element Creator</h2>
            <button id="add-btn">Add Paragraph</button>
            <div id="paragraph-container"></div>
        </section>

        <!-- DAY 3 -->
        <section>
            <h2>Day 3: Image Remover</h2>

            <img
                id="sample-image"
                src="https://picsum.photos/400/200"
                alt="Sample landscape"
            >

            <div>
                <button id="remove-btn">Remove Images</button>
                <button id="toggle-images-btn">Hide / Show Images</button>
            </div>
        </section>

        <!-- DAY 4 -->
        <section>
            <h2>Day 4: Content Copier</h2>

            <div class="copy-box">
                <h3>Source</h3>
                <div id="source">
                    <p>Hello! I am the original content.</p>
                    <p>This content will be copied.</p>
                </div>
            </div>

            <button id="copy-btn">Copy Content</button>

            <div class="copy-box">
                <h3>Target</h3>
                <div id="target">
                    <p>Copied content will appear here.</p>
                </div>
            </div>
        </section>

        <!-- DAY 5 -->
        <section>
            <h2>Day 5: Dark Mode Toggle</h2>
            <p>Switch between light mode and dark mode.</p>
            <button id="dark-mode-btn">Toggle Dark Mode</button>
        </section>

    </main>

    <footer>
        <p>My JavaScript Learning Journey</p>
    </footer>

</body>
</html>


/* GENERAL STYLING */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f1fa;
    color: #29213d;
    padding: 25px;
    transition: background 0.4s ease, color 0.4s ease;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    margin-bottom: 10px;
    color: #7952c7;
}

main {
    max-width: 750px;
    margin: auto;
}

section {
    background: white;
    padding: 25px;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    transition: background 0.4s ease;
}

section h2 {
    margin-bottom: 15px;
    color: #7952c7;
}

section p {
    margin: 12px 0;
}

button {
    background: #7952c7;
    color: white;
    border: none;
    padding: 11px 18px;
    border-radius: 7px;
    cursor: pointer;
    margin: 8px 5px 8px 0;
}

button:hover {
    background: #59369b;
}

/* DAY 2 */

#paragraph-container p {
    padding: 10px;
    background: #f0ebfa;
    border-radius: 6px;
    margin-top: 10px;
}

.delete-paragraph {
    background: #dc3545;
}

/* DAY 3 */

#sample-image {
    display: block;
    max-width: 100%;
    width: 400px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
}

.hidden {
    display: none !important;
}

/* DAY 4 */

.copy-box {
    background: #f0ebfa;
    padding: 15px;
    margin: 15px 0;
    border-radius: 8px;
    min-height: 80px;
}

.copy-box h3 {
    margin-bottom: 10px;
}

/* DAY 5 — DARK MODE */

body.dark-mode {
    background: #181522;
    color: #f4f1fa;
}

body.dark-mode section {
    background: #292438;
}

body.dark-mode section h2,
body.dark-mode header h1 {
    color: #b99af5;
}

body.dark-mode .copy-box,
body.dark-mode #paragraph-container p {
    background: #39324d;
}

body.dark-mode button {
    background: #8964d5;
}

body.dark-mode button:hover {
    background: #a487e8;
}

/* FOOTER */

footer {
    text-align: center;
    padding: 20px;
    color: #81798e;
}

/* RESPONSIVE DESIGN */

@media (max-width: 600px) {
    body {
        padding: 15px;
    }

    section {
        padding: 18px;
    }

    button {
        margin-bottom: 8px;
    }
}


// ========================================
// DAY 1: COLOR CHANGER
// ========================================

// Select the button
const colorBtn = document.querySelector("#color-btn");

// Generate a random hexadecimal color
function randomColor() {

    const randomNumber = Math.floor(
        Math.random() * 16777215
    );

    return "#" + randomNumber.toString(16).padStart(6, "0");
}

// Change all headings when clicked
colorBtn.addEventListener("click", () => {

    const headings = document.querySelectorAll("h1, h2, h3");

    headings.forEach(heading => {
        heading.style.color = randomColor();
    });

});


// ========================================
// DAY 2: DYNAMIC ELEMENT CREATOR
// ========================================

const addBtn = document.querySelector("#add-btn");
const paragraphContainer = document.querySelector("#paragraph-container");

let paragraphCount = 0;

addBtn.addEventListener("click", () => {

    paragraphCount++;

    // Create a paragraph
    const paragraph = document.createElement("p");

    paragraph.textContent = `This is paragraph number ${paragraphCount}`;

    // Create a delete button
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-paragraph";

    // Delete this paragraph when clicked
    deleteBtn.addEventListener("click", () => {

        paragraph.remove();

    });

    // Add the button inside the paragraph
    paragraph.appendChild(deleteBtn);

    // Add paragraph to the page
    paragraphContainer.appendChild(paragraph);

});


// ========================================
// DAY 3: IMAGE REMOVER
// ========================================

const removeBtn = document.querySelector("#remove-btn");
const toggleImagesBtn = document.querySelector("#toggle-images-btn");

// Remove all images permanently from the page
removeBtn.addEventListener("click", () => {

    const images = document.querySelectorAll("img");

    images.forEach(image => {
        image.remove();
    });

});

// Bonus: Hide and show images
toggleImagesBtn.addEventListener("click", () => {

    const images = document.querySelectorAll("img");

    images.forEach(image => {
        image.classList.toggle("hidden");
    });

});


// ========================================
// DAY 4: CONTENT COPIER
// ========================================

const copyBtn = document.querySelector("#copy-btn");
const source = document.querySelector("#source");
const target = document.querySelector("#target");

copyBtn.addEventListener("click", () => {

    target.textContent = source.textContent;

});


// ========================================
// DAY 5: DARK MODE TOGGLE
// ========================================

const darkModeBtn = document.querySelector("#dark-mode-btn");

// Load previously saved preference
const savedMode = localStorage.getItem("darkMode");

if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode
darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "enabled");

    } else {

        localStorage.setItem("darkMode", "disabled");

    }

});

