import { useEffect, useState } from "react";
import { config as envConfig } from "../Entorno/Entorno";
import { api } from "../services/config";


const usePDF = (tramite: string, usuario: string) => {
  const [result, setResult] = useState(new Blob);
 
  useEffect(() => {
    if (envConfig) {
      if (tramite !== ""  && usuario !== "") {
        api(tramite, usuario)
        // @ts-ignore
          .get()
          .then((response) => setResult(response.data))
          .catch((error) => {
            console.error(error);
          });
      }
    } else {
      /*                 Local                    */
      //setResult(data.results[0]);
    }
  }, [tramite]);
  return {
    result
  };
};
 
export default usePDF;