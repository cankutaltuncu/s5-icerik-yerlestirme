// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

document.addEventListener("DOMContentLoaded", () => {
  const navItems = siteContent.nav;
  const navLinks = document.querySelectorAll("header nav a");
  if (navLinks.length > 0) {
    const navValues = Object.values(navItems);
    navLinks.forEach((link, index) => {
      if (navValues[index]) {
        link.textContent = navValues[index];
        link.href = "#";
        link.classList.add("italic");
      }
    });
  }

  const images = siteContent.images;
  const logoImg = document.getElementById("logo-img");
  const ctaImg = document.getElementById("cta-img");
  const middleImg = document.getElementById("middle-img");

  if (logoImg) {
    logoImg.src = images["logo-img"];
    logoImg.alt = "Şirket Logosu";
  }
  if (ctaImg) {
    ctaImg.src = images["cta-img"];
    ctaImg.alt = "CTA Görseli";
  }
  if (middleImg) {
    middleImg.src = images["accent-img"];
    middleImg.alt = "Grafikler";
  }

  const cta = siteContent.cta;
  const ctaH1 = document.querySelector(".cta .cta-text h1");
  const ctaButton = document.querySelector(".cta .cta-text button");

  if (ctaH1) {
    ctaH1.textContent = cta.h1;
  }
  if (ctaButton) {
    ctaButton.textContent = cta.button;
  }

  const topContent = siteContent["top-content"];
  const topContentBlocks = document.querySelectorAll(
    ".top-content .text-content"
  );

  if (topContentBlocks.length >= 2) {
    const leftH4 = topContentBlocks[0].querySelector("h4");
    const leftP = topContentBlocks[0].querySelector("p");
    if (leftH4) {
      leftH4.textContent = topContent["left-h4"];
    }
    if (leftP) {
      leftP.textContent = topContent["left-content"];
    }

    const rightH4 = topContentBlocks[1].querySelector("h4");
    const rightP = topContentBlocks[1].querySelector("p");
    if (rightH4) {
      rightH4.textContent = topContent["right-h4"];
    }
    if (rightP) {
      rightP.textContent = topContent["right-content"];
    }
  }

  const bottomContent = siteContent["bottom-content"];
  const bottomContentBlocks = document.querySelectorAll(
    ".bottom-content .text-content"
  );

  if (bottomContentBlocks.length >= 3) {
    const block1H4 = bottomContentBlocks[0].querySelector("h4");
    const block1P = bottomContentBlocks[0].querySelector("p");
    if (block1H4) {
      block1H4.textContent = bottomContent["left-h4"];
    }
    if (block1P) {
      block1P.textContent = bottomContent["left-content"];
    }

    const block2H4 = bottomContentBlocks[1].querySelector("h4");
    const block2P = bottomContentBlocks[1].querySelector("p");
    if (block2H4) {
      block2H4.textContent = bottomContent["middle-h4"];
    }
    if (block2P) {
      block2P.textContent = bottomContent["middle-content"];
    }

    const block3H4 = bottomContentBlocks[2].querySelector("h4");
    const block3P = bottomContentBlocks[2].querySelector("p");
    if (block3H4) {
      block3H4.textContent = bottomContent["right-h4"];
    }

    if (block3P) {
      block3P.textContent = bottomContent["right-content"];
    }
  }

  const contact = siteContent.contact;
  const contactH4 = document.querySelector(".contact h4");
  const contactPs = document.querySelectorAll(".contact p");

  if (contactH4) {
    contactH4.textContent = contact["contact-h4"];
  }

  if (contactPs.length >= 3) {
    contactPs[0].textContent = contact.address;
    contactPs[1].textContent = contact.phone;
    contactPs[2].textContent = contact.email;
  }

  const footer = siteContent.footer;
  const footerLink = document.querySelector("footer a");

  if (footerLink) {
    footerLink.textContent = footer.copyright;
    footerLink.href = "#";
    footerLink.classList.add("bold");
  }
});
