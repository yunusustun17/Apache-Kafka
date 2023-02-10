const { Kafka } = require("kafkajs");

createTopic();

async function createTopic() {
    try {
        // Admin Stuff..
        const kafka = new Kafka({
            clientId: "kafka_example_1",
            brokers: ["10.40.136.171:9092"]
        });

        const admin = kafka.admin();
        console.log("Kafka connecting to Broker")

        await admin.connect();
        console.log("Kafka Broker connect success, Topic will be generate")

        await admin.createTopics({
            topics: [
                {
                    topic: "Logs",
                    numPartitions: 1
                },
                {
                    topic: "Logs2",
                    numPartitions: 2
                }
            ]
        })
        console.log("Topic created successfully")

        await admin.disconnect();
    } catch (error) {
        console.log("Error: ", error)
    } finally {
        process.exit(0);
    }
}