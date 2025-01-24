/**
 * 퀴즈 결과 컴포넌트
 * @param {Object} props
 * @param {Array} props.results - 퀴즈 결과 배열
 * @returns {JSX.Element}
 */
function QuizResult({ results }) {
  if (!results.length) return null;

  const correctCount = results.filter(r => r.correct).length;
  const totalCount = results.length;

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">결과</h2>
      <div className="space-y-2">
        <div className="text-lg">
          정답률: {Math.round((correctCount / totalCount) * 100)}%
        </div>
        <div className="space-y-2">
          {results.map((result, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg ${
                result.correct ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <span className="text-2xl mr-4">{result.character}</span>
              <span className="mr-2">입력: {result.answer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizResult; 