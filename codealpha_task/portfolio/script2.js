
const text = ["Frontend Developer", "Java Developer", "Web Designer"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  if (!deleting && j <= text[i].length) {
    current = text[i].substring(0, j++);
  } else if (deleting && j >= 0) {
    current = text[i].substring(0, j--);
  }

  document.getElementById("typing").innerHTML = current;

  if (j === text[i].length) deleting = true;
  if (j === 0) {
    deleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, 100);
}
type();
document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("light-mode");
};
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      alert("Message Sent ✅");
    }, () => {
      alert("Error ❌");
    });
});































