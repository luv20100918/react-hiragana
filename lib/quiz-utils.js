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
  { character: "ふ", romanization: "fu" },
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

export { HIRAGANA, KATAKANA, getRandomCharacters }; 