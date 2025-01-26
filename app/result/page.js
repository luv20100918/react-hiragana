"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, RotateCcw } from "lucide-react";
import Script from "next/script";

/**
 * 결과 페이지 컴포넌트
 * @returns {JSX.Element} 결과 페이지 UI
 */
function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get("type");
  const score = parseInt(searchParams.get("score") || "0");
  const wrongAnswersParam = searchParams.get("wrong");
  const wrongAnswers = wrongAnswersParam ? JSON.parse(decodeURIComponent(wrongAnswersParam)) : [];
  
  const typeText = type === "hiragana" ? "히라가나" : "가타카나";

  /**
   * 다시 시작 핸들러
   */
  function handleRetry() {
    router.push(`/quiz?type=${type}`);
  }

  /**
   * 홈으로 이동 핸들러
   */
  function handleHome() {
    router.push("/");
  }

  return (
    <>
      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WEP2FL9ZDS" />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WEP2FL9ZDS');
          `,
        }}
      />

      {/* Google AdSense */}
      <Script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5768884488453878"
        crossOrigin="anonymous"
      />

      <div className="min-h-screen p-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold">학습 완료!</h1>
            <p className="text-2xl">{typeText} 학습을 완료했습니다.</p>
            <div className="text-6xl font-bold text-primary mt-8">
              {score}점
            </div>
            <p className="text-gray-600 mt-2">
              {score === 100 ? 
                "완벽합니다! 모든 문제를 맞추셨네요!" :
                score >= 90 ? 
                  "훌륭합니다! 조금만 더 연습하면 완벽할 거예요!" :
                  score >= 80 ?
                    "잘하셨습니다! 틀린 부분을 복습해보세요!" :
                    "다시 한번 연습해보세요!"
              }
            </p>
          </div>

          {/* AdSense 광고 */}
          <div className="my-8">
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-5768884488453878"
              data-ad-slot="9551132248"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
            <Script
              id="adsbygoogle-init"
              dangerouslySetInnerHTML={{
                __html: `
                  (adsbygoogle = window.adsbygoogle || []).push({});
                `,
              }}
            />
          </div>

          {wrongAnswers.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">틀린 문제 복습</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {wrongAnswers.map((wrong, index) => (
                  <div 
                    key={index}
                    className="bg-red-50 rounded-lg p-4 text-center"
                  >
                    <div className="text-4xl mb-2">{wrong.character}</div>
                    <div className="text-sm text-gray-600">
                      정답: {wrong.correctAnswer}
                    </div>
                    <div className="text-sm text-red-500">
                      입력: {wrong.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handleHome}
              className="gap-2"
            >
              <Home size={20} />
              홈으로
            </Button>
            <Button
              size="lg"
              onClick={handleRetry}
              className="gap-2"
            >
              <RotateCcw size={20} />
              다시 시작
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage; 