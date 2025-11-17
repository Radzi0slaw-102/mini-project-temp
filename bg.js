const c = document.createElement("canvas");
const ctx = c.getContext("2d");
document.body.appendChild(c);

let w, h;
function resize() {
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
}
resize();
let pAmount = Math.pow(w*h, 1/3.5)
window.addEventListener("resize", resize);

let mouse = { x: w / 2, y: h / 2 };
document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

let particles = [];
for (let i = 0; i < pAmount; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: 1 + Math.random() * 2,
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);

  for (let p of particles) {
    let dx = mouse.x - p.x;
    let dy = mouse.y - p.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 200) {
      p.vx += (dx / dist) * 0.01;
      p.vy += (dy / dist) * 0.01;
    }

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#0006";
    ctx.fill();
  }

  requestAnimationFrame(draw);
}
draw();

c.style.position = "fixed";
c.style.top = "0";
c.style.left = "0";
c.style.zIndex = "-1";
c.style.pointerEvents = "none";
