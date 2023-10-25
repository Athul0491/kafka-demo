const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("admin connecting...");
  await admin.connect();
  console.log("admin connected");

  console.log("creating topic rider-updates");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("created topics");

  await admin.disconnect();
}

init();
