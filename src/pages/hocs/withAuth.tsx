// import { USER_LOGIN } from '@/constants';
// import { routeVerify } from '@/services/api';
// import { useRequest } from '@umijs/max';
// import { Navigate, history } from 'umi';

const withAuth = (Components: any) => {
  //   const routeCode = history.location.pathname;
  //   const {
  //     data: { stat },
  //   } = useRequest(() => routeVerify({ routeCode }));

  //   if (stat === 'ok') {
  //     return <Components />;
  //   } else {
  //     return <Navigate to={USER_LOGIN} />;
  //     }
  //   return <>{stat === 'ok' ? <Components /> : <Navigate to={USER_LOGIN} />}</>;
  return <Components />;
};

export default withAuth;
