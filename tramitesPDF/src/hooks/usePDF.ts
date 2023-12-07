import { useEffect, useState } from "react";
//import { config as envConfig } from "../Entorno/Entorno";

// import data from "../apis/test-contratos-baja-3833.json";
//import data from "../apis/test-response-userDetails.json";
import axios from "axios";


const usePDF = (tramite: string | null, usuario: string | null) => {
  const [result, setResult] = useState("");
 
  useEffect(() => {
    //if (envConfig) {
      /*                 Deploy                    */
      axios.get(`https://osde-dev.prod.apimanagement.us10.hana.ondemand.com/v1/CPI/getGSC_PDF?tramite=${tramite}&usuario=${usuario}&system=C4C`, {
        headers: {
        "Content-Type": "application/json",
        referer: "https://sap-integration-suite-y97uqswe.launchpad.cfapps.us10.hana.ondemand.com",
        }
    })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((response: any) => setResult(response.data))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) => {
          console.error(error);
        });
    //} else {
      /*                 Local                    */
      // setResult(data.results[0]);
    //}
  }, []);
 console.log("USEPDF:", result)
  return {
    result
  };
};
 
export default usePDF;