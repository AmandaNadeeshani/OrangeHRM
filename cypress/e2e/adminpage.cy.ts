import { Adminpage } from "../Pages/admin";
import { OrangeHRm } from "../Pages/testlogin"
const loginpage = new OrangeHRm();
const adminp = new Adminpage()
describe('admin page', () => {
    it('admin page verify', () => {
        loginpage.visitURL()
            .step_enterUsername('Admin')
            .step_enterPassword('admin123')
            .step_clicklogin()
            .step_clickAdminmenu()
            .step_typeUserName("Admin")
            .step_selectRole("Admin")
            .step_clicksubmit()
.step_verifyselectedRole()

    });



});
