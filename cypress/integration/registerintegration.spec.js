
    it("visit the register page", () => {
        //test that we can visit our register page. 
        cy.visit("http://localhost:3000/register")
        //test that we can validate the value of our various input fields. 
        cy.get(".username")
        .type("robbiethetester3")
        .should("have.value", "robbiethetester3")
        
        cy.get(".email")
            .type("robbiethetester3@hotmail.com")
            .should("have.value", "robbiethetester3@hotmail.com")

        cy.get(".password")
            .type("robbiethetester3")
            .should("have.value", "robbiethetester3")
        //test that we are able to register a new user account by sending a post request. 
        cy.request("POST", "http://localhost:5000/users", {
            username: "robbiethetester3",
            email: "robbiethetester3@hotmail.com",
            password: "robbiethetester3"
        })describe("Test our register Page and functionality", () => {
       
        cy.url().should("include", "/")
    })
})