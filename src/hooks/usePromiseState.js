const {useState, useEffect} = require("react");
const {Continuation} = require("../utils/continuation");

const usePromiseState = (fn, dependencies) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        let cancelled = false;
        let mostRecentResult;
        const handleResult = result => {
            if(cancelled){
                if(result instanceof Continuation) result.abort();
                return;
            }
            mostRecentResult = result;
            setData(result instanceof Continuation ? result.status : result);
            if(result instanceof Continuation) result.next.then(handleResult, handleResult);
        };
        fn().then(handleResult, handleResult);
        return () => {
            cancelled = true;
            if(mostRecentResult instanceof Continuation) {
                mostRecentResult.abort();
            }
        };
    }, dependencies);
    return data;
};

module.exports = usePromiseState;