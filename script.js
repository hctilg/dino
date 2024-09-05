document.addEventListener('DOMContentLoaded', ev => {
  const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
  
  // set the body to full width and height
  document.body.style.setProperty("--height", `${innerHeight}px`);
  document.body.style.setProperty("--width", `${innerWidth}px`);
  
  const bgSVG = `
<svg id="bg-svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
  height="640" viewBox="0 0 ${innerWidth} 640.00001" width="${innerWidth}" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <rect id="rect5189-8" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
    height="640" width="${innerWidth}" y="0" x="0" fill="#baf1ff" />
  <g fill="#333333">
    <path id="path10590-3-7-0" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
      d="m153.94 443.28c-1.6123 0-2.9194 1.2047-2.9194 2.6916v10.868c0 5.5017-2.7017 5.5166-4.9971 5.5166v-11.866c0-2.5165-1.8644-4.5558-4.1642-4.5558-2.2999 0-4.1643 2.0393-4.1643 4.5558v20.342c-2.2954 0-4.9971-0.015-4.9971-5.5165v-9.4802c0-1.4869-1.3071-2.6916-2.9193-2.6916-1.6123 0-2.9193 1.2047-2.9193 2.6916v12.354c0 5.6939 4.6336 9.0964 10.836 9.0964v15.213h8.3285v-23.689c6.2021 0 10.836-3.4012 10.836-9.0952v-13.743c0-1.4869-1.3071-2.6916-2.9193-2.6916z" />
    <path id="path10590-3-5-8-4" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
      d="m225.91 447.5c2.2227 0 4.0245 1.9708 4.0245 4.4028v14.293c2.2182 0 4.8292-0.0145 4.8292-5.3313v-5.9423c0-1.4369 1.2632-2.6012 2.8213-2.6012s2.8213 1.1642 2.8213 2.6012v8.7195c0 5.5027-4.4781 8.7908-10.472 8.7908v20.068h-8.0489v-40.597c0-2.432 1.8018-4.4028 4.0244-4.4028z" />
    <path id="path10590-3-4-6-4" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
      d="m46.842 445.94c-2.2999 0-4.1643 2.0403-4.1643 4.5568v20.342c-2.2954 0-4.9971-0.0161-4.9971-5.5176v-7.2581c0-1.4869-1.307-2.6927-2.9193-2.6927s-2.9193 1.2058-2.9193 2.6927v10.133c0 5.6939 4.6337 9.0952 10.836 9.0952v15.214h8.3285v-17.648c6.2021 0 10.836-3.4013 10.836-9.0952v-5.9699c0-1.4869-1.307-2.6916-2.9193-2.6916s-2.9193 1.2047-2.9193 2.6916v3.095c0 5.5016-2.7017 5.5165-4.9971 5.5165v-17.906c0-2.5165-1.8644-4.5568-4.1642-4.5568z" />
    <path id="path10590-3-4-6-4-6" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
      d="m320.43 445.94c-2.2998 0-4.1642 2.0403-4.1642 4.5568v20.342c-2.2954 0-4.9972-0.0161-4.9972-5.5176v-7.2581c0-1.4869-1.307-2.6927-2.9193-2.6927-1.6122 0-2.9193 1.2058-2.9193 2.6927v10.133c0 5.6939 4.6337 9.0952 10.836 9.0952v15.214h8.3285v-17.648c6.2021 0 10.836-3.4013 10.836-9.0952v-5.9699c0-1.4869-1.307-2.6916-2.9193-2.6916s-2.9193 1.2047-2.9193 2.6916v3.095c0 5.5016-2.7018 5.5165-4.9971 5.5165v-17.906c0-2.5165-1.8644-4.5568-4.1643-4.5568z" />
  </g>
</svg>
`;

  const fgSVG = `
  <svg id="fg-svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
    height="150" viewBox="0 0 ${innerWidth} 150" width="${innerWidth}" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
    xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/">
    <rect style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
      height="147.5" width="${innerWidth}" y="2.5" x="0" fill="#ffb380" />
    <path stroke="#333333" stroke-width="5" fill="none" d="m0 2.5h${innerWidth}" />
    <circle id="a" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
      cx="-9.75" cy="11" r="2.5" fill="#333333" />
    
    ${Array.from({ length: (innerWidth / 10) }, (_, i) => {
      const scale = i % 2 === 0 ? 0.9 : 0.8;
      const translateX = (i * 9.025) % innerWidth;
      const translateY = (i % 2 === 0) ? 8.6 : 17.2;
      return `<use xlink:href="#a" transform="matrix(${scale} 0 0 ${scale} ${translateX} ${translateY})" height="100%" width="100%" y="0" x="0" />`;
    }).join('')}
    
  </svg>
  `;

  const boneOpen = `
<svg id="bone" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
  height="400" viewBox="0 0 79.999993 400.00001" width="80" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
`;

  const boneMid = `
<path id="path4855-9" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
  d="m12.343 397.5-0.274-343.44c-0.066-8.49-9.569-14.59-9.569-27.05 0-12.457 7.957-24.615 21.609-24.551 7.448 0.0614 12.539 3.9094 15.891 8.055 3.352-4.1456 8.443-7.9937 15.891-8.055 13.652-0.0637 21.609 12.094 21.609 24.551s-9.5033 18.557-9.5692 27.044l-0.27382 343.41z"
  stroke="#333333" stroke-linecap="round" stroke-width="5" fill="#e9ddaf" />
<g stroke-linejoin="round" stroke="#333333" stroke-linecap="round" stroke-width="5" fill="none">
  <path id="path4855-2-0" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
    d="m13.781 26.92a11.746 12.772 0 0 1 11.746 -12.78" />
  <path id="path5025" d="m56.472 115.85v78.183" />
  <path id="path5025-3-6" d="m56.472 92.06v10.609" />
  <path id="path5025-0" d="m56.472 253.62v126.19" />
  <path id="path5025-3-6-6" d="m56.472 212.25v24.515" />
</g>
`;

  const boneClose = "</svg>";

  const botBoneSVG = boneOpen + boneMid + boneClose;
  const topBoneSVG = boneOpen + '<g transform="rotate(180) translate(-80, -400)">' + boneMid + "</g>" + boneClose;

  const sprite1 = `
<svg id="sprite-1" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
  height="59.968" viewBox="0 0 100.02518 59.967859" width="100.03" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <g stroke-linecap="round">
    <ellipse id="body" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
      rx="27.792" transform="matrix(.97502 -.22210 .30061 .95375 0 0)" stroke="#333333" ry="14.864" cy="46.239"
      cx="16.016" stroke-width="4.0066" fill="#d38d5f" />
    <g id="head" transform="matrix(.5 0 0 .5 .011191 -.016144)">
      <path id="path6767-3" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
        d="m196.03 86.922s-61.739-3.1063-75.355-6.8143c-14.08-3.835-25.527-11.615-25.527-25.941 0-13.335-15.956-50.135-15.956-50.135s30.525 17.767 41.481 24.195c11.784 6.9142 75.355 44.369 75.355 58.695z"
        stroke="#333333" stroke-width="8" fill="#d38d5f" />
      <ellipse id="eye" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
        rx="5.8902" ry="5.9862" stroke="#ffffff" cy="45.876" cx="120.32" stroke-width="5" fill="#333333" />
      <path id="mouth" d="m194.28 84.826c-23.83-4.875-43.57-11.271-63.81-23.461" fill-rule="evenodd"
        stroke="#333333" stroke-width="5" fill="#d38d5f" />
    </g>
    <path id="wing-top" stroke-linejoin="round" d="m10.252 43.445c0.8135-13.421 3.458-26.194-5.2065-41.445 22.742 0 34.917 19.591 38.055 31.493l0.0005-0.001"
      fill-rule="evenodd" stroke="#333333" stroke-width="4" fill="#d38d5f">
    </path>
  </g>
</svg>
`;

  const sprite2 = `
<svg id="sprite-2" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
  height="59.968" viewBox="0 0 100.02518 59.967859" width="100.03" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <g stroke-linecap="round">
    <ellipse id="body" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
      rx="27.792" ry="14.864" stroke="#333333" transform="matrix(.97502 -.22210 .30061 .95375 0 0)" cy="46.239"
      cx="16.016" stroke-width="4.0066" fill="#d38d5f" />
    <g id="head" transform="matrix(.5 0 0 .5 .011191 -.016144)">
      <path id="path6767-3" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
        d="m196.03 86.922s-61.739-3.1063-75.355-6.8143c-14.08-3.835-25.527-11.615-25.527-25.941 0-13.335-15.956-50.135-15.956-50.135s30.525 17.767 41.481 24.195c11.784 6.9142 75.355 44.369 75.355 58.695z"
        stroke="#333333" stroke-width="8" fill="#d38d5f" />
      <ellipse id="eye" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
        rx="5.8902" ry="5.9862" stroke="#ffffff" cy="45.876" cx="120.32" stroke-width="5" fill="#333333" />
      <path id="mouth" d="m194.28 84.826c-23.83-4.875-43.57-11.271-63.81-23.461" fill-rule="evenodd"
        stroke="#333333" stroke-width="5" fill="#d38d5f" />
    </g>
    <path id="wing-bot" stroke-linejoin="round" d="m10.252 43.445c8.7795 5.151 8.41 14.523 8.41 14.523 15.09 0 27.976-12.688 24.439-24.475l0.0005-0.0005"
      fill-rule="evenodd" stroke="#333333" stroke-width="4" fill="#d38d5f">
    </path>
  </g>
</svg>
`;

  const bg = new Image();
  bg.src = "data:image/svg+xml," + encodeURIComponent(bgSVG);

  const fg = new Image();
  fg.src = "data:image/svg+xml," + encodeURIComponent(fgSVG);

  const dinoGlide = new Image();
  dinoGlide.src = "data:image/svg+xml," + encodeURIComponent(sprite1);

  const dinoFlap = new Image();
  dinoFlap.src = "data:image/svg+xml," + encodeURIComponent(sprite2);

  const topBone = new Image();
  topBone.src = "data:image/svg+xml," + encodeURIComponent(topBoneSVG);

  const botBone = new Image();
  botBone.src = "data:image/svg+xml," + encodeURIComponent(botBoneSVG);

  const canvas = document.getElementById("game-display");
  canvas.width = innerWidth;
  
  const ctx = canvas.getContext("2d");

  const hitboxWidth = 60;
  const hitboxHeight = 15;

  const spriteOffset_X = -10;
  const spriteOffset_Y = -25;

  let fgPos_X = 0;

  let dinoPos_X = 100;
  let dinoPos_Y = 250;
  let dinoAngle = 0;
  let dinoState = dinoGlide;

  const minBoneHeight = -330;
  const maxBoneHeight = -160;

  const scrollSpeed = -3;
  const gravity = 0.3;
  const lift = -8;
  let velocity = 0;

  let start = false;
  let gameOver = false;
  let score = 0;

  let bonePtr = 0;
  let boneStart = 400;
  let flyGap = 180;
  let boneGap = (innerWidth < 640 ? 280 : 280 + Math.floor(innerWidth / 280) * 10);
  
  let bones = Array.from({ length: ((innerWidth < (360 * 2) ? 1 : Math.floor(innerWidth / 360)) * 3) }, (_, i) => {
    return {
      x: boneStart + i * boneGap,
      y: rand(minBoneHeight, maxBoneHeight)
    }
  });

  const playerInput = () => {
    if (!start) {
      start = true;
      velocity = lift;
      dinoAngle = -20;
      document.getElementById("hint").style.opacity = 0;
    } else {
      if (!gameOver) {
        velocity = lift;
        dinoAngle = -20;
      }
    }
  }

  const checkCollision = () => {
    // set upper bound
      if (dinoPos_Y <= -hitboxHeight) {
      velocity = 0;
    }

    // dino hit the ground
    if (dinoPos_Y + hitboxHeight >= canvas.height - fg.height) {
      velocity = 0;
      dinoPos_Y = canvas.height - fg.height - hitboxHeight;
      setGameOver();
    }

    // dino hit bone
    if (
      dinoPos_X + hitboxWidth >= bones[bonePtr].x &&
      dinoPos_X < bones[bonePtr].x + topBone.width && (
        dinoPos_Y <= bones[bonePtr].y + topBone.height ||
        dinoPos_Y + hitboxHeight >= bones[bonePtr].y + topBone.height + flyGap)
      ) setGameOver();
    }

  function replay() {
    start = false;
    gameOver = false;

    score = 0;
    velocity = 0;

    dinoPos_X = 100;
    dinoPos_Y = 250;
    dinoAngle = 0;
    dinoState = dinoGlide;

    bonePtr = 0;
    bones = Array.from({ length: ((innerWidth < (360 * 2) ? 1 : Math.floor(innerWidth / 360)) * 3) }, (_, i) => {
      return {
        x: boneStart + i * boneGap,
        y: rand(minBoneHeight, maxBoneHeight)
      }
    });

    document.getElementById("hint").style.opacity = 1;
    document.getElementById("gameover-screen").style.visibility = "hidden";
    document.getElementById("gameover-screen").style.opacity = 0;
  }

  const setGameOver = () => {
    gameOver = true;
    document.getElementById("gameover-screen").style.visibility = "visible";
    document.getElementById("gameover-screen").style.opacity = 1;
  }

  const update = () => {
    // foreground scroll
    if (!gameOver) {
      fgPos_X += scrollSpeed;
      if (fgPos_X <= -canvas.width) fgPos_X = 0;
    }

    // game started
    if (start) {
      velocity += gravity;
      dinoPos_Y += velocity;

      // if velocity is negative show dino flap sprite else show dino falling
      if (velocity < 0) {
        dinoState = dinoFlap;
      } else {
        dinoState = dinoGlide;
        dinoAngle = Math.min(dinoAngle + 2, 90);
      }

      checkCollision();

      if (!gameOver) {
        for (var i = 0; i < bones.length; i++) {
          // scroll bones across screen
          bones[i].x += scrollSpeed;

          // reassign bone object XY after it leaves screen
          if (bones[i].x <= -topBone.width) {
            if (i == 0) {
              bones[0].x = bones[bones.length - 1].x + boneGap;
            } else {
              bones[i].x = bones[i - 1].x + boneGap;
            }

            bones[i].y = rand(minBoneHeight, maxBoneHeight);
          }
        }

        // if dino passed through the bone increase score
        if (dinoPos_X >= bones[bonePtr].x + topBone.width) {
          score++;

          console.log(bones.length);
          if (bonePtr == (bones.length - 1)) {
            bonePtr = 0;
          } else {
            bonePtr++;
          }
        }
      }
    }

    render();
  }

  function render() {
    document.getElementById("scoreboard").innerHTML = score;

    ctx.drawImage(bg, 0, 0);

    for (var i = 0; i < bones.length; i++) {
      ctx.drawImage(topBone, bones[i].x, bones[i].y);
      ctx.drawImage(botBone, bones[i].x, bones[i].y + topBone.height + flyGap);
    }

    ctx.save();
    
    ctx.translate(
      dinoPos_X + hitboxWidth / 2 + spriteOffset_X,
      dinoPos_Y + hitboxHeight / 2
    );
    
    ctx.rotate(dinoAngle * Math.PI / 180);

    ctx.drawImage(
      dinoState,
      -hitboxWidth / 2,
      -hitboxHeight / 2 + spriteOffset_Y
    );

    ctx.restore();

    // Show hitbox ("Just For Debug")
    // ctx.fillStyle = "#ff0000";
    // ctx.fillRect(dinoPos_X, dinoPos_Y, hitboxWidth, hitboxHeight);

    ctx.drawImage(fg, fgPos_X, canvas.height - fg.height);
    ctx.drawImage(fg, fgPos_X + fg.width, canvas.height - fg.height);

    window.requestAnimationFrame(update);
  }

  document.addEventListener("keydown", ev => {
    if ((ev.which || ev.keyCode) == 32 || ev.key === ' ' || ev.code === "Space") {
      ev.preventDefault();
      playerInput();
    }
  });

  document.addEventListener("touchstart", playerInput);
  document.getElementById("replay").addEventListener("click", replay);

  update();
});
