import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NewQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';


const AllQuotes = () =>{
    const { sendRequest, status, data:loadedQuotes,error  } = useHttp(getAllQuotes, true);

    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

    if(status === 'pending'){
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if(error){
        return <p className='centerd focused'>{error}</p>
    }

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length ===0)){
        return <NewQuotesFound />
    }

    return <QuoteList quotes={loadedQuotes} />
};

export default AllQuotes;