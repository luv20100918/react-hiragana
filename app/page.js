"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Settings, HelpCircle } from "lucide-react";

/**
 * 메인 페이지 컴포넌트
 * @returns {JSX.Element} 메인 페이지 UI
 */
function MainPage() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState("");
  const [selectedMode, setSelectedMode] = useState("");

  /**
   * 학습 시작 핸들러
   */
  function handleStart() {
    if (!selectedType || (selectedType === "english" && !selectedMode)) return;
    const queryParams = new URLSearchParams();
    queryParams.append("type", selectedType);
    if (selectedType === "english") {
      queryParams.append("mode", selectedMode);
    }
    router.push(`/quiz?${queryParams.toString()}`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <div className="absolute top-4 right-4 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/faq")}
          className="text-gray-600"
        >
          <HelpCircle size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/settings")}
        >
          <Settings size={24} />
        </Button>
      </div>

      <h1 className="text-3xl font-bold">언어 학습</h1>
      
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-4">
          <Button 
            variant={selectedType === "hiragana" ? "default" : "outline"}
            onClick={() => {
              setSelectedType("hiragana");
              setSelectedMode("");
            }}
          >
            히라가나
          </Button>
          <Button
            variant={selectedType === "katakana" ? "default" : "outline"}
            onClick={() => {
              setSelectedType("katakana");
              setSelectedMode("");
            }}
          >
            가타카나
          </Button>
          <Button
            variant={selectedType === "english" ? "default" : "outline"}
            onClick={() => setSelectedType("english")}
          >
            영어 단어
          </Button>
        </div>

        {selectedType === "english" && (
          <div className="flex gap-4">
            <Button
              variant={selectedMode === "word_to_meaning" ? "default" : "outline"}
              onClick={() => setSelectedMode("word_to_meaning")}
            >
              영어 → 한글
            </Button>
            <Button
              variant={selectedMode === "meaning_to_word" ? "default" : "outline"}
              onClick={() => setSelectedMode("meaning_to_word")}
            >
              한글 → 영어
            </Button>
          </div>
        )}
      </div>

      <Button 
        size="lg"
        onClick={handleStart}
        disabled={!selectedType || (selectedType === "english" && !selectedMode)}
      >
        학습 시작
      </Button>

      <footer className="absolute bottom-4 text-center text-sm text-gray-500">
        <p>문의사항이 있으신가요? <button onClick={() => router.push("/faq")} className="text-primary hover:underline">자주 묻는 질문</button>을 확인해보세요.</p>
      </footer>
    </div>
  );
}

export default MainPage;
