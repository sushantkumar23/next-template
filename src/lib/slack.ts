function sendSlackMessage(message: string) {
  try {
    if (!process.env.SLACK_WEBHOOK_URL) {
      console.log(
        '❌ No SLACK_WEBHOOK_URL env variable set, skipping slack notification'
      )
      return
    } else {
      fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          text: message
        })
      })
    }
  } catch (err: any) {
    console.log(`❌ Error posting to slack: ${err.message}`)
  }
}

export default sendSlackMessage
