// Modal notification system
class NotificationSystem {
  constructor() {
    this.createNotificationContainer();
  }

  createNotificationContainer() {
    const container = document.createElement('div');
    container.id = 'notification-container';
    container.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    `;
    document.body.appendChild(container);
  }

  show(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    
    document.getElementById('notification-container').appendChild(notification);
    
    // Remove notification after animation
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

const notifications = new NotificationSystem();

// Button click handlers for plan selection
document.querySelectorAll('button:not(.details-btn)').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.pricing-card');
    const plan = card.querySelector('h2').textContent;
    const price = card.querySelector('.price').textContent.match(/\d+/)[0];
    const features = Array.from(card.querySelectorAll('ul li')).map(li => li.textContent);
    
    notifications.show(`
      <div class="notification-content">
        <i class="fas fa-check-circle"></i>
        <div>
          <h4>Obrigado por escolher o plano ${plan}!</h4>
          <p>Redirecionando para o formulário de contato...</p>
        </div>
      </div>
    `);

    // Redirect after 2 seconds
    setTimeout(() => {
      const params = new URLSearchParams();
      params.append('plan', plan);
      params.append('price', price);
      params.append('features', JSON.stringify(features));
      window.location.href = `contato.html?${params.toString()}`;
    }, 2000);
  });
});

// Update details button click handler 
document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (button.classList.contains('active')) {
      // Hide all expanded content
      document.querySelectorAll('.expanded-content').forEach(content => {
        content.classList.remove('show');
      });

      // Deactivate all details buttons
      document.querySelectorAll('.details-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.textContent = 'Ver Mais Detalhes';
      });

      // Reset all cards scale
      document.querySelectorAll('.pricing-card').forEach(card => {
        card.style.transform = 'none';
      });
    } else {
      // Show all expanded content
      document.querySelectorAll('.expanded-content').forEach(content => {
        content.classList.add('show');
      });

      // Activate all details buttons
      document.querySelectorAll('.details-btn').forEach(btn => {
        btn.classList.add('active');
        btn.textContent = 'Ocultar Detalhes';
      });

      // Reset all cards scale first
      document.querySelectorAll('.pricing-card').forEach(card => {
        card.style.transform = 'none';
      });

      // Scale up only the clicked card
      const clickedCard = button.closest('.pricing-card');
      clickedCard.style.transform = 'scale(1.05)';
    }
  });
});

// Enhanced hover effects for features
document.querySelectorAll('.pricing-card li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.feature-icon').style.transform = 'scale(1.2) rotate(10deg)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.querySelector('.feature-icon').style.transform = 'none';
  });
});

// Add click handler for custom plan button 
document.querySelector('.custom-plan-btn').addEventListener('click', () => {
  notifications.show(`
    <div class="notification-content">
      <i class="fas fa-check-circle"></i>
      <div>
        <h4>Ótima escolha!</h4>
        <p>Redirecionando para o formulário de contato...</p>
      </div>
    </div>
  `);

  // Redirect after 2 seconds
  setTimeout(() => {
    const params = new URLSearchParams();
    params.append('plan', 'Personalizado');
    params.append('price', 'A definir');
    params.append('features', JSON.stringify(['Plano totalmente personalizado', 'Recursos sob demanda', 'Orçamento flexível', 'Atendimento dedicado']));
    window.location.href = `contato.html?${params.toString()}`;
  }, 2000);
});