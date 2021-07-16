import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get(`http://127.0.0.1:5500/tictacjs.html`)
})


afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Upper Left square adds X', async ()=> {
    let upperLeft = await driver.findElement(By.id('cell-0')).click()
    await driver.sleep(2000)
});

test('Upper Right square adds X', async ()=> {
    let upperLeft = await driver.findElement(By.id('cell-2')).click()
    await driver.sleep(2000)
});

test('Lower Right square adds X', async ()=> {
    let upperLeft = await driver.findElement(By.id('cell-8')).click()
    await driver.sleep(2000)
});

// test('computer moves when after users turn', async() => {
//     let upperLeft = await driver.findElement(By.id('cell-0')).click()
//     let computerMove = await driver.findElement(By.id('cell-1'))
//     expect(computerMove).toBe('value')
//     await driver.sleep(2000)
// })