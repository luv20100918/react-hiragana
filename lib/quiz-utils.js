const HIRAGANA = [
  { character: "あ", romanization: "a" },
  { character: "い", romanization: "i" },
  { character: "う", romanization: "u" },
  { character: "え", romanization: "e" },
  { character: "お", romanization: "o" },
  { character: "か", romanization: "ka" },
  { character: "き", romanization: "ki" },
  { character: "く", romanization: "ku" },
  { character: "け", romanization: "ke" },
  { character: "こ", romanization: "ko" },
  { character: "さ", romanization: "sa" },
  { character: "し", romanization: "shi" },
  { character: "す", romanization: "su" },
  { character: "せ", romanization: "se" },
  { character: "そ", romanization: "so" },
  { character: "た", romanization: "ta" },
  { character: "ち", romanization: "chi" },
  { character: "つ", romanization: "tsu" },
  { character: "て", romanization: "te" },
  { character: "と", romanization: "to" },
  { character: "な", romanization: "na" },
  { character: "に", romanization: "ni" },
  { character: "ぬ", romanization: "nu" },
  { character: "ね", romanization: "ne" },
  { character: "の", romanization: "no" },
  { character: "は", romanization: "ha" },
  { character: "ひ", romanization: "hi" },
  { character: "ふ", romanization: "hu" },
  { character: "へ", romanization: "he" },
  { character: "ほ", romanization: "ho" },
  { character: "ま", romanization: "ma" },
  { character: "み", romanization: "mi" },
  { character: "む", romanization: "mu" },
  { character: "め", romanization: "me" },
  { character: "も", romanization: "mo" },
  { character: "や", romanization: "ya" },
  { character: "ゆ", romanization: "yu" },
  { character: "よ", romanization: "yo" },
  { character: "ら", romanization: "ra" },
  { character: "り", romanization: "ri" },
  { character: "る", romanization: "ru" },
  { character: "れ", romanization: "re" },
  { character: "ろ", romanization: "ro" },
  { character: "わ", romanization: "wa" },
  { character: "を", romanization: "wo" },
  { character: "ん", romanization: "n" },
  { character: "が", romanization: "ga" },
  { character: "ぎ", romanization: "gi" },
  { character: "ぐ", romanization: "gu" },
  { character: "げ", romanization: "ge" },
  { character: "ご", romanization: "go" },
  { character: "ざ", romanization: "za" },
  { character: "じ", romanization: "ji" },
  { character: "ず", romanization: "zu" },
  { character: "ぜ", romanization: "ze" },
  { character: "ぞ", romanization: "zo" },
  { character: "だ", romanization: "da" },
  { character: "ぢ", romanization: "ji" },
  { character: "づ", romanization: "zu" },
  { character: "で", romanization: "de" },
  { character: "ど", romanization: "do" },
  { character: "ば", romanization: "ba" },
  { character: "び", romanization: "bi" },
  { character: "ぶ", romanization: "bu" },
  { character: "べ", romanization: "be" },
  { character: "ぼ", romanization: "bo" },
  { character: "ぱ", romanization: "pa" },
  { character: "ぴ", romanization: "pi" },
  { character: "ぷ", romanization: "pu" },
  { character: "ぺ", romanization: "pe" },
  { character: "ぽ", romanization: "po" }
];

const KATAKANA = [
  { character: "ア", romanization: "a" },
  { character: "イ", romanization: "i" },
  { character: "ウ", romanization: "u" },
  { character: "エ", romanization: "e" },
  { character: "オ", romanization: "o" },
  { character: "カ", romanization: "ka" },
  { character: "キ", romanization: "ki" },
  { character: "ク", romanization: "ku" },
  { character: "ケ", romanization: "ke" },
  { character: "コ", romanization: "ko" },
  { character: "サ", romanization: "sa" },
  { character: "シ", romanization: "shi" },
  { character: "ス", romanization: "su" },
  { character: "セ", romanization: "se" },
  { character: "ソ", romanization: "so" },
  { character: "タ", romanization: "ta" },
  { character: "チ", romanization: "chi" },
  { character: "ツ", romanization: "tsu" },
  { character: "テ", romanization: "te" },
  { character: "ト", romanization: "to" },
  { character: "ナ", romanization: "na" },
  { character: "ニ", romanization: "ni" },
  { character: "ヌ", romanization: "nu" },
  { character: "ネ", romanization: "ne" },
  { character: "ノ", romanization: "no" },
  { character: "ハ", romanization: "ha" },
  { character: "ヒ", romanization: "hi" },
  { character: "フ", romanization: "fu" },
  { character: "ヘ", romanization: "he" },
  { character: "ホ", romanization: "ho" },
  { character: "マ", romanization: "ma" },
  { character: "ミ", romanization: "mi" },
  { character: "ム", romanization: "mu" },
  { character: "メ", romanization: "me" },
  { character: "モ", romanization: "mo" },
  { character: "ヤ", romanization: "ya" },
  { character: "ユ", romanization: "yu" },
  { character: "ヨ", romanization: "yo" },
  { character: "ラ", romanization: "ra" },
  { character: "リ", romanization: "ri" },
  { character: "ル", romanization: "ru" },
  { character: "レ", romanization: "re" },
  { character: "ロ", romanization: "ro" },
  { character: "ワ", romanization: "wa" },
  { character: "ヲ", romanization: "wo" },
  { character: "ン", romanization: "n" },
  { character: "ガ", romanization: "ga" },
  { character: "ギ", romanization: "gi" },
  { character: "グ", romanization: "gu" },
  { character: "ゲ", romanization: "ge" },
  { character: "ゴ", romanization: "go" },
  { character: "ザ", romanization: "za" },
  { character: "ジ", romanization: "ji" },
  { character: "ズ", romanization: "zu" },
  { character: "ゼ", romanization: "ze" },
  { character: "ゾ", romanization: "zo" },
  { character: "ダ", romanization: "da" },
  { character: "ヂ", romanization: "ji" },
  { character: "ヅ", romanization: "zu" },
  { character: "デ", romanization: "de" },
  { character: "ド", romanization: "do" },
  { character: "バ", romanization: "ba" },
  { character: "ビ", romanization: "bi" },
  { character: "ブ", romanization: "bu" },
  { character: "ベ", romanization: "be" },
  { character: "ボ", romanization: "bo" },
  { character: "パ", romanization: "pa" },
  { character: "ピ", romanization: "pi" },
  { character: "プ", romanization: "pu" },
  { character: "ペ", romanization: "pe" },
  { character: "ポ", romanization: "po" }
];

