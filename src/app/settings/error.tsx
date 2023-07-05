'use client'; // 에러 컴포넌트는 클라이언트 컴포넌트여야 합니다.

import { useEffect } from 'react';

interface iError {
  error: Error;
  reset: () => void;
}

export default function SettingsError({ error, reset }: iError) {
  useEffect(() => {
    // 에러를 오류 보고 시비스에 기록합니다.
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>문제가 발생했습니다!</h2>
      <button
        onClick={() => reset()} // 세그먼트 다시 렌더링을 시도하여 에러에서 복구합니다.
      >
        다시 시도하기
      </button>
    </div>
  );
}
