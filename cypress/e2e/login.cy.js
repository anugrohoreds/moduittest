describe("Moduit Login Page Test",()=>{

    //Login normal
    it("Login Normal",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_in")
        cy.get("#userEmail").type("excavivaldo@gmail.com")
        cy.get("._euwm2vb").click()
        cy.get("#userPassword").type("@Amoranews1#")
        cy.get("._euwm2vb").click()
        cy.get("._1rx5jp6n").click()
        cy.get("#welcomeBtn").click()
    })

    //Login dengan email invalid
    it("Login dengan Email Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_in")
        cy.get("#userEmail").type("excavivaldo.com")
        cy.get("._euwm2vb").click()
        cy.get("#userPassword").type("@Amoranews1#")
        cy.get("._euwm2vb").click()
        cy.get("._1rx5jp6n").click()
        cy.get("#welcomeBtn").click()
    })

    //Login dengan email kosong
    it("Login Tanpa Email",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_in")
        cy.get("._euwm2vb").click()
        cy.get("#userPassword").type("@Amoranews1#")
        cy.get("._euwm2vb").click()
        cy.get("._1rx5jp6n").click()
        cy.get("#welcomeBtn").click()
    })

    //Login dengan password invalid
    it("Login dengan Password Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_in")
        cy.get("#userEmail").type("excavivaldo@gmail.com")
        cy.get("._euwm2vb").click()
        cy.get("#userPassword").type("q")
        cy.get("._euwm2vb").click()
        cy.get("._1rx5jp6n").click()
        cy.get("#welcomeBtn").click()
    })

    //Login tanpa password
    it("Login Tanpa Password",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_in")
        cy.get("#userEmail").type("excavivaldo@gmail.com")
        cy.get("._euwm2vb").click()
        cy.get("._euwm2vb").click()
        cy.get("._1rx5jp6n").click()
        cy.get("#welcomeBtn").click()
    })

    //Login dengan akun tak terdaftar
    it("Login dengan Akun Tak Terdaftar",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_in")
        cy.get("#userEmail").type("jurgenklopp@gmail.com")
        cy.get("._euwm2vb").click()
        cy.get("#userPassword").type("@Amoranews1#")
        cy.get("._euwm2vb").click()
        cy.get("._1rx5jp6n").click()
        cy.get("#welcomeBtn").click()
    })
})