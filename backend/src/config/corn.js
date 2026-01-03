import corn from "cron";
import https from "https";

const job = new corn.CronJob("*/14 * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) console.log("Get request send successfully");
      else console.log("Get request failed", res.statusCode);
    })
    .on("error", (e) => console.error("Error while sending requeest", e));
});
export default job;
