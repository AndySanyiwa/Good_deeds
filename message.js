const random = (array) => {
    return array[Math.floor(Math.random()*array.length)]
}
const happy = ['be nice to','help','defend','uplift','console']
const event = ['died','stolen from you','broken something','done nothing','overslept']
const result = ['serve jailtime','go to school','live','surprise me','emerge victorious']

const randomHappy = random(happy)
const randomEvent = random(event)
const randomResult = random(result)
randomItem = []
randomItem.push(randomHappy,randomEvent,randomResult)

const generateMessage = (array) => {
    rNumber = Math.floor(Math.random()*array.length)
    randomM = array[rNumber]
    if (randomM===randomHappy) {
        console.log(`You must ${randomM} somebody today.`)
    } else if (randomM===randomEvent) {
        console.log(`Did you hear that somebody had ${randomM}`)
    } else if (randomM===randomResult) {
        console.log(`You're going to have to ${randomM}`)
    } else {
        console.log('Invalid input!')
    }
}
generateMessage(randomItem)
