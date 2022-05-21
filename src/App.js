import {Header} from './components/Header';
import {Container} from './components/Container';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
           <Header/>
      </QueryClientProvider>
      
      <Container/>
    </div>
  );
}

export default App;