const ENGLISH_WORDS = [
  { word: "announce", meaning: "발표하다, 알리다" },
  { word: "saying", meaning: "속담, 격언" },
  { word: "silence", meaning: "침묵" },
  { word: "elect", meaning: "선출하다" },
  { word: "professor", meaning: "교수" },
  { word: "lastly", meaning: "마지막으로" },
  { word: "panic", meaning: "공포, 당황" },
  { word: "guarantee", meaning: "보증하다" },
  { word: "calculate", meaning: "계산하다" },
  { word: "glow", meaning: "빛나다" },
  { word: "research", meaning: "연구하다" },
  { word: "summarize", meaning: "요약하다" },
  { word: "detective", meaning: "탐정" },
  { word: "charity", meaning: "자선" },
  { word: "mission", meaning: "임무" },
  { word: "former", meaning: "이전의" },
  { word: "scientific", meaning: "과학적인" },
  { word: "instant", meaning: "즉각적인" },
  { word: "shoot", meaning: "쏘다" },
  { word: "organization", meaning: "조직" },
  { word: "rush", meaning: "서두르다" },
  { word: "peaceful", meaning: "평화로운" },
  { word: "occur", meaning: "발생하다" },
  { word: "advance", meaning: "진보하다" },
  { word: "sensitive", meaning: "민감한" },
  { word: "reply", meaning: "답하다" },
  { word: "attitude", meaning: "태도" },
  { word: "illegal", meaning: "불법의" },
  { word: "visual", meaning: "시각적인" },
  { word: "mood", meaning: "기분" },
  { word: "firm", meaning: "단단한" },
  { word: "unfortunately", meaning: "불행하게도" },
  { word: "genius", meaning: "천재" },
  { word: "reasonable", meaning: "합리적인" },
  { word: "horror", meaning: "공포" },
  { word: "abandon", meaning: "포기하다" },
  { word: "come to an end", meaning: "끝나다" },
  { word: "look forward to", meaning: "기대하다" },
  { word: "B as well as A", meaning: "A뿐만 아니라 B도" },
  { word: "little by little", meaning: "조금씩" }
];

/**
 * 25개의 랜덤 문자 선택 함수
 * @param {string} type - "hiragana" 또는 "katakana"
 * @returns {Array} 선택된 25개의 문자 객체 배열
 */
function getRandomCharacters(type) {
  const characters = type === "hiragana" ? HIRAGANA : KATAKANA;
  
  // 제외된 문자 가져오기
  let excludedChars = { hiragana: [], katakana: [] };
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("excludedChars");
    if (saved) {
      excludedChars = JSON.parse(saved);
    }
  }
  
  // 제외된 문자를 제외한 문자 배열 생성
  const availableCharacters = characters.filter(
    char => !excludedChars[type].includes(char.character)
  );
  
  // 사용 가능한 문자가 25개 미만이면 전체 반환
  if (availableCharacters.length <= 25) {
    return availableCharacters;
  }
  
  // 25개의 랜덤 문자 선택
  const selectedCharacters = [];
  const usedIndexes = new Set();
  
  while (selectedCharacters.length < 25) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      selectedCharacters.push(availableCharacters[randomIndex]);
    }
  }
  
  return selectedCharacters;
}

/**
 * 랜덤 영어 단어 선택 함수
 * @param {string} type - "word_to_meaning" 또는 "meaning_to_word"
 * @returns {Array} 선택된 단어 객체 배열
 */
function getRandomEnglishWords(type) {
  const shuffled = [...ENGLISH_WORDS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 20).map(item => ({
    question: type === "word_to_meaning" ? item.word : item.meaning,
    answer: type === "word_to_meaning" ? item.meaning : item.word
  }));
}

export { HIRAGANA, KATAKANA, getRandomCharacters, ENGLISH_WORDS, getRandomEnglishWords }; 