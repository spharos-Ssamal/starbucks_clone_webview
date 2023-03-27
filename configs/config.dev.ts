import getConfigs from "./config.common";

const baseUrl = "http://starbucks.ssamal-dev.kro.kr";
const mode = "dev";

const configDev = getConfigs({
  baseUrl,
  mode,
});

export default configDev;
