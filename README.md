**Razor Pay (^2.3.0)**

This will require RN 0.60+
In Podfile platform must be 10.0

**Prerequisites**
 I) Create Rzorpay Account
ii) Generate API Keys in Test Mode. To go live with the integration and start accepting real payments, generate Live Mode API Keys and replace them in the integration.



**1). Create Account** 
 For test  mode  you can create account using your mobile, email and Pan.

But for live Mode it will need to complete KYC first. And for this will require following details:

Bank Details, Business Address, Identity Proof, Business Policy.


After created the account you will able to Generate Test Keys from Dashboard 

https://dashboard.razorpay.com/app/dashboard


**2). ROLL API Keys**
      
  You can roll the Live and Test mode API keys if you have lost them or exposed them. You can choose to regenerate the API keys by deactivating them immediately or after 24 hours.



**Steps to install**

Use following command to install the package in your project

npm install react-native-razorpay --save

In android it will auto link. For iOS go inside iOS folder from your terminal and use pod install.

Note : In the new M1 MacBook, if you not able to compile the React Native Razorpay plugin for release mode.
     Add following changes in Pod : 

installer.pods_project.build_configurations.each do |config|
config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
end

Reference: https://razorpay.com/docs/payments/payment-gateway/react-native-integration/standard/troubleshooting-faqs/#8-in-the-new-m1-macbook-why-am



After Installation is done then import RazorpayCheckout in your file.

**import RazorpayCheckout from 'react-native-razorpay';**

Call RazorpayCheckout.open method with the payment options.

To Call the RazorpayCheckout you need to provide options .
   E.g: currency, image, amount, key etc.

  Please check following link for all available options

https://razorpay.com/docs/payments/payment-gateway/react-native-integration/standard/build-integration-android/#14-add-razorpay-checkout-options-to-js-file


The  RazorpayCheckout.open method returns a JS Promise where then part corresponds to a successful payment and the catch part corresponds to payment failure.
   
	

**Limitation Test/Live Mode**

1). At present, you cannot make a test payment to a virtual UPI ID. This feature will be available soon.

https://razorpay.com/docs/payments/smart-collect/test-payments/#test-payment-to-a-virtual-upi-id


2). UPI payments should be tested in Live Mode.

https://razorpay.com/docs/payments/payment-gateway/react-native-integration/standard/test-integration/#upi



