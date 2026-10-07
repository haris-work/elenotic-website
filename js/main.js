/* Contact config: set CONTACT_EMAIL to "hello@elenotic.com" once the domain is owned. */
const CONFIG={CONTACT_EMAIL:""};
document.addEventListener("DOMContentLoaded",()=>{
  document.documentElement.classList.add("js");
  const y=document.getElementById("y");if(y)y.textContent=new Date().getFullYear();
  const c=document.getElementById("contact-slot");
  if(c&&CONFIG.CONTACT_EMAIL){const a=document.createElement("a");a.href="mailto:"+CONFIG.CONTACT_EMAIL;a.textContent=CONFIG.CONTACT_EMAIL;c.replaceChildren(a)}
  const io="IntersectionObserver"in window?new IntersectionObserver(e=>e.forEach(i=>{if(i.isIntersecting){i.target.classList.add("in");io.unobserve(i.target)}}),{threshold:.1}):null;
  document.querySelectorAll(".rv").forEach(el=>io?io.observe(el):el.classList.add("in"));
});
