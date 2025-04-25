const adminPageLocators = {
    //Admin Top Bar Header
    adminBreadcrumb: '.oxd-text--h6.oxd-topbar-header-breadcrumb-module',
    
    //Admin Top Bar Body
    adminTopBarTabItems: '.oxd-topbar-body-nav-tab-item',
    adminDropDownItems: '.oxd-topbar-body-nav-tab-link',
};

const adminBarBodyItems = {
    userManagement: 'User Management', 
    userInUserManagment: 'Users'
}

const usersTableLocators = {
    userNameCell: '.oxd-table-cell'
}

const userDataPageLocators = {
    userChangePasswordChackBox: '.oxd-checkbox-wrapper input[type="checkbox"]',
    userChangePasswordField: 'input[type="password"]:first',
    userConfirmPasswordField: 'input[type="password"]:last',
    userPasswordHint: '.user-password-hint',
    userDataChangeSave: '.oxd-button--secondary',
    userSuccessfullyMessage: '.oxd-text--p',
    userRowSelector: '.oxd-table-row',
    editIconSelector:'i.oxd-icon.bi-pencil-fill',
}

export { adminPageLocators, adminBarBodyItems, usersTableLocators, userDataPageLocators }
