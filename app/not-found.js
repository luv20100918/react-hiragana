"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "페이지를 찾을 수 없습니다",
  description: "요청하신 페이지를 찾을 수 없습니다. 홈으로 돌아가 다시 시도해주세요.",
};

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-9xl font-bold mb-4">404</div>
      <h1 className="text-4xl font-bold mb-2">페이지를 찾을 수 없습니다</h1>
      <p className="text-gray-600 mb-8 text-center">
        요청하신 페이지를 찾을 수 없습니다.<br />
        홈으로 돌아가 다시 시도해주세요.
      </p>
      <Button
        size="lg"
        onClick={() => router.push("/")}
        className="gap-2"
      >
        <Home size={20} />
        홈으로 돌아가기
      </Button>
    </div>
  );
} 