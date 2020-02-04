
describe("Test that the homepage loads and that we can redirect to register page", () => {
    it("visit the homepage", () => {
    //test that we can visit our home page.
        cy.visit("http://localhost:3000")
    //test that the page contains username and password. 
        cy.contains("Username")
        cy.contains("Password")
    //test that their is a register button that we can click. 
        cy.contains("Register").click()
    //test that after clicking we can redirect to our register page. 
        cy.url().should("include", "/register")
    })
})

