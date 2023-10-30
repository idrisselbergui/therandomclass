const inputArray = [
    "idriss", "safae", "hajar", "majdolin", "youssef",
    "tarik", "anass", "ikhlass", "souhail", "dina",
    "ismail", "ali", "hafssa", "wissal", "mouhamed",
    "othmane", "rabie", "abdelillah", "widdad", "acherf"
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function groupAndDisplay() {
    const numGroups=parseInt(document.getElementById('num').value);
    shuffleArray(inputArray);
    const elementsPerGroup = Math.floor(inputArray.length / numGroups);
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    for (let i = 0; i < numGroups; i++) {
        const startIdx = i * elementsPerGroup;
        const endIdx = (i < numGroups - 1) ? (i + 1) * elementsPerGroup : inputArray.length;
        const group = inputArray.slice(startIdx, endIdx);

        const row = tableBody.insertRow();
        row.insertCell(0).textContent = `Group ${i + 1}`;
        row.insertCell(1).textContent = group.join(", ");
    }
}