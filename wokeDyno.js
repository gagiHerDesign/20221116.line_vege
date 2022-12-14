import fetch from 'node-fetch'

const interval = 13
const wakeUpDyno = (url) => {
  setInterval(() => {
    try {
      // HTTP GET request to the dyno's url
      fetch(url).then(() => console.log(`AN Fetching ${url}.`))
    } catch (err) { // catch fetch errors
      console.log(`Error fetching ${url}: ${err.message} 
            Will try again in ${interval} minutes...`)
    }
  }, interval * 60000)
}

export default wakeUpDyno
