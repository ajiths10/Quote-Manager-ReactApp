import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1' ,author: 'Kyle', text: 'Learning React is fun!' },
    { id: 'q2' ,author: 'pretty', text: 'Learning React is great!' },
    { id: 'q3' ,author: 'booby', text: 'Learning React is cool!' },
];

const AllQuotes = () =>{
    return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;