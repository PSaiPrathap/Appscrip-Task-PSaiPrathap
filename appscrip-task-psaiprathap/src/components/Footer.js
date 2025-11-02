import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top section */}
      <div className="footer-top">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <div className="currency">
            <h3>CURRENCY</h3>
            <div className="currency-row">
              <img src="https://flagcdn.com/us.svg" alt="US flag" />
              <span>USD</span>
            </div>
            <p className="currency-note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <div className="footer-links">
          <div>
            <h4>mettā muse</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="social-pay">
          <div className="social">
            <h4>Follow Us</h4>
            <div className="icons">
              <button><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" /></button>
              <button><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" /></button>
            </div>
          </div>

          <div className="payments">
            <h4>mettā muse ACCEPTS</h4>
            <div className="payment-icons">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/768px-Google_Pay_Logo.svg.png" alt="GPay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/330px-Mastercard_2019_logo.svg.png" alt="MasterCard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/375px-PayPal.svg.png" alt="PayPal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/330px-American_Express_logo_%282018%29.svg.png" alt="Amex" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/250px-Apple_Pay_logo.svg.png" alt="Apple Pay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Shop_Pay_logo.svg/500px-Shop_Pay_logo.svg.png" alt="Shop Pay"/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>Copyright © 2025 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
