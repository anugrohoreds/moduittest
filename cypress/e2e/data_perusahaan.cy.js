describe("Pengisian Data Perusahaan",()=>{

    //Pengisian Data Perusahaan
    it("Pengisian Data Perusahaan",()=>{
        cy.visit("https://reksa.moduit.id/idn/sign_in")
        const filePath = "sebaya_2.pdf";
        cy.get("#userEmail").type("ahmadganesha819@gmail.com")
        cy.get("._euwm2vb").click()
        cy.get("#userPassword").type("@Amoranews1#")
        cy.get("._euwm2vb").click()
        cy.get("._1rx5jp6n").click()
        cy.get("#welcomeBtn").click()
        cy.get("#companyProfile\.namaPerusahaan").type("PT. Hitam Putih, Tbk")
        cy.get(":nth-child(3) > ._gunn604 > ._hq7b6pj").select("Swasta")
        cy.get(":nth-child(5) > ._gunn604 > ._hq7b6pj").select("Reksadana")
        cy.get("#companyProfile\.nomorAkta").type("123456789")
        cy.get("#companyProfile\.tanggalBerdiri")
          .click()
          .get(".pika-button pika-day")
          .click()
          .should("have.value","03 Agustus 2023")
        cy.get("#companyProfile\.lokasiBerdiri").type("Tanah Abang")
        cy.get(':nth-child(5) > [style="margin-left: -6px; margin-right: -6px; display: flex; flex-wrap: wrap; flex-grow: 0; flex-shrink: 0; align-items: normal;"] > :nth-child(1) > ._gunn604 > ._19ks60l').attachFile(filePath)
        cy.get("#companyProfile\.npwp").type("9876543210")
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(7) > [style="margin-left: -6px; margin-right: -6px; display: flex; flex-wrap: wrap; flex-grow: 0; flex-shrink: 0; align-items: normal;"] > :nth-child(1) > ._gunn604 > ._19ks60l').attachFile(filePath)
        cy.get("#companyProfile\.noSKD").type("SK-12098-VII-2023")
        cy.get(':nth-child(9) > [style="margin-left: -6px; margin-right: -6px; display: flex; flex-wrap: wrap; flex-grow: 0; flex-shrink: 0; align-items: normal;"] > :nth-child(1) > ._gunn604 > ._19ks60l').attachFile(filePath)
        cy.get("#companyProfile\.nomorIndukBerusaha").type("2133")
        cy.get(':nth-child(3) > [style="margin-left: -6px; margin-right: -6px; display: flex; flex-wrap: wrap; flex-grow: 0; flex-shrink: 0; align-items: normal;"] > :nth-child(1) > ._gunn604 > ._19ks60l').attachFile(filePath)
        cy.get("._5a4cip").click()
        cy.get("#companyProfile\.alamatPerusahaan").type("Jl. Dewi Sartikia")
        cy.get(":nth-child(3) > ._gunn604 > ._hq7b6pj").select("Jawa Timur")
        cy.get(":nth-child(4) > ._gunn604 > ._hq7b6pj").select("Bojonegoro")
        cy.get("#companyProfile\.kodePosIns").type("62111")
        cy.get("#officerData\.namaDepanIns1").type("Fajar")
        cy.get("#officerData\.jabatan1").type("Pemilik")
        cy.get("#officerData\.phoneIns1").type("83830527930")
        cy.get("#officerData\.emailIns1").type("abalabal@gmail.com")
        cy.get("#officerData\.noIdentitasIns11").type("123456789012345")
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(8) > [style="margin-left: -6px; margin-right: -6px; display: flex; flex-wrap: wrap; flex-grow: 0; flex-shrink: 0; align-items: normal;"] > :nth-child(1) > ._gunn604 > ._19ks60l').attachFile(filePath)
        cy.get("#officerData\.npwpPIC1Insti").type("123456789012345")
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(10) > [style="margin-left: -6px; margin-right: -6px; display: flex; flex-wrap: wrap; flex-grow: 0; flex-shrink: 0; align-items: normal;"] > :nth-child(1) > ._gunn604 > ._19ks60l').attachFile(filePath)
        cy.get("._5a4cip").click()
        cy.get(":nth-child(1) > :nth-child(1) > :nth-child(2) > ._gunn604 > ._hq7b6pj").select("BNI")
        cy.get("#bankProfileIns\.bankBranchName1").type("Indonesia")
        cy.get("#bankProfileIns\.nomorRekening1").type("01234987065")
        cy.get("#bankProfileIns\.namaNasabah1").type("Suparman")
        cy.get(':nth-child(6) > [style="margin-left: -6px; margin-right: -6px; display: flex; flex-wrap: wrap; flex-grow: 0; flex-shrink: 0; align-items: normal;"] > :nth-child(1) > ._gunn604 > ._19ks60l').attachFile(filePath)
        cy.get(':nth-child(2) > :nth-child(1) > [style="box-sizing: border-box; min-height: 1px; position: relative; padding-left: 6px; padding-right: 6px; width: 100%; overflow: inherit; display: block; flex: 0 0 50%; max-width: 50%; margin-left: 0%; right: auto; left: auto;"] > ._gunn604 > ._hq7b6pj').select("SIUP Mikro")
        cy.get(':nth-child(3) > [style="margin-left: -6px; margin-right: -6px; display: flex; flex-wrap: wrap; flex-grow: 0; flex-shrink: 0; align-items: normal;"] > [style="box-sizing: border-box; min-height: 1px; position: relative; padding-left: 6px; padding-right: 6px; width: 100%; overflow: inherit; display: block; flex: 0 0 50%; max-width: 50%; margin-left: 0%; right: auto; left: auto;"] > ._gunn604 > ._hq7b6pj').select("Penjual Grosir & Pengecer")
        cy.get(':nth-child(4) > [style="margin-left: -6px; margin-right: -6px; display: flex; flex-wrap: wrap; flex-grow: 0; flex-shrink: 0; align-items: normal;"] > :nth-child(2) > ._gunn604 > ._hq7b6pj').select("<1 milyar/tahun")
        cy.get(":nth-child(3) > ._gunn604 > ._hq7b6pj").select("Investasi")
        cy.get(":nth-child(5) > ._gunn604 > ._hq7b6pj").select("Dana Pensiun")
        cy.get(":nth-child(7) > ._gunn604 > ._hq7b6pj").select("Diri Sendiri")
        cy.get("._5a4cip").click()
        cy.get(":nth-child(2) > ._gunn604 > ._1pg10lj1").select("jauh-jauh hari sebelumnya")
        cy.get(":nth-child(3) > ._gunn604 > ._hq7b6pj").select("Pas sampai tujuan baru googling, atau tanya penduduk sekitar")
        cy.get(":nth-child(4) > ._gunn604 > ._hq7b6pj").select("Peluang 50% Untuk Dapat Rp. 10 juta")
        cy.get('[style="box-sizing: border-box; min-height: 1px; position: relative; padding-left: 6px; padding-right: 6px; width: 100%; overflow: inherit; display: block; flex: 0 0 50%; max-width: 50%; margin-left: 0%; right: auto; left: auto;"] > ._gunn604 > ._hq7b6pj').select("Investasi")
        cy.get(":nth-child(7) > ._gunn604 > ._1pg10lj1").select("kurang dari 3 tahun mendatang")
        cy.get(":nth-child(2) > ._1qh7smw2 > ._10g6f05">svg>rect).check()
        cy.get("._5a4cip").click()
        cy.get('._tmzpmc > :nth-child(2)').click()
        cy.get('._19ks60l').attachFile(filePath)
        cy.get('._1p7rdg5p'>svg).check()
        cy.get('#a90e0f84-087f-44e1-aed0-3214965a7743-0').type()
    })
})