describe("Test our register Page and functionality", () => {
    it("visit the register page", () => {
        //test that we can visit our register page. 
        cy.visit("http://localhost:3000/register")
        //test that we can validate the value of our various input fields. 
        cy.get(".username")
        .type("robbiethetester3")
        .should("have.value", "robbiethetester3")
        
        // TIP: test should be able to run multiple times with out any manual adjustment needed.
        // In this case you should make sure the email has something always diffrent in it so you don't
        // have to remove the user each time you want to test. A good way to do this is with a timestamp.

        // this returns the number of milliseconds that have passed since January 1, 1970.
        const timestamp = new Date().getTime();
        cy.get(".email")
            .type("robbiethetester3" + timestamp + "@hotmail.com")
            .should("have.value", "robbiethetester3" + timestamp +"@hotmail.com")

        cy.get(".password")
            .type("robbiethetester3")
            .should("have.value", "robbiethetester3")

        // TIP: This test does not prove if register is working for the standard user. When writing test
        // you should write them as if a user was trying to register. A user is very unlikely
        // going to send POST request manually, instead they will click the register button.
        // The test should get and click the register button then check if the page page redirected correctly.
        // The test should then login with that user make sure the user is directed to the correct page
        // to check if the account was created successfully.
        
        // test that we are able to register a new user account by sending a post request. 
        cy.request("POST", "http://localhost:5000/users", {
            username: "robbiethetester3",
            email: "robbiethetester3@hotmail.com",
            password: "robbiethetester3"
        })
       
        // doesn't the url always include a `/`?
        cy.url().should("include", "/")
    })
})