class DashboardPage {
    constructor(page) {
        this.page = page;
        this.pageTitle = '.title'; // Update the selector for the dashboard title
    }

    async isOnDashboard() {
        return await this.page.isVisible(this.pageTitle);
    }
}

module.exports = DashboardPage;
 
