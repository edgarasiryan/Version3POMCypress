import BaseActions from "./base-actions"
import { adminPageLocators } from "../locators/admin-page-locators";
class UserPageActions {
    
    tryGetAdminPage() {
        new BaseActions().verifyForbiddenError(adminPageLocators.adminPageUrl);
    }

}
export default UserPageActions;