const { test, expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');
const DashboardPage = require('../pageObjects/DashboardPage');
const CartPage = require('../pageObjects/CartPage');

test.describe('SauceDemo Tests', () => {
    let loginPage;
    let dashboardPage;
    let cartPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        cartPage = new CartPage(page);
        await page.goto('https://www.saucedemo.com/');
    });

    test('User success login', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');

        // Validasi pengguna berada di dashboard
        await expect(dashboardPage.isOnDashboard()).resolves.toBeTruthy();

        // Ambil screenshot jika validasi berhasil
        await page.screenshot({ path: 'screenshots/dashboard.png' });
    });

    test('Add item to cart', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(dashboardPage.isOnDashboard()).resolves.toBeTruthy();
        
        // Tambahkan kode untuk menambahkan item ke cart
        await page.click('.inventory_item:first-child .btn_primary'); // Ganti selector sesuai dengan item yang ingin ditambahkan

        // Validasi item ditambahkan ke cart
        await expect(cartPage.getCartCount()).resolves.toBe('1'); // Ganti '1' jika menambahkan lebih dari satu item
    });
});
