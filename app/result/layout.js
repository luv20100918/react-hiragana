/**
 * 결과 페이지의 메타데이터
 */
export const metadata = {
  title: "학습 결과",
  description: "일본어 글자와 영어 단어 학습 결과를 확인하세요. 틀린 문제를 복습하고 더 나은 점수를 노려보세요!",
  openGraph: {
    title: "학습 결과",
    description: "일본어 글자와 영어 단어 학습 결과를 확인하세요. 틀린 문제를 복습하고 더 나은 점수를 노려보세요!"
  }
};

/**
 * 결과 페이지의 레이아웃 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 자식 컴포넌트
 * @returns {JSX.Element} 레이아웃 컴포넌트
 */
export default function ResultLayout({ children }) {
  return children;
} 