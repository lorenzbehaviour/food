import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Berlin'
                }
            });
            setResults(response.data.businesses);
        }catch (err){
          alert('Sorry Something went wrong');
        }
  
    };

    useEffect(() => {
        searchApi("pasta");
        }, []);

        return [searchApi, results];
};