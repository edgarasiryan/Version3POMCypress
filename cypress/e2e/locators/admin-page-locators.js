const adminPageLocators = {
    adminPageUrl: 'web/index.php/admin/viewSystemUsers',

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
    // ==== USER CREATION ====
    userRoleDropdown: '.oxd-select-text',                            
    userRoleOptionESS: '.oxd-select-dropdown',
    employeeNameInput: 'input[placeholder="Type for hints..."]',
    employeeNameOption: '.oxd-autocomplete-option',
    statusOptionEnabled: '.oxd-select-dropdown',
    usernameInput: 'input.oxd-input',
    passwordInput: 'input[type="password"]',
    confirmPasswordInput: 'input[type="password"]',
    saveButton: 'button[type="submit"]',
  
    // ==== USER EDITING ====
    userRowSelector: '.oxd-table-row',
    editIconSelector: 'i.oxd-icon.bi-pencil-fill',
    userPageEditButtons: '.oxd-button--secondary',

    // ==== User Search ====
    searchInput: '.oxd-input.oxd-input--active:nth-child(1)',
    searchButton: '.oxd-button--secondary',
    userList: '.oxd-table-card',
    userListCells: '.oxd-table-cell.oxd-padding-cell',
   
    // ==== CHANGE PASSWORD ====
    userChangePasswordChackBox: '.oxd-checkbox-wrapper input[type="checkbox"]',
    userChangePasswordField: 'input[type="password"]:first',
    userConfirmPasswordField: 'input[type="password"]:last',
    userPasswordHint: '.user-password-hint',
    userDataChangeSave: '.oxd-button--secondary',
    
  
    // ==== NOTIFICATIONS / VALIDATION ====
    userSuccessfullyMessage: '.oxd-text--p',
    userCreateSuccessfullyMessage:'.oxd-toast-content--success'
  };
  

export { adminPageLocators, adminBarBodyItems, usersTableLocators, userDataPageLocators }
