console.log('CloudPipe website loaded successfully');

document.addEventListener('DOMContentLoaded', function() {
  const footer = document.querySelector('footer p');
  const year = new Date().getFullYear();
  footer.textContent = `Built by Myles Chumley | Deployed with GitHub Actions & AWS S3 | ${year}`;
});
