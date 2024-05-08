import { useQuery } from 'react-query';
import { fetcher } from './axios';


const ReactQuery = () => {
      const { isLoading, data } = useQuery("students", () => {
            return fetcher.get('/students')
      });
      console.log("Data: ", data?.data.data);
      return (
            <div>
                  Hello React Query
            </div>
      )
};
export default ReactQuery;