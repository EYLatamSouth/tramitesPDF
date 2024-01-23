import axios from "axios";
 
//const refererQAHeader = "https://sap-integration-suite-y97uqswe.launchpad.cfapps.us10.hana.ondemand.com";
const refererPRODHeader = "https://sap-integration-suite-prod-xt32o9ka.launchpad.cfapps.us10.hana.ondemand.com";
 
export const api = (tramite: string, usuario: string) =>
  axios.create({
    /* ambiente PROD */
    baseURL: `https://apimanagementosde.prod.apimanagement.us10.hana.ondemand.com/v1/CPI/getGSC_PDF?tramite=${tramite}&usuario=${usuario}&system=C4C`,

    /* ambiente QA */
    //baseURL: `https://osde-dev.prod.apimanagement.us10.hana.ondemand.com/v1/CPI/getGSC_PDF?tramite=${tramite}&usuario=${usuario}&system=C4C`,
    headers: {
      "Content-Type": "application/json",
      referer: refererPRODHeader,
    },
  });