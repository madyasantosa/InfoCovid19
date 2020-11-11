const confirmed = document.querySelector("#confirmed");
const recovered = document.querySelector("#recovered");
const deaths = document.querySelector("#deaths");
confirmed.setAttribute("data-target", "368842");
recovered.setAttribute("data-target", "293653");
deaths.setAttribute("data-target", "12734");

document.querySelector("#last-update").innerText =
  "22 Oktober 2020 10:00 GMT +08:00";

// source data
const sourceData = document.querySelectorAll(".source-data");

for (i = 0; i < sourceData.length; i++) {
  sourceData[i].innerText = "Kementrian Kesehatan & JHU";
}

const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target.toLocaleString("id-ID");
      count.innerText = target;
    }
  };
  updateCount();
});
