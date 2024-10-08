import { Fragment } from 'react';
import { useRouteError } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';

function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  if (error.status === 500 || error.status === 422) {
    if (typeof error.data === 'object') {
      message = error.data.message;
    } else {
      message = JSON.parse(error.data).message;
    }
  }

  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
}

export default ErrorPage;
