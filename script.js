// ============================================
// CONECTA+ LANDING PAGE - JAVASCRIPT
// Funcionalidades e Interatividade
// ============================================

// SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO
document.querySelectorAll('a.smooth-scroll').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// BOTÕES DE CTA (CALL TO ACTION)
// ============================================

// Botão "Quero organizar meu negócio" - Hero
document.getElementById('cta-main').addEventListener('click', function() {
    showCTAModal('Começar sua transformação digital');
});

// Botão "Falar no WhatsApp" - Hero
document.getElementById('whatsapp-btn').addEventListener('click', function() {
    openWhatsApp();
});

// Botão "Começar Agora" - CTA Final
document.getElementById('cta-final-btn').addEventListener('click', function() {
    showCTAModal('Quero transformar meu negócio agora');
});

// ============================================
// FUNÇÕES DE CTA
// ============================================

function openWhatsApp() {
    // Número de WhatsApp - Substitua pelo seu número real
    const phoneNumber = '558432999999';
    const message = 'Olá! Gostaria de saber mais sobre os serviços da Conecta+';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function showCTAModal(title) {
    // Simula um modal ou redireciona para WhatsApp
    // Você pode customizar conforme necessário
    alert(`${title}\n\nVocê será redirecionado para nosso WhatsApp.`);
    openWhatsApp();
}

// ============================================
// ANIMAÇÕES AO SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar animações em cards e seções
document.querySelectorAll(
    '.problema-card, .solucao-card, .plano-card, .depoimento-card'
).forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// ============================================
// SCROLL REVEAL PARA SEÇÕES
// ============================================

const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(
    '.problemas, .solucoes, .planos, .antes-depois, .depoimentos, .cta-final'
).forEach(section => {
    sectionObserver.observe(section);
});

// ============================================
// HIGHLIGHT PLANO PRO AO SCROLL
// ============================================

const planoProObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const planCard = document.querySelector('.plano-destaque');
            planCard.style.animation = 'pulseHighlight 2s ease-in-out infinite';
        }
    });
}, {
    threshold: 0.3
});

const planosSection = document.querySelector('.planos');
if (planosSection) {
    planoProObserver.observe(planosSection);
}

// ============================================
// CONTADOR ANIMADO (OPCIONAL)
// ============================================

let numbersAnimated = false;

const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !numbersAnimated) {
            animateNumbers();
            numbersAnimated = true;
        }
    });
}, {
    threshold: 0.5
});

function animateNumbers() {
    // Função reservada para futuros números de estatísticas
    console.log('Números animados iniciados');
}

// ============================================
// NAVBAR ATIVA AO SCROLL
// ============================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// HOVER EFFECTS EM BUTTONS
// ============================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// VALIDAÇÃO DE FORMULÁRIO (SE NECESSÁRIO)
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// FUNÇÃO PARA RASTREAR CLIQUES (ANALYTICS)
// ============================================

function trackClick(label) {
    console.log(`Click rastreado: ${label}`);
    // Aqui você pode integrar Google Analytics ou outra ferramenta
    // Example: gtag('event', label);
}

// Rastrear cliques nos botões principais
document.getElementById('cta-main')?.addEventListener('click', function() {
    trackClick('CTA_Main_Hero');
});

document.getElementById('whatsapp-btn')?.addEventListener('click', function() {
    trackClick('WhatsApp_Button');
});

document.getElementById('cta-final-btn')?.addEventListener('click', function() {
    trackClick('CTA_Final');
});

// ============================================
// LOAD EVENT - INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Conecta+ Landing Page carregada com sucesso!');
    
    // Inicializar qualquer efeito ao carregar página
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'slideInLeft 0.8s ease-out';
    }
});

// ============================================
// PREFETCH LINKS (PERFORMANCE)
// ============================================

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('mouseover', function() {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            // Preload da seção
            console.log(`Prefetch: ${targetId}`);
        }
    });
});

// ============================================
// VERIFICAR MOBILE
// ============================================

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustar comportamento para mobile
if (isMobile()) {
    document.body.classList.add('is-mobile');
    console.log('📱 Modo mobile ativado');
}

// ============================================
// EFEITO DE PARALLAX (OPCIONAL)
// ============================================

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// ============================================
// LAZY LOAD IMAGES (FUTURE USE)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// SERVICE WORKER PARA PWA (OPCIONAL)
// ============================================

if ('serviceWorker' in navigator) {
    // Uncomment para ativar PWA
    // navigator.serviceWorker.register('sw.js').catch(err => console.log(err));
}

console.log('🚀 Script.js carregado com sucesso!');