"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { HIRAGANA, KATAKANA } from "@/lib/quiz-utils";

/**
 * 설정 페이지 컴포넌트
 * @returns {JSX.Element} 설정 페이지 UI
 */
function SettingsPage() {
  const router = useRouter();
  const [excludedChars, setExcludedChars] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("excludedChars");
      return saved ? JSON.parse(saved) : { hiragana: [], katakana: [] };
    }
    return { hiragana: [], katakana: [] };
  });

  useEffect(() => {
    localStorage.setItem("excludedChars", JSON.stringify(excludedChars));
  }, [excludedChars]);

  /**
   * 문자 토글 핸들러
   * @param {string} type - "hiragana" 또는 "katakana"
   * @param {string} char - 토글할 문자
   */
  function toggleChar(type, char) {
    setExcludedChars(prev => {
      const newExcluded = { ...prev };
      if (newExcluded[type].includes(char)) {
        newExcluded[type] = newExcluded[type].filter(c => c !== char);
      } else {
        newExcluded[type] = [...newExcluded[type], char];
      }
      return newExcluded;
    });
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          뒤로 가기
        </Button>

        <h1 className="text-3xl font-bold mb-8">출제 문자 설정</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">히라가나</h2>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
              {HIRAGANA.map(({ character, romanization }) => (
                <Button
                  key={character}
                  variant={excludedChars.hiragana.includes(character) ? "outline" : "default"}
                  onClick={() => toggleChar("hiragana", character)}
                  className="h-16 text-xl relative group"
                >
                  {character}
                  <span className="absolute bottom-1 text-xs opacity-60 group-hover:opacity-100">
                    {romanization}
                  </span>
                </Button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">가타카나</h2>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
              {KATAKANA.map(({ character, romanization }) => (
                <Button
                  key={character}
                  variant={excludedChars.katakana.includes(character) ? "outline" : "default"}
                  onClick={() => toggleChar("katakana", character)}
                  className="h-16 text-xl relative group"
                >
                  {character}
                  <span className="absolute bottom-1 text-xs opacity-60 group-hover:opacity-100">
                    {romanization}
                  </span>
                </Button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage; 