const { Kafka } = require("kafkajs");

createConsumer();

async function createConsumer() {
    try {
        const kafka = new Kafka({
            clientId: "kafka_example_1",
            brokers: ["10.40.136.171:9092"]
        });

        const consumer = kafka.consumer({
            groupId: "example_1_cg_1"
        });
        console.log("Connecting to consumer")

        await consumer.connect();
        console.log("Consumer connect success")

        // Consumer Subscribe..
        await consumer.subscribe({
            topic: "Logs",
            fromBeginning: true
        });

        await consumer.run({
            eachMessage: async result => {
                console.log("Message received: ", result)
            }
        });

    } catch (error) {
        console.log("Error: ", error)
    }
}