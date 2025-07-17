document.addEventListener('DOMContentLoaded', () => {
  // GSAP Animations
  const tl = gsap.timeline();

  // 1. Header animation
  tl.from('#header', { 
    y: -100, 
    opacity: 0, 
    duration: 0.8, 
    ease: 'power3.out' 
  });

  // 2. Main content and sidebar animation
  tl.from('.card', {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out'
  }, "-=0.5");

  // Live Time Clock
  const timeElement = document.getElementById('live-time');
  function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    timeElement.textContent = now.toLocaleDateString('id-ID', options);
  }
  setInterval(updateTime, 1000);
  updateTime(); // Initial call
});

// Modal Logic
const modal = document.getElementById('modalHP');
const modalContent = document.getElementById('modalContent');
let currentFacingMode = 'environment';
let stream;

function openModal() {
  modal.classList.remove('hidden');
  gsap.to(modal, { duration: 0.3, opacity: 1, ease: 'power2.inOut' });
  gsap.to(modalContent, { duration: 0.4, opacity: 1, scale: 1, ease: 'elastic.out(1, 0.75)', delay: 0.1 });
  startCamera(currentFacingMode);
}

function closeModal() {
  gsap.to(modalContent, { 
    duration: 0.3, 
    opacity: 0, 
    scale: 0.95, 
    ease: 'power2.in' 
  });
  gsap.to(modal, { 
    duration: 0.4, 
    opacity: 0, 
    ease: 'power2.inOut', 
    delay: 0.1,
    onComplete: () => {
      modal.classList.add('hidden');
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    }
  });
}

function switchCamera(facingMode) {
  currentFacingMode = facingMode;
  // Visual feedback for active camera button
  const btnDepan = document.getElementById('btnDepan');
  const btnBelakang = document.getElementById('btnBelakang');
  if(facingMode === 'user') {
    btnDepan.classList.replace('bg-gray-200', 'bg-blue-600');
    btnDepan.classList.replace('text-gray-800', 'text-white');
    btnBelakang.classList.replace('bg-blue-600', 'bg-gray-200');
    btnBelakang.classList.replace('text-white', 'text-gray-800');
  } else {
    btnBelakang.classList.replace('bg-gray-200', 'bg-blue-600');
    btnBelakang.classList.replace('text-gray-800', 'text-white');
    btnDepan.classList.replace('bg-blue-600', 'bg-gray-200');
    btnDepan.classList.replace('text-white', 'text-gray-800');
  }
  startCamera(facingMode);
}

function startCamera(facingMode) {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }
  const constraints = {
    video: { facingMode: { exact: facingMode } },
    audio: false
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then(s => {
      stream = s;
      const video = document.getElementById('videoPreview');
      video.srcObject = stream;
    })
    .catch(err => {
      console.error('Gagal mengakses kamera:', err);
      alert('Tidak dapat mengakses kamera. Pastikan Anda memberikan izin dan tidak ada aplikasi lain yang menggunakannya.');
    });
}

function startFullScreenCamera() {
  const video = document.getElementById('videoPreview');
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE11 */
    video.msRequestFullscreen();
  }
}