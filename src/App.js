import { Redirect, Route, Switch } from 'react-router-dom';
import AllQuotes from './Pages/AllQuotes';
import NewQuotes from './Pages/NewQuotes';
import QuotesDetails from './Pages/QuoteDetails';
import Layout from './components/layout/Layout';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Layout>
   <Switch>
     <Route path='/' exact>
       <Redirect to='/quotes' />
     </Route>
     <Route path='/quotes' exact>
       <AllQuotes />
     </Route>
     <Route path='/quotes/:quotesId'>
       <QuotesDetails />
     </Route>
     <Route path='/new-quote'>
       <NewQuotes />
     </Route>
     <Route path='*'>
       <NotFound />
     </Route>
   </Switch>
   </Layout>
  );
}

export default App;
