"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "자주 묻는 질문",
  description: "일본어 글자와 영어 단어 학습에 대한 자주 묻는 질문들을 모아놓았습니다.",
};

const faqs = [
  {
    question: "이 서비스는 무료인가요?",
    answer: "네, 모든 기능을 무료로 이용하실 수 있습니다."
  },
  {
    question: "히라가나와 가타카나 중 어떤 것부터 배워야 하나요?",
    answer: "일반적으로 히라가나를 먼저 학습하는 것을 추천드립니다. 히라가나는 일본어의 기초가 되는 문자이며, 가장 자주 사용됩니다."
  },
  {
    question: "영어 단어는 어떤 기준으로 선정되었나요?",
    answer: "자주 사용되는 중요 영어 단어들을 선별하여 제공하고 있습니다. 지속적으로 업데이트하여 더 많은 단어를 추가할 예정입니다."
  },
  {
    question: "학습 진도를 저장할 수 있나요?",
    answer: "현재는 개별 세션별로 진행되며, 브라우저를 닫으면 초기화됩니다. 향후 업데이트를 통해 진도 저장 기능을 추가할 예정입니다."
  },
  {
    question: "모바일에서도 사용할 수 있나요?",
    answer: "네, 모든 디바이스에서 최적화된 환경으로 이용하실 수 있습니다."
  },
  {
    question: "오프라인에서도 사용 가능한가요?",
    answer: "PWA(Progressive Web App) 기능을 지원하여 오프라인에서도 기본적인 기능을 이용하실 수 있습니다."
  }
];

export default function FAQPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          뒤로 가기
        </Button>

        <h1 className="text-3xl font-bold mb-8">자주 묻는 질문</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-bold mb-4">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 