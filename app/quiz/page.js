"use client";

import { useState, useEffect, Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import QuizResult from "@/components/quiz-result";
import { getRandomCharacters } from "@/lib/quiz-utils";
import { Settings, XCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

/**
 * 퀴즈 페이지 컴포넌트
 * @returns {JSX.Element} 퀴즈 페이지 UI
 */
function QuizContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get("type");
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [results, setResults] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    if (!type) {
      router.push("/");
      return;
    }
    setQuestions(getRandomCharacters(type));
  }, [type]);

  /**
   * 정답 체크 핸들러
   */
  function handleCheck() {
    const currentQuestion = questions[currentQuestionIndex];
    const correct = answer.toLowerCase() === currentQuestion.romanization.toLowerCase();
    setIsCorrect(correct);
    
    const newResult = {
      character: currentQuestion.character,
      answer,
      correct,
      correctAnswer: currentQuestion.romanization
    };
    
    setResults(prev => [...prev, newResult]);
    setAnswer("");
    
    if (currentQuestionIndex === questions.length - 1) {
      // 마지막 문제일 때 최종 점수 계산
      const allResults = [...results, newResult];
      const correctCount = allResults.filter(r => r.correct).length;
      const finalScore = correctCount * 4; // 맞은 개수 × 4점
      
      const wrongAnswers = allResults.filter(r => !r.correct);
      const encodedWrongAnswers = encodeURIComponent(JSON.stringify(wrongAnswers));
      router.push(`/result?type=${type}&score=${finalScore}&wrong=${encodedWrongAnswers}`);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      if (correct) {
        setScore(prev => prev + 4);
      }
    }
  }

  /**
   * 영어 입력만 허용하는 핸들러
   * @param {Event} e - 입력 이벤트
   */
  function handleInput(e) {
    // 영어와 공백만 허용하는 정규식
    const englishOnly = /^[a-zA-Z\s]*$/;
    if (!englishOnly.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
      return;
    }
    setAnswer(e.target.value.toLowerCase());
  }

  if (!questions.length) return null;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen p-4">
      <div className="absolute top-4 right-4 flex gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-red-500 hover:text-red-700"
            >
              <XCircle size={24} />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>학습을 포기하시겠습니까?</AlertDialogTitle>
              <AlertDialogDescription>
                지금 포기하시면 현재까지의 진행상황이 저장되지 않습니다.
                정말로 포기하시겠습니까?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>계속하기</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 hover:bg-red-700"
                onClick={() => router.push("/")}
              >
                포기하기
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/settings")}
        >
          <Settings size={24} />
        </Button>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        <div className="text-2xl font-bold">현재 점수: {score}점</div>
        
        <div className="text-9xl font-bold">
          {currentQuestion.character}
        </div>
        
        <div className="flex gap-4 w-full max-w-md">
          <Input
            value={answer}
            onChange={handleInput}
            placeholder="발음을 입력하세요 (영어만 가능)"
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
            pattern="[A-Za-z\s]+"
            className="font-mono"
          />
          <Button 
            onClick={handleCheck}
            className={
              isCorrect === null ? "" :
              isCorrect ? "bg-green-500" : "bg-red-500"
            }
          >
            확인
          </Button>
        </div>

        <div className="w-full">
          <h2 className="text-xl font-bold mb-4">진행 상황</h2>
          <div className="flex gap-8">
            <div className="text-lg text-green-600">
              맞은 문제: {results.filter(r => r.correct).length}개
            </div>
            <div className="text-lg text-red-600">
              틀린 문제: {results.filter(r => !r.correct).length}개
            </div>
            <div className="text-lg">
              남은 문제: {questions.length - currentQuestionIndex - 1}개
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuizContent />
    </Suspense>
  );
} 