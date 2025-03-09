export class LeftPannel{

    private leftpanneladmin =':nth-child(1) > .oxd-main-menu-item'
 private leftpannelPim=':nth-child(2) > .oxd-main-menu-item'
  

    public step_clickAdmin(){
        cy.get(this.leftpanneladmin).click();
        return this;
    }

    public step_leftpannelPim(){
        cy.get(this.leftpannelPim).click();
        return this;
    }

}