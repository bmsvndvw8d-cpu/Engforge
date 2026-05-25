let questions = [
  { id: 1, number: 18, type: "빈칸", content: "빈칸 문제입니다" },
  { id: 2, number: 19, type: "삽입", content: "삽입 문제입니다" }
];

let cart = [];

// 문제 출력
function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  questions.forEach(q => {
    const div = document.createElement("div");

    div.innerHTML = `
      <strong>${q.number}번 (${q.type})</strong>
      <p>${q.content}</p>
    `;

    // 버튼 따로 생성 (이게 핵심)
    const btn = document.createElement("button");
    btn.innerText = "담기";

    btn.addEventListener("click", () => {
      add(q.id);
    });

    div.appendChild(btn);
    list.appendChild(div);
  });
}

// 장바구니 추가
function add(id) {
  const selected = questions.find(q => q.id === id);
  if (!selected) return;

  cart.push(selected);
  renderCart();
}

// 장바구니 출력
function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  cart.forEach((q, index) => {
    const div = document.createElement("div");

    div.innerText = `${index + 1}. ${q.number}번 (${q.type})`;

    const btn = document.createElement("button");
    btn.innerText = "삭제";

    btn.addEventListener("click", () => {
      removeItem(index);
    });

    div.appendChild(btn);
    cartDiv.appendChild(div);
  });
}

// 삭제
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// 실행
render();