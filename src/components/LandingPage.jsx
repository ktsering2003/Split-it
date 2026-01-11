import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  const handleShopNow = () => {
    navigate('/');
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Welcome to <span className="brand-highlight">Kazon</span>
              </h1>
              <p className="hero-subtitle">
                Discover amazing products at unbeatable prices. Your perfect shopping experience starts here.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={handleShopNow}>
                  Shop Now
                  <span className="btn-icon">→</span>
                </button>
                <button className="btn-secondary" onClick={handleGetStarted}>
                  Explore Products
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card">
                <div className="card-shine"></div>
                <h3>Premium Quality</h3>
                <p>Curated collection of the finest products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Kazon?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Get your orders delivered quickly with our express shipping options</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>We only sell high-quality products from trusted brands and suppliers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Shopping</h3>
              <p>Your personal information and payments are protected with top-tier security</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with regular discounts and special offers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">10K+</h3>
              <p className="stat-label">Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">5K+</h3>
              <p className="stat-label">Products Available</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Customer Support</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">99%</h3>
              <p className="stat-label">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Shopping?</h2>
            <p>Join thousands of satisfied customers and discover amazing deals today!</p>
            <button className="btn-cta" onClick={handleShopNow}>
              Start Shopping Now
              <span className="btn-icon">🛍️</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;