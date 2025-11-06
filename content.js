(function() {
  if (document.getElementById('web-puppy')) {
    return;
  }

  const puppy = document.createElement('div');
  puppy.id = 'web-puppy';
  puppy.innerHTML = `
    <div class="puppy-body">
      <div class="puppy-ear puppy-ear-left"></div>
      <div class="puppy-ear puppy-ear-right"></div>
      <div class="puppy-head">
        <div class="puppy-eye puppy-eye-left">
          <div class="puppy-pupil"></div>
        </div>
        <div class="puppy-eye puppy-eye-right">
          <div class="puppy-pupil"></div>
        </div>
        <div class="puppy-nose"></div>
      </div>
      <div class="puppy-leg puppy-leg-left"></div>
      <div class="puppy-leg puppy-leg-right"></div>
      <div class="puppy-tail"></div>
      <div class="puppy-body-main"></div>
    </div>
  `;

  document.body.appendChild(puppy);

  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;

  puppy.addEventListener('mousedown', dragStart);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', dragEnd);

  function dragStart(e) {
    initialX = e.clientX - puppy.offsetLeft;
    initialY = e.clientY - puppy.offsetTop;
    isDragging = true;
    puppy.style.cursor = 'grabbing';
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      puppy.style.right = 'auto';
      puppy.style.bottom = 'auto';
      puppy.style.left = currentX + 'px';
      puppy.style.top = currentY + 'px';
    }
  }

  function dragEnd() {
    isDragging = false;
    puppy.style.cursor = 'grab';
  }
})();
