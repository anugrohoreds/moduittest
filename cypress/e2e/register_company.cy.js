describe("Moduit Registrasi Akun Perusahaan",()=>{

    //Registrasi normal
    it("Registrasi Normal",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha819@gmail.com")
        cy.get("#fullname").type("PT. Abal-Abal, Tbk")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click({force: true})
    })

    //Registrasi dengan email invalid
    it("Registrasi Email Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha.com")
        cy.get("#fullname").type("PT. Abal-Abal, Tbk")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan email kosong
    it("Registrasi Email Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#fullname").type("PT. Abal-Abal, Tbk")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan fullname invalid
    it("Registrasi Invalid Fullname",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha819@gmail.com")
        cy.get("#fullname").type("q")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan fullname kosong
    it("Registrasi Fullname Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha819@gmail.com")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan password invalid
    it("Registrasi Password Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha819@gmail.com")
        cy.get("#fullname").type("PT. Abal-Abal, Tbk")
        cy.get("#password").type("x")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Regisrasi dengan password kosong
    it("Registrasi Password Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha819@gmail.com")
        cy.get("#fullname").type("PT. Abal-Abal, Tbk")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan konfirmasi password invalid
    it("Registrasi Konfirmasi Password Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha819@gmail.com")
        cy.get("#fullname").type("PT. Abal-Abal, Tbk")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("x")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan konfirmasi password kosong
    it("Registrasi Konfirmasi Password Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha819@gmail.com")
        cy.get("#fullname").type("PT. Abal-Abal, Tbk")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan nomor telepon invalid
    it("Registrasi Nomor Telepon Invalid",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha819@gmail.com")
        cy.get("#fullname").type("PT. Abal-Abal, Tbk")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("+ahmad_ganesha+")
        cy.get("._14epme4b").click({force: true})
    })

    //Registrasi dengan nomor telepon kosong
    it("Registrasi Nomor Telepon Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha819@gmail.com")
        cy.get("#fullname").type("PT. Abal-Abal, Tbk")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan form kosong
    it("Registrasi Form Kosong",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("._14epme4b").click()
    })

    //Registrasi dengan data yang sama
    it("Registrasi dengan Data yang Sama",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_up")
        cy.get('._e63c84z').click()
        cy.get("#email").type("ahmadganesha819@gmail.com")
        cy.get("#fullname").type("PT. Abal-Abal, Tbk")
        cy.get("#password").type("@Amoranews1#")
        cy.get("#confirmPassword").type("@Amoranews1#")
        cy.get("#phone").type("83830527930")
        cy.get("._14epme4b").click()
    })
})