describe("리스트 추가 테스트", () => {
  it("1. 메인화면 접속", () => {
    cy.visit("http://localhost:3000/");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("리스트 추가", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000/");
    cy.get("img").click();
    cy.get("#\\:r0\\:").clear("1번 리스트입니다");
    cy.get("#\\:r0\\:").type("1번 리스트입니다");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get("img").click();
    cy.get("#\\:r1\\:").clear("2");
    cy.get("#\\:r1\\:").type("2번 리스트입니다");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get("img").click();
    cy.get("#\\:r2\\:").clear("3");
    cy.get("#\\:r2\\:").type("3번 리스트입니다");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:r3\\:").clear("1");
    cy.get("#\\:r3\\:").type("1번 1");
    cy.get("#\\:r4\\:").click();
    cy.get("#\\:r4\\:").type("1번 1");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:r5\\:").clear("1");
    cy.get("#\\:r5\\:").type("1번 2");
    cy.get("#\\:r6\\:").click();
    cy.get("#\\:r6\\:").type("1번 2");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.contains("2번 리스트").click().click();

    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:r7\\:").clear("1");
    cy.get("#\\:r7\\:").type("2번 1");
    cy.get("#\\:r8\\:").click();
    cy.get("#\\:r8\\:").type("2번 1");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:r9\\:").clear("2");
    cy.get("#\\:r9\\:").type("2번 2");
    cy.get("#\\:ra\\:").click();
    cy.get("#\\:ra\\:").type("2번 2");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.contains("3번 리스트").click().click();

    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:rb\\:").clear("3");
    cy.get("#\\:rb\\:").type("3번 1");
    cy.get("#\\:rc\\:").click();
    cy.get("#\\:rc\\:").type("3번 1");
    cy.get(".MuiButton-outlinedPrimary").click();
    cy.get(
      ".DetailView__ToDoHeader-sc-1ishr44-1 > .StyledButton-sc-y2s5j5-0"
    ).click();
    cy.get("#\\:rd\\:").clear("3");
    cy.get("#\\:rd\\:").type("3번 2");
    cy.get("#\\:re\\:").click();
    cy.get("#\\:re\\:").type("3번 2");
    cy.get(".MuiButton-outlinedPrimary").click();
    /* ==== End Cypress Studio ==== */
  });
});

export {};
