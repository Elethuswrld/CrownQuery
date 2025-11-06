import { Suspense } from 'react';
import ResultsPage from './ResultsPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsPage />
    </Suspense>
  );
}
