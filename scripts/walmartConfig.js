export const ELEMENTS = {
    addToCart:
        '//*[@id="add-on-atc-container"]/div[1]/section/div[1]/div[3]/button/span/span',
    checkOut:
        '//*[@id="cart-root-container-content-skip"]/div[1]/div/div[2]/div/div/div/div/div[3]/div/div/div[2]/div/div[2]/div/button[1]',
    continueWithoutAccount:
        "/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[1]/div/div/div/div/div[3]/div/div[1]/div/section/section/div/button/span",
    firstContinue:
        "/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[2]/div/div[2]/div/div/div/div[3]/div/div/div[2]/button/span",
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    address: "addressLineOne",
    addressTwo: "addressLineTwo",
    postalCode: "postalCode",
    phone: "phone",
    confirmInfo:
        "/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[3]/div[1]/div[2]/div/div/div/div[3]/div/div/div/div/div/form/div[2]/div[2]/button/span",
    creditCardNum: "creditCard",
    creditExpireMonth: "month-chooser",
    creditExpireYear: "year-chooser",
    creditCVV: "cvv",
    reviewOrder:
        "/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div/div[4]/div[1]/div[2]/div/div/div/div[3]/div[2]/div/div/div/div[2]/div/div/div/form/div[3]/div/button/span/span/span",
    confirmOrder:
        "/html/body/div[1]/div/div[1]/div/div[1]/div[3]/div/div/div[2]/div[1]/div[2]/div/div/div[2]/div/form/div/button",
};

// Set the endpoint in the index.js line:23 depending on which version you want
export const SITE = {
    digital:
        "https://www.walmart.com/ip/Sony-PlayStation-5-Digital-Edition/493824815",
    physical: "https://www.walmart.com/ip/PlayStation-5-Console/363472942",
};

export const FORM = {
    myFirstName: "John",
    myLastName: "Smith",
    myEmail: "mail@gmail.com",
    myAddress: "1234 Apple Lane",
    myAddressTwo: "", // Use this for apartment number. Use empty string if no apartment
    myPostalCode: "10002", // The autofill tends to be inaccurate for this field. Force it to use your correct zip
    myPhone: "1234567890", // Must be 10 digits
    myCreditCardNum: "123456789", // Make sure you use a real CC number here with testing or it will fail
    myCreditExpireMonth: "00",
    myCreditExpireYear: "2025", // Must be full year
    myCVV: "123",
};
