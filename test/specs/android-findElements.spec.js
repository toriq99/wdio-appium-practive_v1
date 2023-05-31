describe('Android Elements test', () => {
    
    it('find elements by accessibility id', async() => {
        
        // find elements by accessibility id
        const appOption = await $('~App')

        // click an element
        await appOption.click()

        // assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting()
    })

    it('find elements by class', async() => {

        // find elements by class
        const className = await $('android.widget.TextView')

        // assertion
        await expect(className).toHaveText("API Demos")
    })

    it('find elements by xpath, resource-id, text, class', async() => {

        // find by xpath --> (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
        
        // find by resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()

        // find by text -- error invalid(?)
        // await $('//android.widget.TextView[@text:"Command two"]').click()
        
        // find by index
        await $('//android.widget.TextView[@index="1"]').click()

        // find by class and assertion
        const textAssertion = await $('//android.widget.TextView')

        await expect(textAssertion).toHaveText("You selected: 1 , Command two")
    })
})