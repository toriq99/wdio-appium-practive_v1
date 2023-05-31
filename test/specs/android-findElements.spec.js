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

    it.only('find elements by class', async() => {

        // find elements by class
        const className = await $('android.widget.TextView')

        // assertion
        await expect(className).toHaveText("API Demos")
    })
})