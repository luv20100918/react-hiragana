"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Settings } from "lucide-react";

/**
 * 메인 페이지 컴포넌트
 * @returns {JSX.Element} 메인 페이지 UI
 */
function MainPage() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState("");

  /**
   * 학습 시작 핸들러
   */
  function handleStart() {
    if (!selectedType) return;
    router.push(`/quiz?type=${selectedType}`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/settings")}
        >
          <Settings size={24} />
        </Button>
      </div>

      <h1 className="text-3xl font-bold">일본어 글자 학습</h1>
      
      <div className="flex gap-4">
        <Button 
          variant={selectedType === "hiragana" ? "default" : "outline"}
          onClick={() => setSelectedType("hiragana")}
        >
          히라가나
        </Button>
        <Button
          variant={selectedType === "katakana" ? "default" : "outline"}
          onClick={() => setSelectedType("katakana")}
        >
          가타카나
        </Button>
      </div>

      <Button 
        size="lg"
        onClick={handleStart}
        disabled={!selectedType}
      >
        학습 시작
      </Button>
    </div>
  );
}

export default MainPage;
