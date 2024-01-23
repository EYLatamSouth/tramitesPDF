import { environment } from "../Entorno/Entorno";

export const getReqUrl = () => {
  switch (environment) {
    case "local": {
      console.log(`Servidor local iniciado`);
      const url = "http://localhost:3000/";
      return url;
    }

    case "testing": {
      /*--------- QA --------- */
      const url =
        "https://osde-dev.prod.apimanagement.us10.hana.ondemand.com/v1/CPI/getGSC_PDF";
      console.log(`Se hará petición al endpoint ${url}`);
      return url;
    }

    case "production": {
      /*--------- PROD --------- */
      const url =
        "https://apimanagementosde.prod.apimanagement.us10.hana.ondemand.com/v1/CPI/getGSC_PDF";
      return url;
    }
  }
};
