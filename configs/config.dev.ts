import getConfigs from "./config.common";

const baseUrl = "https://starbucks.ssamal.p-e.kr/";
const mode = "dev";

const configDev = getConfigs({
  baseUrl,
  mode,
});

export default configDev;
