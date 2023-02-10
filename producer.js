const { Kafka } = require("kafkajs");

createProducer();

async function createProducer() {
    try {
        const kafka = new Kafka({
            clientId: "kafka_example_1",
            brokers: ["10.40.136.171:9092"]
        });

        const producer = kafka.producer();
        console.log("Connecting to producer")

        await producer.connect();
        console.log("Producer connect success")

        const message_result = await producer.send({
            topic: "Logs",
            messages: [
                {
                    value: "This is a test log..",
                    partition: 0
                }
            ]
        });
        console.log("Sended message successfully", JSON.stringify(message_result));

        await producer.disconnect();
    } catch (error) {
        console.log("Error: ", error)
    } finally {
        process.exit(0);
    }
}