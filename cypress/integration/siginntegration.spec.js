describe("Test our register Page and functionality", () => {
    it("visit the register page", () => {
        //test that we can visit our register page. 
        cy.visit("http://localhost:3000/")
        //test that we can validate the value of our various input fields. 
        cy.get(".username")
        .type("robbiethetester3")
        .should("have.value", "robbiethetester3")

        cy.get(".password")
            .type("robbiethetester3")
            .should("have.value", "robbiethetester3")
        //test that we are able to register a new user account by sending a post request. 
        cy.request("POST", "http://localhost:5000/users/login", {
            username: "robbiethetester3",
            password: "robbiethetester3"
        })
       
        cy.url().should("include", "/")
    })
})