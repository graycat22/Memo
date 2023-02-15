const memoInput = document.getElementById("memo");
const addBtn = document.getElementById("add-btn");
const memoList = document.getElementById("memo-list");

// Load memos from local storage
const memos = JSON.parse(localStorage.getItem("memos")) || [];

// Render memos
function renderMemos() {
  memoList.innerHTML = memos
    .map(memo => `<li>${memo} <button class="delete-btn">Delete</button></li>`)
    .join("");
}

// Add memo to list
function addMemo(e) {
  e.preventDefault();
  const memo = memoInput.value.trim();
  if (memo) {
    memos.push(memo);
    localStorage.setItem("memos", JSON.stringify(memos));
    memoInput.value = "";
    renderMemos();
  }
}

// Remove memo from list
function removeMemo(e) {
  if (e.target.classList.contains("delete-btn")) {
    const memoText = e.target.parentElement.firstChild.textContent;
    memos.splice(memos.indexOf(memoText), 1);
    localStorage.setItem("memos", JSON.stringify(memos));
    renderMemos();
  }
}

// Add event listeners
addBtn.addEventListener("click", addMemo);
memoList.addEventListener("click", removeMemo);

// Initialize memo list
renderMemos();
