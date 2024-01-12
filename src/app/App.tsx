import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataPage, MainPage } from '../page';
import { LayoutPage } from '../page/ui/LayoutPage';
import { Spinner } from '../shared/Spinner/ui/Spinner';

export default function Stopwatch() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<LayoutPage />}>
            <Route index element={<MainPage />} />
            <Route path=':amount' element={<DataPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
