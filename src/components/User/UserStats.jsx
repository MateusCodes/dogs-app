import React from 'react';
import Head from '../Utilities/Head';
import useFetch from '../../CustomHooks/useFetch';
import Loading from '../Utilities/Loading';
import Error from '../Utilities/Error';
import { GET_STATS } from '../../api/api';
const UserStatsGraphs = React.lazy(() => import('../Utilities/UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem('token');
      const { url, options } = GET_STATS(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
