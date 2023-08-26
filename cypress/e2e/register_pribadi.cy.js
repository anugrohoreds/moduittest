describe("Moduit Registrasi Akun Pribadi",()=>{

    //Register
    it("Registrasi Normal",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("Agung Nugroho")
        cy.get("#email").type("excavivaldo@gmail.com")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan fullname invalid
    it("Registrasi Fullname Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("1")
        cy.get("#email").type("excavivaldo@gmail.com")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan fullname kosong
    it("Registrasi Fullname Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#email").type("excavivaldo@gmail.com")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan email invalid
    it("Registrasi Email Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("Agung Nugroho")
        cy.get("#email").type("excavivaldo.com")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan email kosong
    it("Registrasi Email Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("Agung Nugroho")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan password invalid
    it("Registrasi Password Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("Agung Nugroho")
        cy.get("#email").type("excavivaldo@gmail.com")
        cy.get("#password").type("a")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan password kosong
    it("Registrasi Password Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("Agung Nugroho")
        cy.get("#email").type("excavivaldo@gmail.com")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan konfirmasi password invalid
    it("Registrasi Konfirmasi Password Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("Agung Nugroho")
        cy.get("#email").type("excavivaldo@gmail.com")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("2")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan konfirmasi password kosong
    it("Registrasi Konfirmasi Password Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("Agung Nugroho")
        cy.get("#email").type("excavivaldo@gmail.com")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan nomor telepon invalid
    it("Registrasi Nomor Telepon Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("Agung Nugroho")
        cy.get("#email").type("excavivaldo@gmail.com")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("Kia-Chan")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan nomor telepon kosong
    it("Registrasi Nomor Telepon Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("Agung Nugroho")
        cy.get("#email").type("excavivaldo@gmail.com")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan form kosong
    it("Registrasi Form Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan data yang sama
    it("Registrasi Data yang Sama",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get("#fullname").type("Agung Nugroho")
        cy.get("#email").type("excavivaldo@gmail.com")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })
})