class ThankYouModal extends HTMLElement {
  constructor() {
    super();
    this.isVisible = false;
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .modal-overlay.show {
          opacity: 1;
          visibility: visible;
        }

        .modal {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          padding: 40px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          color: white;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transform: scale(0.7) translateY(50px);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .modal-overlay.show .modal {
          transform: scale(1) translateY(0);
        }

        .modal-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          animation: bounce 1s ease-in-out;
        }

        .modal-title {
          font-size: 2rem;
          margin-bottom: 15px;
          font-weight: 300;
        }

        .modal-message {
          font-size: 1.1rem;
          margin-bottom: 30px;
          opacity: 0.9;
          line-height: 1.5;
        }

        .modal-close {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 12px 30px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }

        .stars-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .star {
          position: absolute;
          color: gold;
          font-size: 1.5rem;
          animation: fall 3s linear infinite;
        }

        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(400px) rotate(360deg); opacity: 0; }
        }
      </style>
      
      <div class="modal-overlay" id="modalOverlay">
        <div class="modal">
          <div class="stars-animation" id="starsContainer"></div>
          <div class="modal-icon" id="modalIcon">⭐</div>
          <h2 class="modal-title" id="modalTitle">Thank You!</h2>
          <p class="modal-message" id="modalMessage">We appreciate your feedback!</p>
          <button class="modal-close" id="closeBtn">Close</button>
        </div>
      </div>
    `;

    this.querySelector('#closeBtn').addEventListener('click', () => {
      this.hide();
    });

    this.querySelector('#modalOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'modalOverlay') {
        this.hide();
      }
    });
  }

  show(rating) {
    const messages = {
      1: { 
        icon: '😔', 
        title: 'We\'re Sorry!', 
        message: 'We apologize for not meeting your expectations. We\'ll work harder to improve!' 
      },
      2: { 
        icon: '😐', 
        title: 'Thank You!', 
        message: 'Thank you for your honest feedback. We\'ll do better next time!' 
      },
      3: { 
        icon: '😊', 
        title: 'Thanks!', 
        message: 'We appreciate your feedback and will continue to improve our service!' 
      },
      4: { 
        icon: '😃', 
        title: 'Great!', 
        message: 'We\'re so glad you had a good experience with us! Thank you!' 
      },
      5: { 
        icon: '🎉', 
        title: 'Awesome!', 
        message: 'You\'re amazing! Thank you for the fantastic 5-star rating!' 
      }
    };

    const config = messages[rating] || messages[5];
    
    this.querySelector('#modalIcon').textContent = config.icon;
    this.querySelector('#modalTitle').textContent = config.title;
    this.querySelector('#modalMessage').textContent = config.message;
    
    
    
    this.querySelector('#modalOverlay').classList.add('show');
    this.isVisible = true;
  }

  hide() {
    this.querySelector('#modalOverlay').classList.remove('show');
    this.isVisible = false;
  }

  

  
}

customElements.define('thankyou-modal', ThankYouModal);