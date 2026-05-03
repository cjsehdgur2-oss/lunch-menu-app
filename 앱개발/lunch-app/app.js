const menus = [
  { name: "김치찌개", category: "한식", price: 9000, emoji: "🍲", reason: "뜨끈하고 든든해서 점심으로 실패가 적어요." },
  { name: "제육볶음", category: "한식", price: 10000, emoji: "🥘", reason: "매콤한 양념과 밥 조합이 힘을 내게 해줘요." },
  { name: "비빔밥", category: "한식", price: 9000, emoji: "🥗", reason: "채소와 밥을 한 번에 먹을 수 있어 균형 잡힌 점심이에요." },
  { name: "순두부찌개", category: "한식", price: 8500, emoji: "🍲", reason: "부드럽고 칼칼해서 속을 따뜻하게 채워줘요." },
  { name: "불고기덮밥", category: "한식", price: 10000, emoji: "🍚", reason: "달짝지근한 고기와 밥 조합이 안정적인 선택이에요." },
  { name: "짜장면", category: "중식", price: 7000, emoji: "🍜", reason: "빠르고 저렴하게 기분 좋은 한 끼를 먹을 수 있어요." },
  { name: "마라탕", category: "중식", price: 12000, emoji: "🌶️", reason: "얼얼한 국물이 당기는 날에 잘 맞아요." },
  { name: "짬뽕", category: "중식", price: 9000, emoji: "🦐", reason: "얼큰한 국물이 답답한 입맛을 시원하게 깨워줘요." },
  { name: "볶음밥", category: "중식", price: 8000, emoji: "🍚", reason: "간단하지만 든든해서 빠른 점심으로 좋아요." },
  { name: "탕수육 정식", category: "중식", price: 10000, emoji: "🥢", reason: "바삭하고 달콤한 맛으로 기분 전환하기 좋아요." },
  { name: "돈까스", category: "일식", price: 10000, emoji: "🍛", reason: "바삭한 식감 덕분에 점심 만족도가 높아요." },
  { name: "라멘", category: "일식", price: 11000, emoji: "🍜", reason: "진한 국물로 오후까지 든든하게 버틸 수 있어요." },
  { name: "초밥 세트", category: "일식", price: 13000, emoji: "🍣", reason: "깔끔하고 산뜻한 점심이 필요할 때 잘 어울려요." },
  { name: "가츠동", category: "일식", price: 9500, emoji: "🍚", reason: "돈까스와 달걀 덮밥 조합이라 포만감이 좋아요." },
  { name: "우동", category: "일식", price: 8000, emoji: "🍜", reason: "부담 없이 따뜻한 면 요리를 먹고 싶을 때 좋아요." },
  { name: "파스타", category: "양식", price: 13000, emoji: "🍝", reason: "조금 색다른 점심을 먹고 싶을 때 좋아요." },
  { name: "샌드위치", category: "양식", price: 7000, emoji: "🥪", reason: "가볍지만 깔끔하게 먹기 좋은 메뉴예요." },
  { name: "햄버거", category: "양식", price: 9000, emoji: "🍔", reason: "간편하고 확실하게 배를 채울 수 있어요." },
  { name: "리조또", category: "양식", price: 12000, emoji: "🥘", reason: "부드럽고 고소해서 천천히 먹기 좋은 메뉴예요." },
  { name: "샐러드볼", category: "양식", price: 10000, emoji: "🥗", reason: "가볍게 먹으면서도 재료가 다양해 만족스러워요." },
  { name: "떡볶이", category: "분식", price: 6000, emoji: "🍢", reason: "매콤달콤해서 입맛을 바로 살려줘요." },
  { name: "김밥", category: "분식", price: 4000, emoji: "🍙", reason: "저렴하고 간단해서 바쁜 점심에 딱이에요." },
  { name: "라볶이", category: "분식", price: 7000, emoji: "🍜", reason: "떡볶이와 라면을 같이 먹는 든든한 선택이에요." },
  { name: "순대", category: "분식", price: 6000, emoji: "🥢", reason: "가볍게 나눠 먹기 좋고 떡볶이와도 잘 어울려요." },
  { name: "쫄면", category: "분식", price: 8000, emoji: "🥗", reason: "새콤매콤해서 입맛 없을 때 먹기 좋아요." }
];

const categorySelect = document.getElementById("category");
const priceSelect = document.getElementById("price");
const recommendButton = document.getElementById("recommend-button");
const resultBox = document.getElementById("result");
const reasonBox = document.getElementById("reason");

function recommendMenu() {
  const category = categorySelect.value;
  const maxPrice = priceSelect.value;

  const filteredMenus = menus.filter((menu) => {
    const categoryMatch = category === "상관없음" || menu.category === category;
    const priceMatch = maxPrice === "상관없음" || menu.price <= Number(maxPrice);

    return categoryMatch && priceMatch;
  });

  if (filteredMenus.length === 0) {
    showResult("조건에 맞는 메뉴가 없습니다.", "가격대나 음식 종류를 조금 넓혀보세요.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredMenus.length);
  const selectedMenu = filteredMenus[randomIndex];
  const formattedPrice = selectedMenu.price.toLocaleString("ko-KR");

  showResult(
    `오늘의 추천 메뉴: ${selectedMenu.name} ${selectedMenu.emoji}`,
    `이유: ${selectedMenu.reason} 예상 가격은 ${formattedPrice}원이에요.`
  );
}

function showResult(message, reason) {
  resultBox.textContent = message;
  reasonBox.textContent = reason;

  resultBox.classList.remove("pop");
  void resultBox.offsetWidth;
  resultBox.classList.add("pop");
}

recommendButton.addEventListener("click", recommendMenu);
