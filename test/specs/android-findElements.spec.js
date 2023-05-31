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

        const className = await $('android.widget.TextView')

        console.log(await className.getText())
    })
})