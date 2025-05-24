document.addEventListener('DOMContentLoaded', function() {
    // Create message box element
    const messageBox = document.createElement('div');
    messageBox.className = 'message-box';
    document.body.appendChild(messageBox);

    // Form submission handler
    const leadForm = document.getElementById('leadForm');
    
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(leadForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', data);
            
            // Show success message
            showMessage('Thank you! We will contact you shortly about your floral needs.');
            
            // Reset form
            leadForm.reset();
        });
    }

    function showMessage(text) {
        messageBox.textContent = text;
        messageBox.className = 'message-box show';
        
        // Hide after 5 seconds
        setTimeout(() => {
            messageBox.classList.add('hide');
            
            // Remove after animation completes
            setTimeout(() => {
                messageBox.className = 'message-box';
            }, 500);
        }, 5000);
    }

            // Mobile video play enforcement
            const video = document.querySelector('.video-background video');
            
            function ensureVideoPlays() {
                if (video) {
                    // Force video to play on mobile
                    video.play().catch(error => {
                        // If autoplay fails, show play button
                        console.log('Video play failed:', error);
                        const playButton = document.createElement('div');
                        playButton.innerHTML = '▶';
                        playButton.style.position = 'fixed';
                        playButton.style.top = '20px';
                        playButton.style.right = '20px';
                        playButton.style.backgroundColor = 'rgba(0,0,0,0.5)';
                        playButton.style.color = 'white';
                        playButton.style.width = '50px';
                        playButton.style.height = '50px';
                        playButton.style.borderRadius = '50%';
                        playButton.style.display = 'flex';
                        playButton.style.alignItems = 'center';
                        playButton.style.justifyContent = 'center';
                        playButton.style.fontSize = '24px';
                        playButton.style.cursor = 'pointer';
                        playButton.style.zIndex = '1000';
                        playButton.addEventListener('click', function() {
                            video.play();
                            playButton.style.display = 'none';
                        });
                        document.body.appendChild(playButton);
                    });
                }
            }
            
            // Check video support
            function checkVideoSupport() {
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                
                if (isMobile && video) {
                    // Mobile-specific video settings
                    video.setAttribute('playsinline', '');
                    video.setAttribute('muted', '');
                    video.setAttribute('autoplay', '');
                    
                    // Some browsers require this for autoplay to work
                    video.muted = true;
                }
            }
            
            // Initialize
            checkVideoSupport();
            ensureVideoPlays();
            
            // Re-check when user interacts with page (some browsers require this)
            document.addEventListener('click', function() {
                if (video && video.paused) {
                    video.play();
                }
            }, { once: true });
        });
