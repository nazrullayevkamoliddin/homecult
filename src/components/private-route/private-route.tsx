import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { loadState } from '../../utils/storage';

const withAuth = (WrappedComponent: NextPage) => {
  return (props: any) => {
    if (typeof window !== 'undefined') {
      const Router = useRouter();

      const user = loadState('user');

      if (!user?.isLoggedIn) {
        Router.back();
        return null;
      }

      return <WrappedComponent {...props} />;
    }
    return null;
  };
};

export default withAuth;
