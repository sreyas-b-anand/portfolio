import { useEffect , useState } from "react";

function useFetch() {
    const [data , setData] = useState(null);
    const [isLoading , setIsloading] = useState(true);
    const [isError , setIsError] =useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/projects')
        .then((response) => {
          if(response.ok != true)
            {
              throw Error('Oops ... Sreyas is not willing to show his projects :(.Try again later')
            }
          console.log(response);
          return response.json();
          
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsloading(false);
  
        })
        .catch((error) => 
        {
            setIsError(true);
            console.log(error.message);
            setIsloading(false);
        })
    }, []);
    
return {data , isLoading , isError ,};
}
export default useFetch;