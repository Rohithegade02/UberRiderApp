import { lazy, Suspense } from 'react';
import BookingLoader from './BookingLoader';

const BookingPageContainer = lazy(() =>
  import('./BookingScreenContainer').then(m => ({
    default: m.BookingScreenContainer,
  })),
);
const BookingPage = () => {
  return (
    <Suspense fallback={<BookingLoader />}>
      <BookingPageContainer />
    </Suspense>
  );
};
export default BookingPage;
