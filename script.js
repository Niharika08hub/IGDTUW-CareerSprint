// Navigation
function openSection(section) {
    window.location.href = `section.html?type=${section}`;
  }
  
  function goBack() {
    window.location.href = "index.html";
  }
  
  // Data (all Drive links controlled here)
  const data = {
    oa: {
      title: "OA Questions (Company Wise)",
      items: [
        { name: "Google", link: "https://drive.google.com/file/d/1znkt8Jmzf7BUVroiwDKIxdIPeg0P1rJe/view?usp=drivesdk" },
        { name: "Amazon", link: "https://drive.google.com/" },
        { name: "Microsoft", link: "https://drive.google.com/" },
        { name: "Uber", link: "https://drive.google.com/" },
        { name: "Flipkart", link: "https://drive.google.com/" },
        { name: "Meesho", link: "https://drive.google.com/" }
      ]
    },
  
    aptitude: {
      title: "Aptitude Preparation",
      items: [
        { name: "Quantitative Aptitude", link: "https://drive.google.com/" },
        { name: "Logical Reasoning", link: "https://drive.google.com/" },
        { name: "Puzzles", link: "https://drive.google.com/" },
        { name: "Basic Mathematics", link: "https://drive.google.com/" }
      ]
    },
  
    cs: {
      title: "CS Fundamentals",
      items: [
        { name: "DBMS", link: "https://drive.google.com/" },
        { name: "OOPS", link: "https://drive.google.com/" },
        { name: "Operating System", link: "https://drive.google.com/" },
        { name: "Computer Networks", link: "https://drive.google.com/" },
        { name: "DSA", link: "https://drive.google.com/" }
      ]
    },
  
    interview: {
      title: "Interview Questions",
      items: [
        { name: "Google Interview", link: "https://drive.google.com/" },
        { name: "Amazon Interview", link: "https://drive.google.com/" },
        { name: "Microsoft Interview", link: "https://drive.google.com/" }
      ]
    },
  
    roadmap: {
      title: "Preparation Roadmap",
      items: [
        { name: "Tech Field Roadmap", link: "https://drive.google.com/" },
        { name: "Non-Tech Field Roadmap", link: "https://drive.google.com/" }
      ]
    }
  };
  
  // Render section dynamically
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  
  if (type && data[type]) {
    document.getElementById("pageTitle").innerText = data[type].title;
  
    const container = document.getElementById("content");
  
    data[type].items.forEach(item => {
      const box = document.createElement("div");
      box.className = "inner-box";
      box.innerHTML = `<a href="${item.link}" target="_blank">${item.name}</a>`;
      container.appendChild(box);
    });
  }

  
//   function goBack() {
//     window.location.href = "index.html";
//   }


function openDrive(link) {
    window.open(link, '_blank');
  }

  //roadmap
  function openTechRoadmap() {
    window.location.href = "tech-roadmap.html";
  }

  function openNonTechRoadmap() {
    window.location.href = "non-tech.html";
  }
  
  
  
// Save user info
// page load pe check
// window.onload = function () {
//   if (localStorage.getItem("studentName")) {
//     document.getElementById("loginOverlay").style.display = "none";
//   }
// };

// document.getElementById("continueBtn").addEventListener("click", function () {
//   const name = document.getElementById("studentName").value.trim();
//   const branch = document.getElementById("studentBranch").value.trim();

//   if (name === "" || branch === "") {
//     alert("Please fill both name and branch");
//     return;
//   }

//   // store data
//   localStorage.setItem("studentName", name);
//   localStorage.setItem("studentBranch", branch);

//   // IMPORTANT: overlay hide
//   document.getElementById("loginOverlay").style.display = "none";
// });


// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("continueBtn").addEventListener("click", function () {
//     const name = document.getElementById("studentName").value.trim();
//     const branch = document.getElementById("studentBranch").value.trim();

//     if (name === "" || branch === "") {
//       alert("Please fill both fields");
//       return;
//     }

//     localStorage.setItem("studentName", name);
//     localStorage.setItem("studentBranch", branch);

//     document.getElementById("loginOverlay").style.display = "none";
//   });
// });
