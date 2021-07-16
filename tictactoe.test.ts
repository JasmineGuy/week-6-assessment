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
    let upperLeft = await driver.findElement(By.id('cell-0'))
    upperLeft.click()
    expect(await upperLeft.getText()).toEqual('X')
    await driver.sleep(2000)
});

test('Upper Right square adds X', async ()=> {
    let upperRight = await driver.findElement(By.id('cell-2'))
    upperRight.click()
    expect(await upperRight.getText()).toEqual('X')
    await driver.sleep(2000)
});

test('lower right square adds X', async () =>{
    driver.navigate().refresh()
    await driver.sleep(2000)

    let button = await driver.findElement(By.id('start-game'))
    await button.click();

    const lowerRight = await  driver.findElement(By.id('cell-8'))
    lowerRight.click()

    expect(await lowerRight.getText()).toEqual('X')
    await driver.sleep(2000)
});


test('computer moves after user turn', async () => {
    const computerTurn = await driver.findElement(By.xpath('//td[text()="O"]'))
    let move = false;

    if(computerTurn.length){
        move = true
    }
    expect(move).toBeTruthy()
})