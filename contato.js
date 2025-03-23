document.addEventListener('DOMContentLoaded', () => {
  // Get plan details from URL parameters
  const params = new URLSearchParams(window.location.search);
  const planName = params.get('plan');
  const planPrice = params.get('price');
  const features = JSON.parse(decodeURIComponent(params.get('features')));
  
  // Update plan details in the page
  document.getElementById('plan-name').textContent = planName;
  document.getElementById('plan-price').textContent = planPrice;
  
  const featuresList = document.getElementById('plan-features');
  features.forEach(feature => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-check-circle feature-icon"></i> ${feature}`;
    featuresList.appendChild(li);
  });
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  });
});