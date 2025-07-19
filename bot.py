# BOT: Simulate automated form filling (no human-like interaction)
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

print("[BOT] Running script...")

# Set up Chrome browser options
options = webdriver.ChromeOptions()
options.headless = False  # Keep browser visible
driver = webdriver.Chrome(options=options)

print("[BOT] Opening form page...")
driver.get("file:///Users/dexter/Documents/GitHub/Transactly/html/ekyc.html")

# Delay for 3 seconds
time.sleep(3)


# Fill in eKYC form fields by order (no IDs, use form and input/select order)
print("[BOT] Filling in eKYC form fields...")
try:
    form = driver.find_element(By.ID, "ekycForm")
    inputs = form.find_elements(By.CSS_SELECTOR, "input")
    selects = form.find_elements(By.CSS_SELECTOR, "select")

    # Personal Info
    inputs[0].send_keys("Bot User")  # Full Name
    selects[0].send_keys("Malaysia")  # Nationality
    selects[1].send_keys("Malaysia")  # Country of Residence
    inputs[1].send_keys("1990-01-01")  # Date of Birth
    selects[2].send_keys("Male")  # Gender

    # ID Verification
    selects[3].send_keys("NRIC")  # ID Type
    inputs[2].send_keys("BOT123456")  # ID Number

    # Contact
    inputs[3].send_keys("0123456789")  # Mobile Number
    inputs[4].send_keys("bot@example.com")  # Email Address

    # eWallet Info
    selects[4].send_keys("Touch 'n Go")  # eWallet
    inputs[5].send_keys("EWALLET123")  # eWallet Account ID
    inputs[6].send_keys("Bot User")  # Account Holder Name

    print("[BOT] Form filled. You can now interact with the interface manually.")
    # The form is NOT auto-submitted, so you can review or interact with the page.
except Exception as e:
    print(f"[BOT] Error: {e}")

print("[BOT] Script finished. Browser will remain open for inspection.")
input("[BOT] Press Enter in terminal to close the browser...")
# driver.quit()
