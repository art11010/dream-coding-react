import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  // 로그인한 사용자가 있는지 확인
  // 그 사용자가 어드민 권한이 있는지 확인
  // requireAdmin이 true인 경우 : 로그인, 어드민 권한 둘다 true
  // 조건에 맞지 앟으면 / 상위 경로로 이동
  // 조건에 맞는 경우 전달된 children을 보여줌
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
