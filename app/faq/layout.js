/**
 * FAQ 페이지의 메타데이터
 */
export const metadata = {
  title: "자주 묻는 질문",
  description: "일본어 글자와 영어 단어 학습에 대한 자주 묻는 질문들을 모아놓았습니다.",
  openGraph: {
    title: "자주 묻는 질문",
    description: "일본어 글자와 영어 단어 학습에 대한 자주 묻는 질문들을 모아놓았습니다."
  }
};

/**
 * FAQ 페이지의 레이아웃 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 자식 컴포넌트
 * @returns {JSX.Element} 레이아웃 컴포넌트
 */
export default function FAQLayout({ children }) {
  return children;
} 