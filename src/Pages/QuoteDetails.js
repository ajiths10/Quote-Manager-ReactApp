import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1' ,author: 'Kyle', text: 'Learning React is fun!' },
    { id: 'q2' ,author: 'pretty', text: 'Learning React is great!' },
    { id: 'q3' ,author: 'booby', text: 'Learning React is cool!' },
];

const QuotesDetails = () =>{
   const params = useParams();
   const quote = DUMMY_QUOTES.find((quote)=> quote.id === params.quotesId);

   if(!quote){
       return <p>No quote found!</p>
   }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quotesId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
};

export default QuotesDetails;