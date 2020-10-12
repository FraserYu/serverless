module.exports.generate = (event, context, callback) => {
    console.log(event)
    try {
        for (const record of event.Records) {
          const messageAttributes = record.messageAttributes;
          console.log('OrderId is  -->  ', messageAttributes.orderId.stringValue);
          console.log('Message Body -->  ', record.body);
          const reqBody = JSON.parse(record.body)
          setTimeout( () => {
              console.log("Receipt is generated and sent to :" + reqBody.email)
          }, 20000)
        }
    } catch (error) {
        console.log(error);
    }
}


