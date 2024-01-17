<script>
    import { onMount } from "svelte";
  
    let flashes = [];
  
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    function addFlash() {
      flashes = [
        ...flashes,
        {
          top: `${getRandomArbitrary(0, 10)}%`,
          left: `${getRandomArbitrary(0, 100)}%`,
          angle: `${getRandomArbitrary(-45, 45)}deg`,
          animationDuration: `${getRandomArbitrary(1, 3)}s`
        }
      ];
  
      setTimeout(() => {
        flashes = flashes.slice(1);
      }, 3000);
    }
  
    onMount(() => {
      // Add initial flash
      addFlash();
  
      // Add periodic flashes
      setInterval(addFlash, 2000);
    });
  </script>
  
  <style>
    .title {
      position: relative;
      font-size: 3rem;
      margin-top: 2rem;
      text-align: center;
    }
  
    .flash {
      position: absolute;
      width: 2px;
      height: 20px;
      background-color: #f39c12;
      transform: translate(-50%, -50%) rotate(-45, 45);
      pointer-events: none;
      animation: flashAnimation 2s ease-in-out infinite;
    }
  
    @keyframes flashAnimation {
      0%, 50%, 100% {
        opacity: 1;
        height: 20px;
      }
      25%, 75% {
        opacity: 0;
        height: 0;
      }
    }
  </style>
  
  <div class="title">
    <h1>Open Fusion API</h1>
    {#each flashes as { top, left, angle, animationDuration }}
      <div class="flash" style="top: {top}; left: {left}; animation-duration: {animationDuration};"></div>
    {/each}
  </div>
  