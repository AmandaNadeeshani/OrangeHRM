import {HomeDashboard} from '../Pages/HomeDashboard'
import {OrangeHRm} from "../Pages/testlogin"
import {Adminpage } from "../Pages/admin"

const loginpage = new OrangeHRm();
//onst homeDashboard = new HomeDashboard();
//const adminpage = new Adminpage();

describe('Home dashboard- test suite', () => {
   /* it('login with methods', () => {
        loginpage.visitURL()
        .step_enterUsername('Admin')
        .step_enterPassword('admin123')
        .step_clicklogin()

        homeDashboard.step_verifyHeaderText()
        .step_clickAdminmenu()
        
        adminpage.step_Adminverify()
    })*/
        it('Method to home page dashbord navigation', () => {
            loginpage.visitURL()
            .step_enterUsername('Admin')
            .step_enterPassword('admin123')
            .step_clicklogin()
    
            .step_verifyHeaderText()
            .step_clickAdminmenu()
            
            .step_Adminverify()

 })



})