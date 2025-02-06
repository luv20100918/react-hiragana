"use client";

import { useState, useEffect, Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import QuizResult from "@/components/quiz-result";
import { getRandomCharacters, getRandomEnglishWords } from "@/lib/quiz-utils";
import { Settings, XCircle } from "lucide-react";
import Advertisement from "@/components/advertisement";
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
  const mode = searchParams.get("mode");
  
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
    if (type === "english") {
      if (!mode) {
        router.push("/");
        return;
      }
      setQuestions(getRandomEnglishWords(mode));
    } else {
      setQuestions(getRandomCharacters(type));
    }
  }, [type, mode]);

  /**
   * 정답 체크 핸들러
   */
  function handleCheck() {
    const currentQuestion = questions[currentQuestionIndex];
    let isAnswerCorrect;
    let correctAnswerValue;
    
    if (type === "english") {
      isAnswerCorrect = answer.toLowerCase() === currentQuestion.answer.toLowerCase();
      correctAnswerValue = currentQuestion.answer;
    } else {
      isAnswerCorrect = answer.toLowerCase() === currentQuestion.romanization.toLowerCase();
      correctAnswerValue = currentQuestion.romanization;
    }
    
    setIsCorrect(isAnswerCorrect);
    
    const newResult = {
      character: type === "english" ? currentQuestion.question : currentQuestion.character,
      answer,
      correct: isAnswerCorrect,
      correctAnswer: correctAnswerValue
    };
    
    setResults(prev => [...prev, newResult]);
    setAnswer("");
    
    if (currentQuestionIndex === questions.length - 1) {
      // 마지막 문제일 때 최종 점수 계산
      const allResults = [...results, newResult];
      const correctCount = allResults.filter(r => r.correct).length;
      const finalScore = Math.round((correctCount / questions.length) * 100); // 100점 만점으로 계산
      
      const wrongAnswers = allResults.filter(r => !r.correct);
      const encodedWrongAnswers = encodeURIComponent(JSON.stringify(wrongAnswers));
      const queryParams = new URLSearchParams();
      queryParams.append("type", type);
      if (type === "english") {
        queryParams.append("mode", mode);
      }
      queryParams.append("score", finalScore);
      queryParams.append("wrong", encodedWrongAnswers);
      router.push(`/result?${queryParams.toString()}`);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      if (isAnswerCorrect) {
        setScore(prev => prev + Math.round(100 / questions.length));
      }
    }
  }

  /**
   * 입력 핸들러
   * @param {Event} e - 입력 이벤트
   */
  function handleInput(e) {
    setAnswer(e.target.value);
  }

  if (!questions.length) return null;
  const currentQuestion = questions[currentQuestionIndex];
  const questionText = type === "english" ? currentQuestion.question : currentQuestion.character;

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
          {questionText}
        </div>
        
        <div className="flex gap-4 w-full max-w-md">
          <Input
            value={answer}
            onChange={handleInput}
            placeholder={type === "english" ? 
              mode === "word_to_meaning" ? "한글 뜻을 입력하세요" : "영어 단어를 입력하세요" :
              "발음을 입력하세요 (영어만 가능)"
            }
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
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

        <Advertisement />

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